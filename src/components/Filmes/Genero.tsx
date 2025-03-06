import useMovieAPI from "@/hooks/useMovieAPI"
import { useEffect, useState } from "react"
import Flex from "../template/Flex"
import mergeClasses from "@/utils/mergeClasses"

interface GeneroProps {
  idFilme: string
  grande?: boolean
  generoPadrao?: Genero[]
}
const Genero = ({ idFilme, grande, generoPadrao }: GeneroProps) => {
  const [generos, setGeneros] = useState<Genero[]>([])
  const { getGenerosDoFilme } = useMovieAPI()

  useEffect(() => {
    if(generoPadrao && generoPadrao?.length > 0){
      setGeneros(generoPadrao)
    }
    getGenerosDoFilme(idFilme).then(setGeneros)
  },[])

  return (
    <Flex className="flex-wrap justify-start">
      {generos.map((genero) => (
        <span
          key={genero.id}
          className={mergeClasses(`
            bg-red-kino/50 font-semibold backdrop-blur-md p-1 rounded-lg 
            `, grande ? 'text-lg' : 'text-xs')}
        >
          {genero.nome}
        </span>
      ))}
    </Flex>
  )
}

export default Genero