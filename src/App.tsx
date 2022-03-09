import { CharactersProvider } from './hooks/useCharacters'
import { Home } from './pages/Home'

export function App() {
  return (
    <CharactersProvider>
      <Home />
    </CharactersProvider>
  )
}
