import CardFilmeEmDestaque from '@/components/Filmes/CardFilmeEmDestaque'
import ListaDeFilmes from '@/components/Filmes/ListaDeFilmes'
import Carrousel from '@/components/template/Carrousel'
import Wrap from '@/components/template/Wrap'
import useMovieAPI from '@/hooks/useMovieAPI'

const Filmes = async () => {
  const { getUltimosFilmes } = useMovieAPI()
  const filmes: Filme[] = await getUltimosFilmes()

  return (
    <Wrap>
      <Carrousel slideAuto>
        {filmes.map(filme => {
          return <CardFilmeEmDestaque key={filme.id} filme={filme} />
        })}
      </Carrousel>
      <ListaDeFilmes filmes={filmes} titulo="Ultimos Filmes" />
    </Wrap>
  )
}

export default Filmes
