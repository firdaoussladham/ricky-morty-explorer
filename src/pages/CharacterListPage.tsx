import CharacterCard from '@/components/molecules/cards/CharacterCard'
import { CharacterPagination } from '@/components/molecules/pagination/CharacterPagination'
import type { Character, CharacterApiResponse } from '@/types/character.types'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export default function CharacterListPage() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([])
  const [characters, setCharacters] = useState<Character[]>([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    gender: '',
    species: '',
  })

  // Load all characters once at startup
  useEffect(() => {
    const fetchAllCharacters = async () => {
      setIsLoading(true)
      let allResults: Character[] = []
      let nextUrl: string | null = BASE_URL

      try {
        while (nextUrl) {
          const { data } = await axios.get<CharacterApiResponse>(nextUrl)
          allResults = [...allResults, ...data.results]
          nextUrl = data.info.next
        }
        setAllCharacters(allResults)
      } catch (error) {
        console.error('Failed to load characters:', error)
        setAllCharacters([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchAllCharacters()
  }, [])

  // Local filtering + pagination
  useEffect(() => {
    const filtered = allCharacters
      .filter((char) => {
        return (
          (filters.name === '' || char.name.toLowerCase().includes(filters.name.toLowerCase())) &&
          (filters.status === '' || char.status.toLowerCase() === filters.status.toLowerCase()) &&
          (filters.gender === '' || char.gender.toLowerCase() === filters.gender.toLowerCase()) &&
          (filters.species === '' ||
            char.species.toLowerCase().includes(filters.species.toLowerCase()))
        )
      })
      .sort((a, b) => {
        const aFav = favorites.includes(a.id)
        const bFav = favorites.includes(b.id)
        return Number(bFav) - Number(aFav) // true → 1, false → 0
      })

    const itemsPerPage = 20
    const start = (page - 1) * itemsPerPage
    const paginated = filtered.slice(start, start + itemsPerPage)

    setCharacters(paginated)
    setTotalPages(Math.ceil(filtered.length / itemsPerPage))
  }, [filters, allCharacters, page, favorites]) // ← add favorites to dependencies!

  const toggleFavorite = (id: number) => {
    let updatedFavorites = [...favorites]
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((f) => f !== id)
    } else {
      updatedFavorites.push(id)
    }
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="space-y-4 px-6">
      <h1 className="text-2xl font-bold">Character List</h1>

      {/* 🔎 Filters */}
      <div className="flex flex-wrap gap-2">
        <input
          placeholder="Search by name"
          className="border p-2"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <select
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="border p-2"
        >
          <option value="">Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
          className="border p-2"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <input
          placeholder="Species"
          className="border p-2"
          value={filters.species}
          onChange={(e) => setFilters({ ...filters, species: e.target.value })}
        />
      </div>

      {/* ⏳ Loader */}
      {isLoading ? (
        <div className="text-muted-foreground py-10 text-center">Loading all characters...</div>
      ) : (
        <>
          {/* 🧍 Characters Grid */}
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

          {/* 📄 Pagination */}
          <CharacterPagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
      )}
    </div>
  )
}
