import { useRouter } from 'next/router'
import { ReactElement } from 'react'

import MenuButtom from '@common/components/MenuBottom'
import { Alpha, Beta, Gamma, Delta } from '@modules/dyn'
import { GetStaticProps, GetStaticPaths } from 'next'
import Page404 from '@modules/error'

const Page = () => {
  const { query } = useRouter()

  return query.slug === 'alpha' ? (
    <Alpha />
  ) : query.slug === 'beta' ? (
    <Beta />
  ) : query.slug === 'gamma' ? (
    <Gamma />
  ) : query.slug === 'delta' ? (
    <Delta />
  ) : (
    <Page404 />
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <MenuButtom />
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page

const PATHS = ['alpha', 'beta', 'gamma', 'delta']

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: PATHS.map(p => ({ params: { slug: p } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

// export const getStaticProps: GetStaticProps = async () => {
//   const pageCount = 3
//   let names: string[] = []

//   for (let i = 0; i < pageCount; i++) {
//     const resp = await fetch(`https://swapi.dev/api/people?page=${i + 1}`)
//     const data = await resp.json()
//     console.log(data.results)
//     data.results.forEach((res: any) => names.push(res.name))
//   }

//   console.log(names)

//   return {
//     props: {
//       names
//     }
//   }
// }
