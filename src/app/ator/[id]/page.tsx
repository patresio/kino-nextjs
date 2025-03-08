import Album from '@/components/Ator/Album'
import DetalhesAtor from '@/components/Ator/DetalhesAtor'
import ImagemDePerfil from '@/components/Ator/ImagemDePerfil'
import OutrosFilmes from '@/components/Ator/OutrosFilmes'
import Container from '@/components/template/Container'
import Wrap from '@/components/template/Wrap'
import useMovieAPI from '@/hooks/useMovieAPI'

const Ator = async (props: any) => {
  const { id } = props.params
  const { getAtorDetalhado } = useMovieAPI()
  const ator = await getAtorDetalhado(String(id))

  return (
    <Wrap>
      <Container bigPadding className="mt-32 md:mt-44 min-h-96 w-full">
        <ImagemDePerfil url={ator.imagemPerfil} imgAlt={ator.nome} />
        <DetalhesAtor ator={ator} />
      </Container>

      <Album idAtor={String(id)} />
      <OutrosFilmes idAtor={String(id)} />
    </Wrap>
  )
}

export default Ator
