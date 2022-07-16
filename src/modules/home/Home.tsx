import { Divider } from '@chakra-ui/react'

// Per-page layout tying
import Layout from '@layouts/core'
import { ReactElement } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

// Modules
import Calculator from '@modules/calculator'
import CounterSample from '@modules/counter'
import SimpleSample from '@modules/simplesample'
import ChakraSample from '@modules/chakrasample'
import FormSample from '@modules/formsample'

const Home = () => {
  return (
    <>
      <ChakraSample />
      <Divider h="10px" bgColor="orangered" />
      <SimpleSample />
      <Divider h="10px" bgColor="orangered" />
      <CounterSample />
      <Divider h="10px" bgColor="orangered" />
      <FormSample />
      <Divider h="10px" bgColor="orangered" />
      <Calculator />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>{page}</QueryClientProvider>
    </Layout>
  )
}

export default Home
