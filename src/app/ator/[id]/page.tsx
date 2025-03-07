'use client'
import Album from '@/components/Ator/Album'
import DetalhesAtor from '@/components/Ator/DetalhesAtor'
import ImagemDePerfil from '@/components/Ator/ImagemDePerfil'
import ListaDeFilmes from '@/components/Filmes/ListaDeFilmes'
import Container from '@/components/template/Container'
import Wrap from '@/components/template/Wrap'
import useMovieAPI from '@/hooks/useMovieAPI'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Ator = () => {
  const { id } = useParams()
  const [ator, setAtor] = useState<AtorDetalhado | null>(null)
  const { getAtorDetalhado } = useMovieAPI()

  useEffect(() => {
    getAtorDetalhado(String(id)).then(setAtor)
  }, [])

  return (
    <Wrap>
      {ator && (
        <Container bigPadding className="mt-32 md:mt-44 min-h-96 w-full">
          <ImagemDePerfil url={ator.imagemPerfil} imgAlt={ator.nome} />
          <DetalhesAtor ator={ator} />
        </Container>
      )}
      {ator && <Album idAtor={String(id)} />}
      {ator && ator.filmes.length > 0 && (
        <ListaDeFilmes filmes={ator.filmes} titulo="Filmes do(a) Ator(a)" />
      )}
    </Wrap>
  )
}

export default Ator
