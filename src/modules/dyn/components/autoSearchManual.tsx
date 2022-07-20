import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

const fetchNames = async () => {
  const pageCount = 3
  let names: string[] = []

  for (let i = 0; i < pageCount; i++) {
    const resp = await fetch(`https://swapi.dev/api/people?page=${i + 1}`)
    const data = await resp.json()
    data.results.forEach((res: any) => names.push(res.name))
  }

  return names
}

const getNames = () => {
  let names: string[] | '' = JSON.parse(localStorage.getItem('starWarNames') ?? '')
  if (names === '' || names.length === 0) {
    fetchNames().then(res => {
      names = res
    })
  }
  localStorage.setItem('starWarNames', JSON.stringify(names))
  return names as string[]
}

export default function AutoSearch() {
  const [query, setQuery] = useState('')
  const [hasResults, setHasResults] = useState(false)
  const [results, setResults] = useState([''])

  console.log('RENDER')

  useEffect(() => {
    const names = getNames()

    const results = names.filter(n => query && n.toLowerCase().includes(query.toLowerCase()))
    const hasResults = results && results.length > 0

    setHasResults(hasResults)
    setResults(results)

    if (hasResults) {
      document.body.addEventListener('keydown', onKeyDown)
    } else {
      document.body.removeEventListener('keydown', onKeyDown)
    }

    return () => document.body.removeEventListener('keydown', onKeyDown)
  }, [query])

  const inputRef = useRef<HTMLInputElement>(null)
  const resultRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    inputRef.current!.focus()
  }, [])

  function onKeyDown(event: KeyboardEvent) {
    const isUp = event.key === 'ArrowUp'
    const isDown = event.key === 'ArrowDown'
    const inputIsFocused = document.activeElement === inputRef.current

    const resultsItems = Array.from(resultRef.current!.children)

    const activeResultIndex = resultsItems.findIndex(child => {
      return child.querySelector('span') === document.activeElement
    })

    if (isUp) {
      console.log('Up')
      if (inputIsFocused) {
        const elem = resultsItems[resultsItems.length - 1]
        console.log('elem: ', elem)
        elem.querySelector('span')!.focus()
      } else if (resultsItems[activeResultIndex - 1]) {
        resultsItems[activeResultIndex - 1].querySelector('span')!.focus()
      } else {
        inputRef.current!.focus()
      }
    }

    if (isDown) {
      console.log('Down')
      if (inputIsFocused) {
        const elem = resultsItems[0]
        console.log('elem: ', elem)
        const span = elem.querySelector('span')
        console.log('span: ', span)
        if (span) setTimeout(() => span.focus(), 100)
      } else if (resultsItems[activeResultIndex + 1]) {
        resultsItems[activeResultIndex + 1].querySelector('span')!.focus()
      } else {
        inputRef.current!.focus()
      }
    }
  }

  function handleOnChange(event: React.ChangeEvent) {
    setQuery((event.currentTarget as HTMLInputElement)!.value)
  }

  return (
    <Box h="20vh" p="0 0.5rem" display="flex" flexDir="column" justifyContent="center" alignItems="center">
      <Head>
        <title>Auto Search</title>
        <meta name="description" content="Demo for autocomplete in searching" />
      </Head>

      <Box p="5rem 0" flex="1" display="flex" flexDir="column" justifyContent="center" alignItems="center">
        <Text>SWAPI Name Search</Text>
        <form
          method="post"
          autoComplete="off"
          style={{
            display: 'block',
            position: 'relative',
            width: '100%',
            maxWidth: '20rem',
            margin: '0 auto 2rem',
          }}
        >
          <Box
            as="input"
            ref={inputRef}
            type="search"
            name="query"
            onChange={handleOnChange as React.ChangeEventHandler<HTMLInputElement>}
            style={{
              width: '100%',
              fontSize: '1.5rem',
              background: 'none',
              padding: '0.5em 0.8em',
              border: 'solid 2px gray',
              borderRadius: '10rem',
              outline: 'none',
            }}
            _focus={{
              boxShadow: '0 0 8x rgba(138, 43, 226, 0.25)',
              border: 'solid 2px blueviolet',
            }}
          />
          {hasResults && (
            <Box pos="absolute" top="100%" w="100%" p="1em 1em 0">
              <ul
                ref={resultRef}
                style={{
                  width: '100%',
                  maxWidth: '20rem',
                  fontSize: '1.5em',
                  listStyle: 'none',
                  backgroundColor: 'white',
                  padding: 0,
                  border: 'solid 2px gray',
                  margin: '0 auto',
                }}
              >
                {results.map(res => (
                  <li key={res}>
                    <Box as="span" _focus={{ backgroundColor: 'gray' }}>
                      {res}
                    </Box>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </form>
      </Box>
    </Box>
  )
}
