"use client"
import Wrap from "@/components/template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import { useEffect, useState } from "react";
import ListaDeFilmes from "@/components/Filmes/ListaDeFilmes";
import Carrousel from "@/components/template/Carrousel";
import CardFilmeEmDestaque from "@/components/Filmes/CardFilmeEmDestaque";

const Filmes = () => {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const { getUltimosFilmes } = useMovieAPI()
  
  useEffect(() => {
    getUltimosFilmes().then(setFilmes)
  }, [])

  return (<Wrap>
    <Carrousel slideAuto>
      {filmes.map((filme) => {
        return <CardFilmeEmDestaque key={filme.id} filme={filme} />
      })}
    </Carrousel>
    <ListaDeFilmes filmes={filmes} titulo="Ultimos Filmes" /> 
  </Wrap> );
}
 
export default Filmes;