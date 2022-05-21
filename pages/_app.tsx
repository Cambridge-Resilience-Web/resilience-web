import Head from 'next/head'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SessionProvider } from 'next-auth/react'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '../styles/colors.css'
import '../styles/styles.global.scss'
import StoreProvider from '@store/StoreProvider'

const theme = extendTheme({
    styles: {
        global: {
            'button:focus': {
                boxShadow: 'none !important',
            },
            'input:focus': {
                boxShadow: 'none !important',
            },
        },
    },
    colors: {
        rw: {
            600: '#6BA182',
            700: '#3A8159',
            900: '#09622f',
        },
    },
})

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title="Cambridge Resilience Web"
                openGraph={{
                    type: 'website',
                    locale: 'en_GB',
                    title: 'Cambridge Resilience Web',
                    description:
                        'A web of connections, showing local groups working to co-create a more socially and environmentally just city.',
                }}
            />
            <Head>
                <meta charSet="utf-8" />
                <meta property="og:locale" content="en_GB" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
                />
                <meta name="og:image" content="static/preview-image.png" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Script
                strategy="afterInteractive"
                src="https://cabin.cambridgeresilienceweb.org.uk/hello.js"
            />
            <Script
                defer
                data-domain-id="0d744e7e937f32cc835ae0ce6188555b3f2dbd2c"
                src="https://fairdatacenter.de/cdn/fair.js"
            />
            <SessionProvider
                refetchInterval={5 * 60}
                session={pageProps.session}
            >
                <QueryClientProvider client={queryClient}>
                    <StoreProvider>
                        <ChakraProvider theme={theme}>
                            <Component {...pageProps} />
                        </ChakraProvider>
                    </StoreProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </SessionProvider>
        </>
    )
}

export default App
