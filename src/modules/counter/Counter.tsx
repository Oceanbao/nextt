import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const Counter = dynamic(() => import('@modules/counter/components/Counter'), {
  ssr: false,
})

import stylesCounter from '@common/styles/Home.module.css'

const spin = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`

const spinAnimation = `${spin} infinite 3s linear`

const CounterSample: NextPage = () => {
  return (
    <div className={stylesCounter.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={stylesCounter.header}>
        <Box animation={spinAnimation}>
          <Image src="/logo.svg" className={stylesCounter.logo} width={300} height={300} alt="logo" />
        </Box>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default CounterSample
