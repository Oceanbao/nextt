import Head from 'next/head'
import axios from 'axios'
import Nav from './components/Nav'
import { storyUrl } from './utils/apiHelper'
import Comments from './components/Comments'
import mapTime from './utils/mapTime'
import styled from '@emotion/styled'

const StyledItem = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: #2d4055;

  .itemHeader {
    margin: 25px auto;
    padding-bottom: 0px;
  }

  .viewHeader {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #fff;
    margin-top: 3.5rem;
    padding: 1.5rem 1.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    h1 {
      display: inline;
      font-size: 1.2em;
      margin: 0;
    }

    p {
      color: #747474;
      font-size: 0.9em;
      margin: 0;
      margin-top: 1rem;
    }
  }

  .comments {
    background-color: #fff;
    margin-top: 10px;
    padding: 0 1.5rem 0.5rem;

    a {
      text-decoration: underline;
    }
  }

  .commentsHeader {
    margin: 0;
    font-size: 1rem;
    padding: 1rem 0;
    position: relative;
  }

  .commentChildren {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .comment {
    border-top: 1px solid #eee;
    position: relative;
    list-style: none;
  }
`

const getItem = async (id: number) => {
  try {
    const result = await axios.get(`${storyUrl + id}.json`).then(({ data }) => data)
    return result
  } catch (error) {
    console.error(error)
  }
}

type ItemProps = {
  title: string
  url: string
  score: number
  time: number
  by: string
  descendants: string
  kids: number[]
}
export default function Item({ itemData }: { itemData: ItemProps }) {
  return (
    <StyledItem>
      <Head>
        <title>Hacker News Next | {itemData.title}</title>
      </Head>
      <header className="itemHeader">
        <Nav />
      </header>
      <div className="viewHeader">
        <a href={itemData.url} target="_blank">
          <h1>{itemData.title}</h1>
        </a>
        <p>
          {itemData.score} points | by {itemData.by} {mapTime(itemData.time)} ago
        </p>
      </div>
      <div className="comments">
        <p className="commentsHeader">{itemData.kids ? itemData.descendants + ' comments' : 'No comments yet.'}</p>
        <ul className="commentChildren">
          {itemData.kids ? itemData.kids.map((id: number) => <Comments commentId={id} key={id} />) : null}
        </ul>
      </div>
    </StyledItem>
  )
}

export async function getServerSideProps({ id }: { id: number }) {
  const itemData = await getItem(id)
  return {
    props: {
      itemData,
    },
  }
}
