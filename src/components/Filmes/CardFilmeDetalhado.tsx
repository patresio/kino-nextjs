import Container from '../template/Container'
import Descricao from '../template/Descricao'
import Flex from '../template/Flex'
import Titulo from '../template/Titulo'
import Genero from './Genero'
import Nota from './Nota'
import PosterDoFilme from './PosterDoFilme'

interface CardFilmeDetalhadoProps {
  filme: FilmeDetalhado
}

const CardFilmeDetalhado = ({ filme }: CardFilmeDetalhadoProps) => {
  return (
    <Container>
      <Flex
        col
        className={`bg-neutral-950 rounded-lg mt-8 p-0 sm:p-4 md:p-8 lg:flex-row`}
      >
        <PosterDoFilme url={filme.linkImagemPoster} titulo={filme.titulo} />
        <Flex
          col
          className="m-3 ml-8 gap-4 lg:gap-8 text-xl items-centeri lg:items-start"
        >
          <Titulo
            texto={filme.titulo}
            alinhar="center"
            className="lg:text-start my-0 lg:my-5"
          />
          <Descricao texto={filme.descricao} className="text-base" />
          <p>
            Lançamento:{' '}
            {new Intl.DateTimeFormat('pt-BR').format(filme.dataDeLancamento)}
          </p>
          <p>Duração: {filme.duracao} minutos</p>
          <p>Título original: {filme.tituloOriginal}</p>
          <Flex col className="justify-start items-start w-full">
            <Genero idFilme={filme.id} generoPadrao={filme.generos} grande />
            <Nota nota={filme.nota} grande />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CardFilmeDetalhado
