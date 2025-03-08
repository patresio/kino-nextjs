import useMovieAPI from '@/hooks/useMovieAPI'
import Container from '../template/Container'
import ListaDeFilmes from './ListaDeFilmes'

interface SugestoesDeFilmesProps {
  idFilme: string
}

const SugestoesDeFilmes = async ({ idFilme }: SugestoesDeFilmesProps) => {
  const { getFilmesRecomendados } = useMovieAPI()
  const filmes = await getFilmesRecomendados(idFilme)

  return (
    <Container className="my-16 bg-neutral-950 rounded-lg lg:pt-10">
      <ListaDeFilmes filmes={filmes} titulo="Sugestões para você" />
    </Container>
  )
}

export default SugestoesDeFilmes
