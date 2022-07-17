import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const ZArticle = z.object({
  sources: z.object({
    id: z.string(),
    name: z.string(),
  }),
  author: z.nullable(z.string()),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  urlToImage: z.string(),
  publishedAt: z.string(),
  content: z.string(),
})

export type TArticle = z.infer<typeof ZArticle>

const ZNews = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: z.array(ZArticle),
})

export type TNews = z.infer<typeof ZNews>

// https://newsapi.org/docs/get-started

const ARTICLE: TArticle = {
  sources: {
    id: 'bbc-news',
    name: 'BBC World Service',
  },
  author: null,
  title: 'Former NASCAR driver Bobby East fatally stabbed at California gas station - CBS News',
  description: 'The suspect was later shot and killed by police at an apartment in Anaheim.',
  url: 'https://www.cbsnews.com/news/bobby-east-nascar-killed-california/',
  urlToImage:
    'https://assets3.cbsnewsstatic.com/hub/i/r/2022/07/16/66ab77f0-d25d-49a3-95f7-dc8d51774740/thumbnail/1200x630/68c6d9f097aca1c183c4635a4e33532e/gettyimages-57021775-1.jpg',
  publishedAt: '2022-07-16T23:23:00Z',
  content:
    'Former NASCAR driver Bobby East was killed in a stabbing at a Southern California gas station, authorities said Saturday. The suspect was later shot and killed by police. \r\nOn Wednesday evening...',
}

const NEWS: TNews = {
  status: 'ok',
  totalResults: 38,
  articles: Array.from(Array(38).keys()).map(_ => ARTICLE),
}

const handler: NextApiHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  console.log('HIT /api/fake')

  await delay(3000)

  res.json(NEWS)
}

export default handler
