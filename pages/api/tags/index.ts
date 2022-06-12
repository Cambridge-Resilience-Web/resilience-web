import { Tag } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs'
import prisma from '../../../prisma/client'

type ResponseData = {
    error?: string
    data?: Tag | Tag[]
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) => {
    try {
        const { site } = req.query

        switch (req.method) {
            case 'GET': {
                const tags: Tag[] = await prisma.tag.findMany({
                    where: {
                        location: {
                            slug: {
                                contains: site || 'cambridge-city',
                            },
                        },
                    },
                    orderBy: [
                        {
                            id: 'asc',
                        },
                    ],
                })
                res.status(200)
                res.json({ data: tags })

                break
            }
            case 'POST': {
                const tag = await prisma.tag.create({
                    data: req.body,
                })
                res.status(201)
                res.json({ data: tag })

                break
            }
            case 'PUT': {
                const tag = await prisma.tag.update({
                    where: {
                        location: {
                            slug: {
                                contains: site,
                            },
                        },
                    },
                })

                res.status(200)
                res.json({ data: tag })

                break
            }
            default: {
                res.status(500)
                res.json({
                    error: `Method ${req.method} not supported at this endpoint`,
                })
                break
            }
        }
    } catch (e) {
        res.status(500)
        res.json({
            error: `Unable to ${req.method} process database operation - ${e}`,
        })
    }
}

export default withSentry(handler)

