import { useRef } from 'react'
import { useColorMode, Input } from '@chakra-ui/react'
import useStore from '@common/context/store'

/*
// Get the user
const { data: user } = useQuery(['user', email], getUserByEmail)
 
// Then get the user's projects
const { isIdle, data: projects } = useQuery(
  ['projects', user.id],
  getProjectsByUser,
  {
    // `user` would be `null` at first (falsy),
    // so the query will not execute until the user exists
    enabled: user,
  }
)
*/

import styles from './Counter.module.css'
import { useQuery } from 'react-query'

import { fetchCount } from './counterAPI'
const getCounter = () => fetch('/api/counter').then(res => res.json())

function Counter() {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'blue.50', dark: 'blue.900' }

  const inputRef = useRef<HTMLInputElement>(null)

  const stateCount = useStore(s => s.count)
  const actionIncre = useStore(s => s.increment)
  const actionDecre = useStore(s => s.decrement)
  const actionIncreBy = useStore(s => s.increBy)
  const actionIncreOdd = useStore(s => s.increOdd)
  // const actionIncreAsync = useStore(s => s.increAsync)
  const actionClear = useStore(s => s.clear)

  const handlerIncreBy = () => {
    const amount = Number(inputRef.current?.value)
    actionIncreBy(amount)
  }

  const handlerIncreOdd = () => {
    const amount = Number(inputRef.current?.value)
    actionIncreOdd(amount)
  }

  // query
  // const queryClient = useQueryClient()
  const query = useQuery(['counter'], getCounter, {
    refetchOnWindowFocus: false,
    enabled: false,
  })
  // const mutation = useMutation(fetchCount, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries(['counter'])
  //   },
  // })

  const handlerIncreAsync = () => {
    query.refetch().then(res => {
      actionIncreBy(res.data.amount)
    })
  }

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={actionDecre}>
          -
        </button>
        <span className={styles.value}>{stateCount}</span>
        <button className={styles.button} aria-label="Increment value" onClick={actionIncre}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <Input
          size="xl"
          width={20}
          focusBorderColor="pink.400"
          bg={bgColor[colorMode]}
          className={styles.textbox}
          type="text"
          aria-label="Set increment amount"
          ref={inputRef}
        />
        <button className={styles.button} onClick={handlerIncreBy}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={handlerIncreAsync}>
          Add Async {query.isFetching ? 'loading...' : ''}
        </button>
        <button className={styles.button} onClick={handlerIncreOdd}>
          Add If Odd
        </button>
        <button className={styles.button} onClick={actionClear}>
          Clear
        </button>
      </div>
    </div>
  )
}

export default Counter
