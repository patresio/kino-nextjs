interface Filme {
  id: string
  titulo: string
  descricao: string
  linkImagemFundo: string
  linkImagemPoster: string
  nota: number
  dataDeLancamento: Date
}

interface FilmeDetalhado extends Filme {
  tituloOriginal: string
  atores: Ator[]
  generos: Genero[]
  duracao: number
}

type Genero = {
  id: string
  nome: string
}

type Ator = {
  id: string
  nome: string
  imagemPerfil: string
  personagem: string
}

type AtorDetalhado = {
  id: string
  nome: string
  imagemPerfil: string
  biografia: string
  dataNascimento: Date
  localNascimento: string
  genero: string
}
