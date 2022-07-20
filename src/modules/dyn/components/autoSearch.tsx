import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
// import { atom, useAtom } from 'jotai'
// import { atomWithImmer } from 'jotai/immer'

import chroma from 'chroma-js'
import Select, { StylesConfig } from 'react-select'
import { ColourOption } from './colourConfig'

// const coloursAtom = atomWithImmer<string[]>([])

// const atomWithLocalStorage = (key, initialValue) => {
//   const getInitialValue = () => {
//     const item = localStorage.getItem(key)
//     if (item !== null) return JSON.parse(item)
//     return initialValue
//   }
//   const baseAtom = atomWithImmer(getInitialValue())
//   const derivedAtom = atom(
//     (get) => get(baseAtom),
//     (get, set, update) => {
//       const nextValue = typeof update === 'function' ? update(get(baseAtom)) : update
//       set(baseAtom, nextValue)
//       localStorage.setItem(key, JSON.stringify(nextValue))
//     }
//   )
//   return derivedAtom
// }

const COLOR = [
  '#00B8D9',
  '#0052CC',
  '#5243AA',
  '#FF5630',
  '#FF8B00',
  '#FFC400',
  '#36B37E',
  '#00875A',
  '#253858',
  '#666666',
]

const colourStyles: StylesConfig<ColourOption, true> = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled ? (isSelected ? data.color : color.alpha(0.3).css()) : undefined,
      },
    }
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
}

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

const randomColour = () => COLOR[Math.floor(Math.random() * COLOR.length)]

export default function AutoSearch() {
  const [options, setOptions] = useState<ColourOption[]>()
  const [names, setNames] = useState<string[]>()

  console.log('RENDER')

  useEffect(() => {
    let namesStored = localStorage.getItem('starWarNames')
    console.log('firstNS: ', namesStored)
    if (namesStored === null) {
      fetchNames().then(res => {
        console.log('fetched: ', res)
        localStorage.setItem('starWarNames', JSON.stringify(res))
        setNames(res)
      })
    } else {
      console.log('local: ', namesStored)
      const names = JSON.parse(namesStored)
      setNames(names)
    }
  }, [])

  useEffect(() => {
    console.log('setOptions')
    if (names === undefined || names.length === 0) return
    console.log('setOptions OK')

    const colourOptions: ColourOption[] = []

    names.forEach((name, idx) => {
      let option: ColourOption = {
        value: name,
        label: name,
        color: randomColour(),
      }
      if (idx === 0) option = { ...option, isDisabled: true }
      if (idx === 1) option = { ...option, isFixed: true }
      colourOptions.push(option)
    })

    setOptions(colourOptions)
  }, [names])

  return (
    <Box h="20vh" p="0 0.5rem" display="flex" flexDir="column" justifyContent="center" alignItems="center">
      <Head>
        <title>Auto Search</title>
        <meta name="description" content="Demo for autocomplete in searching" />
      </Head>

      <Text>SWAPI Name Search</Text>
      {options !== undefined && (
        <Select
          instanceId="autoSelect"
          closeMenuOnSelect={false}
          defaultValue={[options[0], options[1]]}
          isMulti
          options={options}
          styles={colourStyles}
        />
      )}
    </Box>
  )
}
