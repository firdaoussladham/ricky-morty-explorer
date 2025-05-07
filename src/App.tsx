// src/App.tsx
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/layouts/DefaultLayout'
import CharacterDetailPage from './pages/CharacterDetailPage'
import CharacterListPage from './pages/CharacterListPage'
import FavoriteCharactersPage from './pages/FavoriteCharactersPage'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={<CharacterListPage />}
        />
        <Route
          path="/character/:id"
          element={<CharacterDetailPage />}
        />
        <Route
          path="/favorites"
          element={<FavoriteCharactersPage />}
        />
      </Route>
    </Routes>
  )
}

export default App
