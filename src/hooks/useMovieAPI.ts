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
    const { json, status } = await get('movie/now_playing')
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

  return {
    getUltimosFilmes,
    getGenerosDoFilme,
    getFilmeDetalhado,
    getFilmesRecomendados
  }
}

export default useMovieAPI
