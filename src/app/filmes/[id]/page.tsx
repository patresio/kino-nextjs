'use client'
import CardFilmeDetalhado from '@/components/Filmes/CardFilmeDetalhado'
import Elenco from '@/components/Filmes/Elenco'
import SugestoesDeFilmes from '@/components/Filmes/SugestoesDeFilmes'
import Wrap from '@/components/template/Wrap'
import useMovieAPI from '@/hooks/useMovieAPI'

const Filme = async (props: any) => {
  const { id } = props.params
  const { getFilmeDetalhado } = useMovieAPI()
  const detalhesFilme: FilmeDetalhado = await getFilmeDetalhado(String(id))

  return (
    <Wrap>
      <CardFilmeDetalhado filme={detalhesFilme} />
      <Elenco elenco={detalhesFilme.atores} />
      <SugestoesDeFilmes idFilme={String(id)} />
    </Wrap>
  )
}
export default Filme
