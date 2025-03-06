'use client'

import CardFilme from '@/components/Filmes/CardFilme'
import CardFilmeDetalhado from '@/components/Filmes/CardFilmeDetalhado'
import Elenco from '@/components/Filmes/Elenco'
import SugestoesDeFilmes from '@/components/Filmes/SugestoesDeFilmes'
import Wrap from '@/components/template/Wrap'
import useMovieAPI from '@/hooks/useMovieAPI'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Filme = () => {
  const { id } = useParams()
  const [detalhesFilme, setDetalhesFilme] = useState<FilmeDetalhado | null>(
    null
  )
  const { getFilmeDetalhado } = useMovieAPI()

  useEffect(() => {
    getFilmeDetalhado(String(id)).then(setDetalhesFilme)
  }, [])

  return (
    <Wrap>
      {detalhesFilme && <CardFilmeDetalhado filme={detalhesFilme} />}
      {detalhesFilme?.atores && <Elenco elenco={detalhesFilme.atores} />}
      <SugestoesDeFilmes idFilme={String(id)} />
    </Wrap>
  )
}
export default Filme
