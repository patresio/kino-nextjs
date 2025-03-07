const URL_BASE = process.env.NEXT_PUBLIC_API_URL
const BG_FILME_URL = process.env.NEXT_PUBLIC_BG_FILME_URL

const useMovieAPI = () => {
  async function get(fragmentoURL: string, params?: string) {
    const fragmento = fragmentoURL.startsWith('/')
      ? fragmentoURL.substring(1)
      : fragmentoURL
    try {
      const resposta = await fetch(
        `${URL_BASE}/${fragmento}?language=pt-BR&page=1${
          params ? `&${params}` : ''
        }`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ_TOKEN}`
          }
        }
      )
      const json = await resposta.json()
      return { json, status: resposta.status }
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  function formatarImagemURL(url: string) {
    if (!url) return ''
    return `${BG_FILME_URL}${url}`
  }

  async function getUltimosFilmes(): Promise<Filme[]> {
    const { json } = await get('movie/now_playing')
    const fatia = json.results.slice(0, 12)
    return fatia.map((item: any) => {
      return {
        id: item.id,
        titulo: item.title,
        descricao: item.overview,
        linkImagemFundo: formatarImagemURL(item.backdrop_path),
        linkImagemPoster: formatarImagemURL(item.poster_path),
        nota: item.vote_average,
        dataDeLancamento: new Date(item.release_date)
      }
    })
  }

  async function getGenerosDoFilme(filmeId: string) {
    const { json } = await get(`movie/${filmeId}`)
    return json.genres.map((genero: any) => {
      return {
        id: genero.id,
        nome: genero.name
      }
    })
  }

  async function getFilmeDetalhado(idFilme: string): Promise<FilmeDetalhado> {
    const { json } = await get(`movie/${idFilme}`, 'append_to_response=credits')

    return {
      id: json.id,
      titulo: json.title,
      tituloOriginal: json.original_title,
      descricao: json.overview,
      linkImagemFundo: formatarImagemURL(json.backdrop_path),
      linkImagemPoster: formatarImagemURL(json.poster_path),
      nota: json.vote_average,
      dataDeLancamento: new Date(json.release_date),
      atores: json.credits.cast.slice(0, 10).map((ator: any) => {
        return {
          id: ator.id,
          nome: ator.name,
          imagemPerfil: formatarImagemURL(ator.profile_path),
          personagem: ator.character
        }
      }),
      generos: await getGenerosDoFilme(idFilme),
      duracao: json.runtime
    }
  }

  async function getFilmesRecomendados(idFilme: string): Promise<Filme[]> {
    const { json } = await get(`movie/${idFilme}/similar`)
    const fatia = json.results.slice(0, 9)
    return fatia.map((item: any) => {
      return {
        id: item.id,
        titulo: item.title,
        descricao: item.overview,
        linkImagemFundo: formatarImagemURL(item.backdrop_path),
        linkImagemPoster: formatarImagemURL(item.poster_path),
        nota: item.vote_average,
        dataDeLancamento: new Date(item.release_date)
      }
    })
  }

  async function getFilmesDoAtor(idAtor: string): Promise<Filme[]> {
    const { json } = await get(`person/${idAtor}/movie_credits`)
    return json.cast.map((item: any) => {
      return {
        id: item.id,
        titulo: item.title,
        linkImagemFundo: formatarImagemURL(item.backdrop_path),
        linkImagemPoster: formatarImagemURL(item.poster_path),
        nota: item.vote_average,
        dataDeLancamento: new Date(item.release_date)
      }
    })
  }

  async function getAtorDetalhado(idAtor: string): Promise<AtorDetalhado> {
    const { json } = await get(`person/${idAtor}`)
    return {
      id: json.id,
      nome: json.name,
      imagemPerfil: formatarImagemURL(json.profile_path),
      biografia: json.biography,
      dataNascimento: new Date(json.birthday),
      localNascimento: json.place_of_birth,
      genero: json.gender === 1 ? 'Feminino' : 'Masculino',
      filmes: await getFilmesDoAtor(idAtor)
    }
  }

  async function getImagensDoAtor(idAtor: string) {
    const { json } = await get(`person/${idAtor}/images`)
    return json.profiles.map((imagem: any) =>
      formatarImagemURL(imagem.file_path)
    )
  }

  return {
    getUltimosFilmes,
    getGenerosDoFilme,
    getFilmeDetalhado,
    getFilmesRecomendados,
    getAtorDetalhado,
    getImagensDoAtor
  }
}

export default useMovieAPI
