import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import type { NextComponentType } from 'next'
import React, { ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

// import { SessionProvider } from 'next-auth/react'

// import '@common/styles/globals.css'
// import { globalStyles } from '../lib/styles/globals'

import theme from '@common/styles/theme'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  // Session Provider from auth-next
  // <SessionProvider session={pageProps.session}>
  //  ...
  // </SessionProvider>
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
