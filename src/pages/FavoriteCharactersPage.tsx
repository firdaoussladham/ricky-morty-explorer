import CharacterCard from '@/components/molecules/cards/CharacterCard'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FavoriteCharactersPage() {
  const [characters, setCharacters] = useState<any[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  // Load favorites and character data
  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(favIds)

    if (favIds.length > 0) {
      axios.get(`https://rickandmortyapi.com/api/character/${favIds.join(',')}`).then((res) => {
        setCharacters(Array.isArray(res.data) ? res.data : [res.data])
      })
    }
  }, [])

  const toggleFavorite = (id: number) => {
    let updated = [...favorites]
    if (favorites.includes(id)) {
      updated = favorites.filter((fid) => fid !== id)
    } else {
      updated.push(id)
    }

    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))

    // Update visible characters list
    setCharacters((prev) => prev.filter((c) => updated.includes(c.id)))
  }

  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Favorite Characters</h1>

      {favorites.length === 0 ? (
        <div className="text-muted-foreground py-10 text-center">
          You have no favorite characters yet.
        </div>
      ) : (
        <div className="xs:grid-cols-1 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}
