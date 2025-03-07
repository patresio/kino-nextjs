import { User } from '@phosphor-icons/react'
import Flex from '../template/Flex'
import ImagemComFallBack from '../template/imagemComFallBack'
import Wrap from '../template/Wrap'

interface ImagemDePerfilProps {
  url: string
  imgAlt: string
}

const ImagemDePerfil = ({ url, imgAlt }: ImagemDePerfilProps) => {
  return (
    <div
      className={`absolute w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-3 bg-zinc-900 overflow-hidden
        left-1/2 transform -translate-x-1/2 -translate-y-3/4
        `}
    >
      <Wrap className="relative w-full h-full rounded-full">
        <ImagemComFallBack url={url} imgAlt={imgAlt}>
          <Flex className="w-full h-full">
            <User className="w-3/4 h-4/5 text-zinc-500" />
          </Flex>
        </ImagemComFallBack>
      </Wrap>
    </div>
  )
}

export default ImagemDePerfil
