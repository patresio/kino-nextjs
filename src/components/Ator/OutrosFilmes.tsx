import useMovieAPI from '@/hooks/useMovieAPI'
import ListaDeFilmes from '../Filmes/ListaDeFilmes'
import Container from '../template/Container'

interface OutrosFilmesProps {
  idAtor: string
}

const OutrosFilmes = async ({ idAtor }: OutrosFilmesProps) => {
  const { getFilmesDoAtor } = useMovieAPI()
  const filmes = await getFilmesDoAtor(idAtor)

  return (
    <Container className="my-16 lg:pt-10">
      <ListaDeFilmes filmes={filmes} titulo="Participou de:" />
    </Container>
  )
}

export default OutrosFilmes
