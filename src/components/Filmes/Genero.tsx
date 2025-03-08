'use client'
import useMovieAPI from '@/hooks/useMovieAPI'
import mergeClasses from '@/utils/mergeClasses'
import { useEffect, useState } from 'react'
import Flex from '../template/Flex'
import Skeleton from '../template/Skeleton'

interface GeneroProps {
  idFilme: string
  grande?: boolean
  generoPadrao?: Genero[]
}
const Genero = ({ idFilme, grande, generoPadrao }: GeneroProps) => {
  const [generos, setGeneros] = useState<Genero[] | null>(null)
  const { getGenerosDoFilme } = useMovieAPI()

  useEffect(() => {
    if (generoPadrao && generoPadrao?.length > 0) {
      setGeneros(generoPadrao)
    }
    getGenerosDoFilme(idFilme).then(setGeneros)
  }, [])

  if (!generos) {
    return (
      <Flex className="flex-wrap justify-start">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            return <Skeleton key={i} className={'rounded-lg h-8 w-24'} />
          })}
      </Flex>
    )
  }

  return (
    <Flex className="flex-wrap justify-start">
      {generos.map(genero => (
        <span
          key={genero.id}
          className={mergeClasses(
            `
            bg-red-kino/50 font-semibold backdrop-blur-md p-1 rounded-lg 
            `,
            grande ? 'text-lg' : 'text-xs'
          )}
        >
          {genero.nome}
        </span>
      ))}
    </Flex>
  )
}

export default Genero
