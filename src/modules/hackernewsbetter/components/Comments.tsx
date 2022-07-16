import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import mapTime from './../utils/mapTime'
import { storyUrl } from './../utils/apiHelper'
import axios from 'axios'

export type TItem = {
  id: number
  title: string
  score: number
  kids: number[]
  descendants: number
  by: string
  time: number
  timeShow: string
  url: string
  hostname: string
  text: string
}

const StyledComment = styled.li`
  list-style: none;

  .by {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #747474;
    a {
      color: #747474;
      text-decoration: underline;
    }
  }

  .text {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    overflow-wrap: break-word;

    pre {
      white-space: pre-wrap;
    }
  }

  .children {
    padding-left: 1rem;
    border-left: 2px solid #eee;
  }
`

type AppProps = {
  commentId: number
}

const Comments = ({ commentId }: AppProps) => {
  const [comment, setComment] = useState<TItem | undefined>()
  const [loading, setLoading] = useState(true)

  const getComment = async (commentId: number) => {
    try {
      const result = await axios.get(`${storyUrl + commentId}.json`).then(({ data }) => data)
      setLoading(false)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComment(commentId).then(data => {
      setComment(data)
    })
  }, [])

  if (loading) return <div>loading...</div>
  return (
    <StyledComment>
      <div className="by">
        <span>
          {comment?.by} {mapTime(comment?.time)} ago
        </span>
      </div>
      <div className="text" dangerouslySetInnerHTML={{ __html: comment ? comment.text : '' }}></div>
      <ul className="children">
        {comment?.kids ? comment?.kids.map(id => <Comments commentId={id} key={id} />) : null}
      </ul>
    </StyledComment>
  )
}

export default Comments
