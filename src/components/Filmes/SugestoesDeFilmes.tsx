import { useEffect, useState } from "react";
import Container from "../template/Container";
import ListaDeFilmes from "./ListaDeFilmes";
import useMovieAPI from "@/hooks/useMovieAPI";

interface SugestoesDeFilmesProps {
    idFilme: string
  }


const SugestoesDeFilmes = ({ idFilme }: SugestoesDeFilmesProps) => {
  
  const [filmes, setFilmes] = useState<Filme[]>([])
  const { getFilmesRecomendados } = useMovieAPI()

  useEffect(() => { 
    getFilmesRecomendados(idFilme).then(setFilmes)
  }, [])

  return ( 
    <Container className="my-16 bg-neutral-950 rounded-lg lg:pt-10">
      <ListaDeFilmes filmes={filmes} titulo="Sugestões para você"/>
    </Container>
   );
}
 
export default SugestoesDeFilmes;