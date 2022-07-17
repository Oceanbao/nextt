import { useRouter } from 'next/router'
import { ReactElement } from 'react'

import MenuButtom from '@common/components/MenuBottom'
import Page404 from '@modules/error'
import { Alpha, Beta, Gamma, Delta } from '@modules/dyn'

const Page = () => {
  const router = useRouter()

  return router.query.slug === 'alpha' ? (
    <Alpha />
  ) : router.query.slug === 'beta' ? (
    <Beta />
  ) : router.query.slug === 'gamma' ? (
    <Gamma />
  ) : router.query.slug === 'delta' ? (
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
