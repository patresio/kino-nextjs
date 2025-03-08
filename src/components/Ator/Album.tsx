'use client'
import useMovieAPI from '@/hooks/useMovieAPI'
import Image from 'next/image'
import Carrousel from '../template/Carrousel'
import Container from '../template/Container'
import Flex from '../template/Flex'
import Titulo from '../template/Titulo'
import Wrap from '../template/Wrap'

interface AlbumProps {
  idAtor: string
}

const Album = async ({ idAtor }: AlbumProps) => {
  const { getImagensDoAtor } = useMovieAPI()
  const imagensResposta = await getImagensDoAtor(idAtor)

  const imagensPorSlide = 3
  const imagensRestantes = imagensResposta
  const imagens = []
  while (imagensRestantes.length >= imagensPorSlide) {
    imagens.push(imagensRestantes.splice(0, imagensPorSlide))
  }

  if (imagens.length <= 0) return null

  return (
    <Wrap>
      <Titulo
        pequeno
        texto="Fotos do(a) Ator(a)"
        alinhar="center"
        className="w-full"
      />
      <Carrousel slideAuto>
        {imagens.map((grupo: string[]) => {
          return (
            <Container>
              <Flex className="justify-between">
                {grupo.map(linkImagem => {
                  return (
                    <Wrap
                      key={linkImagem}
                      className={`h-52 md:h-96 lg:min-h-[600px] relative overflow-hidden rounded-lg`}
                    >
                      <Image
                        src={linkImagem}
                        alt="Imagem do Ator"
                        className="object-cover"
                        sizes="40vw"
                        fill
                      />
                    </Wrap>
                  )
                })}
              </Flex>
            </Container>
          )
        })}
      </Carrousel>
    </Wrap>
  )
}

export default Album
