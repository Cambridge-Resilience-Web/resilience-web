export const REMOTE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://resilienceweb.org.uk'

export const REMOTE_HOSTNAME =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? process.env.VERCEL_URL
    : process.env.NODE_ENV === 'development'
      ? 'localhost:3000'
      : 'resilienceweb.org.uk'

export const PROTOCOL =
  process.env.NODE_ENV === 'development' ? 'http' : 'https'

const config = {
  digitalOceanSpaces: 'https://resilienceweb.ams3.digitaloceanspaces.com/',
  bucketName: 'resilienceweb',
  emailServer: {
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  },
}

export default config
