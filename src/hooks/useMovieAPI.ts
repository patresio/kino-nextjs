const URL_BASE = process.env.NEXT_PUBLIC_API_URL
const BG_FILME_URL = process.env.NEXT_PUBLIC_BG_FILE_URL

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

  async function getUltimosFilmes() {
    const { json, status } = await get('movie/now_playing')
    const fatia = json.results.slice(0, 12)
    return fatia
  }

  return {
    getUltimosFilmes
  }
}

export default useMovieAPI
