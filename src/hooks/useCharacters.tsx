import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { api } from '../service/api'

type CharProps = {
  id: string
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

type DataProps = {
  data: {
    results: CharProps[]
  }
}

type CharactersProviderProps = {
  children: ReactNode
}

const CharactersContext = createContext<CharProps[]>([])

export function CharactersProvider({ children }: CharactersProviderProps) {
  const [characters, setCharacters] = useState<CharProps[]>([])

  useEffect(() => {
    async function loadCharacters(): Promise<void> {
      try {
        const { data } = await api.get<DataProps>(
          `series/403/characters?&limit=20&apikey=${process.env.REACT_APP_KEY}`
        )
        console.log(data)
        const response = data.data.results
        setCharacters(response)
      } catch (error) {
        console.log(error)
      }
    }
    loadCharacters()
  }, [])

  return (
    <CharactersContext.Provider value={characters}>
      {children}
    </CharactersContext.Provider>
  )
}

export function useCharacters() {
  const context = useContext(CharactersContext)

  return context
}
