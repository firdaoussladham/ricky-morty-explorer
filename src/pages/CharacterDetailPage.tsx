// src/pages/CharacterDetailPage.tsx
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterDetailPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState<any>(null)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      setCharacter(res.data)
    })
  }, [id])

  if (!character) return <div className="p-4">Chargement...</div>

  return (
    <div className="mx-auto max-w-lg space-y-4 p-6">
      <h1 className="text-2xl font-bold">{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        className="rounded"
      />
      <div>Status : {character.status}</div>
      <div>Genre : {character.gender}</div>
      <div>Espèce : {character.species}</div>
      <div>Origine : {character.origin?.name}</div>
      <div>Localisation : {character.location?.name}</div>
    </div>
  )
}
