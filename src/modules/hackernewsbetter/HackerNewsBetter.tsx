import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { Story } from './components/Story'
import { apiHelper } from './utils/apiHelper.js'
import Pagination from './components/Pagination'
import Nav from './components/Nav'
import { motion, AnimatePresence } from 'framer-motion'
import { getPageDetails } from './utils/pageHelper'
import styled from '@emotion/styled'
import { GetServerSideProps } from 'next'

const StyledItems = styled.div`
  .header {
    margin-top: 115px;
  }

  .section {
    &:last-child {
      margin-bottom: 25px;
    }
  }
`

type AppProps = {
  result: any
  pageDetails: any
}

export default function Items({ result, pageDetails }: AppProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [storiesPerPage, setStoriesPerPage] = useState(20)
  const [direction, setDirection] = useState('forward')

  // Get current posts
  const indexOfLastStory = currentPage * storiesPerPage
  const indexOfFirstStory = indexOfLastStory - storiesPerPage

  return (
    <StyledItems>
      <Head>
        <title>{pageDetails}</title>
      </Head>
      <header className="header">
        <Nav setCurrentPage={setCurrentPage} />
        <Pagination
          storiesPerPage={storiesPerPage}
          totalStories={result.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setDirection={setDirection}
        />
      </header>
      <AnimatePresence>
        {result.slice(indexOfFirstStory, indexOfLastStory).map((id: number) => (
          <motion.section exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} key={id} className="section">
            <Story key={id} storyId={id} direction={direction} />
          </motion.section>
        ))}
      </AnimatePresence>
    </StyledItems>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const pathname = context.resolvedUrl
  const pageDetails = getPageDetails(pathname)

  const result = await axios.get(apiHelper(pathname)).then(({ data }) => data)
  return {
    props: {
      result,
      pageDetails,
    },
  }
}
