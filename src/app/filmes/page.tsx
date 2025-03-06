"use client"
import useMovieAPI from "@/hooks/useMovieAPI";
import { useEffect } from "react";

const Filmes = () => {
  const { getUltimosFilmes } = useMovieAPI()
  
  useEffect(() => {
    getUltimosFilmes().then((filmes) => {
      console.log(filmes)
    })
  }, [])

  return ( <div className="text-white text-6xl font-bold flex justify-center items-centers">Página de Filmes</div> );
}
 
export default Filmes;