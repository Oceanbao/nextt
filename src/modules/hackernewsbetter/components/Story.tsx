import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import mapTime from './../utils/mapTime'
import { motion } from 'framer-motion'
import axios from 'axios'
import { storyUrl } from './../utils/apiHelper'
import NProgress from 'nprogress'
import type { TItem } from './Comments'
import styled from '@emotion/styled'

type AppProps = {
  storyId: number
  direction: string
}

const StyledStory = styled.div`
  .storyWrapper {
    display: grid;
    grid-template-columns: 90px 1fr;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 25px 20px 0px;
    border-top: 1px solid #eee;
    background-color: #fff;
    &:first-of-type {
      border-top: 0;
    }
    &:last-child {
      border-bottom: 1px solid #eee;
    }
  }

  .scores {
    place-self: center;
    span {
      color: #3d3d3d;
      font-size: 1.1rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .storyTitle {
    a {
      padding: 0.3rem 0.3rem 0.3rem 0;
    }
    color: #2d4055;
    margin-bottom: 5px;
    font-size: 15px;
    line-height: 1.4;
    margin: 0;
    text-decoration: none;
    width: fit-content;
  }

  .storyMeta {
    font-size: 0.8em;
    color: #696969;
    width: fit-content;
    padding: 0.3rem 0.3rem 0.3rem 0;
    span:not(:first-child):before {
      font-style: normal;
      content: '|';
      margin: 0 4px;
    }
  }

  .comments {
    text-decoration: underline;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      color: #0f4481;
    }
  }
`

export const Story = ({ storyId, direction }: AppProps) => {
  const [story, setStory] = useState<TItem | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  let activeRequests = 0
  NProgress.configure({ showSpinner: false })

  function load() {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    NProgress.set(0.3)
  }

  function stop() {
    if (activeRequests > 0) {
      return
    }

    setIsLoading(false)
    NProgress.done()
  }

  const getStory = async (storyId: number) => {
    if (activeRequests === 0) {
      load()
    }

    activeRequests++

    try {
      const result = await axios.get(`${storyUrl + storyId}.json`).then(({ data }) => data)
      return result
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    } finally {
      activeRequests -= 1
      if (activeRequests === 0) {
        stop()
      }
    }
  }

  useEffect(() => {
    getStory(storyId).then(data => {
      data && data.url && setStory(data)
    })
  }, [])

  if (!story) return <div>loading...</div>

  return story.url ? (
    <StyledStory>
      <motion.div
        className="storyWrapper"
        initial={{ opacity: 0, x: direction === 'forward' ? 10 : -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <div className="scores">
          <span>{story.score}</span>
        </div>
        <div className="texts">
          <h1 className="storyTitle">
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h1>
          <div className="storyMeta">
            <span>by: {story.by}</span>
            <span>{mapTime(story.time)} ago</span>
            <span>
              <Link href={`/item/${story.id}`}>
                <a>
                  <span className="comments">{story.descendants ? story.descendants : 0} comments</span>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </motion.div>
    </StyledStory>
  ) : null
}
