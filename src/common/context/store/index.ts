import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'

interface IThemeSlice {
  isDarkMode: boolean
  toggleTheme: () => void
}

interface ICountSlice {
  count: number
  clear: () => void
  increment: () => void
  decrement: () => void
  increBy: (value: number) => void
  increOdd: (value: number) => void
  increAsync: () => void
}

interface IStore extends IThemeSlice, ICountSlice {}

const useStore = create<IStore>()(
  persist(
    set => ({
      count: 0,
      clear: () =>
        set(
          produce(s => {
            s.count = 0
          })
        ),
      increment: () =>
        set(
          produce(s => {
            s.count += 1
          })
        ),
      decrement: () =>
        set(
          produce(s => {
            s.count -= 1
          })
        ),
      increBy: value =>
        set(
          produce(s => {
            s.count += value
          })
        ),
      increOdd: value =>
        set(
          produce(s => {
            value % 2 !== 0 ? (s.count += value) : s.count
          })
        ),
      increAsync: async () => {
        const resp = await fetch('/api/counter')
        console.log(resp)
        set(
          produce(s => {
            s.count += resp
          })
        )
      },
      isDarkMode: true,
      toggleTheme: () =>
        set(
          produce(s => {
            s.isDarkMode = !s.isDarkMode
          })
        ),
    }),
    {
      name: 'app-store',
      getStorage: () => sessionStorage,
    }
  )
)

export default useStore
