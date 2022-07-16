import Head from 'next/head'
import { Heading, Flex, Button, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import styles from './HackerNews.module.css'
import ListItem from './components/ListItem'
import NavMenu from '@common/components/Menu'
import { useEffect, useState } from 'react'

export type TItem = {
  title: string
  score: number
  descendants: number
  by: string
  time: number
  timeShow: string
  url: string
  hostname: string
}

const HackerNews = () => {
  const [postURLs, setPostURLs] = useState<string[]>([])
  const [page, setPage] = useState<string>('topstories')

  useEffect(() => {
    setPostURLs([])
    getPosts(page).then(res => setPostURLs(res))
  }, [page, setPostURLs])

  return (
    <Flex display="flex" minH="100vh" direction="column" justifyContent="center" alignItems="center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={styles.main} px={[4, 10]}>
        <Heading as="h1" size={{ base: 'xl', md: '4xl' }}>
          Hacker <span style={{ color: 'teal' }}>news</span>
        </Heading>

        <NavMenu />

        <Flex direction="row" justify="space-between" align="center" width="100%" mt="12">
          <Heading as="h1" size={{ base: 'md', md: 'xl' }}>
            {page}
          </Heading>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Page
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setPage('topstories')}>Top</MenuItem>
              <MenuItem onClick={() => setPage('newstories')}>New</MenuItem>
              <MenuItem onClick={() => setPage('showstories')}>Show</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex direction="column" width="100%" mt="8">
          {postURLs.map((postURL, idx) => (
            <ListItem postURL={postURL} key={idx} idx={idx} />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

// {posts.map((post, idx) => (
//   <ListItem item={post} key={post.id} index={(page - 1).  * PAGE_SIZE + idx + 1} />
// ))}

export default HackerNews

async function getPosts(page: string) {
  const baseURL = 'https://hacker-news.firebaseio.com/v0/'
  const pageURL = `${baseURL}${page}.json`
  const pageSize = 20
  let pageNum = 1
  let posts = await fetch(pageURL).then(res => res.json())

  pageNum = pageNum == 0 ? 0 : pageNum - 1
  const slicedPosts: number[] = posts.slice(
    Number(pageNum) * Number(pageSize),
    (Number(pageNum) + 1) * Number(pageSize)
  )
  const postURLs = slicedPosts.map(postID => `https://hacker-news.firebaseio.com/v1/item/${postID}.json`)

  return postURLs
}

// const onLoadMore = () => {
//  router.push(`?page=${Number(page)+1}`)
// }
// <MenuList>
//   { Array.from(Array(25).keys()).map(item => <MenuItem key={item} onClick={() => onLoadMore(item+1)}>{item+1}</MenuItem>)}
// </MenuList>
