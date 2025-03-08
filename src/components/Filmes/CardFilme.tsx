import mergeClasses from '@/utils/mergeClasses'
import { FilmSlate } from 'phosphor-react'
import Flex from '../template/Flex'
import ImagemComFallBack from '../template/imagemComFallBack'
import Titulo from '../template/Titulo'
import Wrap from '../template/Wrap'
import Genero from './Genero'
import Nota from './Nota'

interface CardFilmeProps {
  filme: Filme
  className?: string
}

const CardFilme = ({ filme, className }: CardFilmeProps) => {
  return (
    <Wrap
      className={mergeClasses(
        `rounded-2xl h-60 max-h-60 bg-black border border-white/[0.2] group-hover:border-red-kino relative z-20`,
        className
      )}
    >
      <ImagemComFallBack
        url={filme.linkImagemFundo}
        imgAlt={`Imagem de fundo do filme ${filme.titulo}`}
        className="opacity-40 group-hover:opacity-15 transition-all text-slate-800"
      >
        <FilmSlate className="h-1/2 w-2/3 text-slate-800 transition-all duration-500 ease-in-out" />
      </ImagemComFallBack>
      <Flex col className="h-60 z-50 justify-between py-10 px-2">
        <Titulo
          texto={filme.titulo}
          pequeno
          alinhar="left"
          className="m-auto"
        />
        <Flex col className="justify-start items-start w-full">
          <Genero idFilme={filme.id} />
          <Nota nota={filme.nota} />
        </Flex>
      </Flex>
    </Wrap>
  )
}

export default CardFilme
