'use client'
import { FilmSlate } from '@phosphor-icons/react'
import ImagemComFallBack from '../template/imagemComFallBack'
import Wrap from '../template/Wrap'

interface PosterDoFilmeProps {
  url: string
  titulo: string
}

const PosterDoFilme = ({ url, titulo }: PosterDoFilmeProps) => {
  return (
    <Wrap
      className={`
        h-72 w-48 md:h-96 md:w-80 lg:h-[700px] lg:min-w-[500px]
        relative overflow-hidden rounded-lg m-auto
      `}
    >
      <ImagemComFallBack url={url} imgAlt={`Poster do filme ${titulo}`}>
        <FilmSlate className="h-1/2 w-2/3 text-slate-800" />
      </ImagemComFallBack>
    </Wrap>
  )
}

export default PosterDoFilme
