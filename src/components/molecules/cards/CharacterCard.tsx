import { Separator } from '@/components/ui/separator'
import type { CardActionItem, Character } from '@/types/character.types'
import { Atom, HeartPulse, Layers, User, Star } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardActions from '../dropdown/CardActions'
import CardStatus from './CardStatus'

type CharacterCardProps = {
  character: Character
  favorites: number[]
  toggleFavorite: (id: number) => void
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, favorites, toggleFavorite }) => {
  const isFavorite = favorites.includes(character.id)
  const navigate = useNavigate()

  const { image, name, location, id, status, type, species, gender } = character

  const items: CardActionItem[] = [
    {
      key: 'view-character',
      label: 'View details',
      actionType: 'view',
      visible: true,
      onClick: () => {
        navigate(`/character/${id}`)
      },
    },
    {
      key: 'toggle-favorite',
      label: isFavorite ? 'Remove from favorites' : 'Add to favorites',
      actionType: 'favorite',
      visible: true,
      onClick: () => toggleFavorite(id),
    },
  ]

  return (
    <div
      className={`relative group cursor-pointer rounded-md border p-2 transition-all ${
        isFavorite
          ? 'border-yellow-400 bg-yellow-50 shadow-md'
          : 'border-zinc-200 bg-white'
      }`}
    >
      {/* ⭐ Favorite Star Badge */}
      {isFavorite && (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-yellow-500">
    <Star size={16} fill="currentColor" />
  </div>
)}

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border bg-white">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <div className="text-muted-foreground text-xs truncate max-w-[180px]">
              {location.name.toLowerCase() === 'unknown'
                ? 'Unknown location'
                : location.name}
            </div>
          </div>
        </div>
        <CardActions items={items} />
      </div>

      <Separator className="my-2" />
      <CardStatus title="Status" value={status || 'Not specified'} icon={HeartPulse} />
      <CardStatus title="Type" value={type || 'Not specified'} icon={Layers} />
      <CardStatus title="Species" value={species || 'Not specified'} icon={Atom} />
      <CardStatus title="Gender" value={gender || 'Not specified'} icon={User} />
    </div>
  )
}

export default CharacterCard
