import { useEffect, useState } from 'react'
import { Heading, Flex, Button, Tag, TagLabel, Text, Skeleton } from '@chakra-ui/react'
import { ChatIcon, ArrowUpIcon } from '@chakra-ui/icons'
// import LRU from 'lru-cache'

import type { TArticle } from '@pages/api/fake'

type AppProps = {
  // item: TItem,
  art: TArticle
  idx: number
}

// const cache = new LRU({ max: 500 })

// const getPost = async (postURL: string) => {
//   const dataCached: TItem | undefined = cache.get(postURL)
//   console.log('cached: ', dataCached)
//   if (dataCached !== undefined) {
//     return dataCached
//   }
//   const res = await fetch(postURL)
//   let dataNew: TItem = await res.json()
//   const { hostname } = new URL(dataNew.url || 'https://news.ycombinator.com')
//   dataNew.hostname = hostname
//   dataNew.timeShow = getElapsedTime(dataNew.time)

//   const dataNewStr = JSON.stringify(dataNew)
//   cache.set(postURL, dataNewStr)
//   console.log('new: ', dataNewStr)

//   return dataNew
// }

const ListItem = ({ art, idx }: AppProps) => {
  // const [post, setPost] = useState<TItem | undefined>()

  // useEffect(() => {
  //   getPost(postURL).then(res => setPost(res))
  // }, [])

  return (
    <Flex direction="row" align={'center'} mb={4}>
      <Flex style={{ flex: 2 }} justify="center" mt={-8}>
        <Tag size={'md'} key={'md'} borderRadius="full" variant="solid" colorScheme="blue">
          <TagLabel>{idx}</TagLabel>
        </Tag>
      </Flex>
      <div style={{ flex: 12 }}>
        {/* <Skeleton isLoaded={ready ? false : true}> */}
        <Flex direction={'column'}>
          <Heading as="h1" size="sm">
            <a href={art.url}>{art.title}</a>
          </Heading>
          <Flex direction={'row'} justify="space-between" mt="2">
            <Text fontSize="sm" color="gray.500">
              {art.sources.name}
            </Text>
            <Text fontSize="sm">
              {art.publishedAt} - by <span style={{ color: 'blue.200' }}>{art.author || 'N/A'}</span>{' '}
            </Text>
          </Flex>
          <Flex direction="row">
            <Button border="none" leftIcon={<ArrowUpIcon />} colorScheme="blue" variant="ghost">
              {art.description}
            </Button>
            <Button border="none" leftIcon={<ChatIcon />} colorScheme="orange" variant="ghost">
              {art.content.slice(50)}
            </Button>
          </Flex>
        </Flex>
        {/* </Skeleton> */}
      </div>
    </Flex>
  )
}

export default ListItem

function getElapsedTime(date: number) {
  // get total seconds between the times
  var delta = Math.abs(new Date().getTime() / 1000 - date)
  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400)
  if (days) return `${days} days ago`
  delta -= days * 86400
  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24
  if (hours) return `${hours} hours ago`
  delta -= hours * 3600
  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60
  if (minutes) return `${minutes} minutes ago`
  delta -= minutes * 60
  // what's left is seconds
  var seconds = delta % 60
  return `${seconds} seconds ago`
}
