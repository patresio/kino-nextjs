import useMovieAPI from '@/hooks/useMovieAPI'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Carrousel from '../template/Carrousel'
import Container from '../template/Container'
import Flex from '../template/Flex'
import Titulo from '../template/Titulo'
import Wrap from '../template/Wrap'

interface AlbumProps {
  idAtor: string
}

const Album = ({ idAtor }: AlbumProps) => {
  const [imagems, setImagems] = useState<string[][]>([])
  const { getImagensDoAtor } = useMovieAPI()

  useEffect(() => {
    getImagensDoAtor(idAtor).then(imagens => {
      const imagensPorSlide = 3
      let imagensRestantes = imagens
      const resutado = []
      while (imagensRestantes.length >= imagensPorSlide) {
        resutado.push(imagensRestantes.splice(0, imagensPorSlide))
      }
      setImagems(resutado)
    })
  }, [])

  if (imagems.length <= 0) return null

  return (
    <Wrap>
      <Titulo
        pequeno
        texto="Fotos do(a) Ator(a)"
        alinhar="center"
        className="w-full"
      />
      <Carrousel slideAuto>
        {imagems.map((grupo: string[]) => {
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
