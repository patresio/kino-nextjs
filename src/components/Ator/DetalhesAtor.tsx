'use client'
import { XCircle } from '@phosphor-icons/react'
import Descricao from '../template/Descricao'
import Flex from '../template/Flex'
import Titulo from '../template/Titulo'

interface DetalhesAtorProps {
  ator: AtorDetalhado
}

function SemBiografia() {
  return (
    <Flex className="text-zinc-600">
      <XCircle size={70} />
      <Titulo
        texto="Biografia não encontrada"
        pequeno
        className="w-fit items-center"
      />
      <XCircle size={70} />
    </Flex>
  )
}

const DetalhesAtor = ({ ator }: DetalhesAtorProps) => {
  return (
    <Flex
      col
      className={`bg-zinc-900 rounded-lg w-full justify-between items-center pt-16 md:pt-20 lg:pt-26`}
    >
      <Titulo texto={ator.nome} alinhar="center" pequeno />
      <Flex className="gap-5 flex-wrap font-semibold text-balance texte-center">
        {ator.genero && <span>Gênero: {ator.genero}</span>}
        {ator.dataNascimento && (
          <span>
            Data de Nasimento:{' '}
            {Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
              new Date(ator.dataNascimento)
            )}
          </span>
        )}
        {ator.localNascimento && (
          <span>Local de Nascimento: {ator.localNascimento}</span>
        )}
      </Flex>
      <Flex col className="lg:p-3 flex-1">
        {ator.biografia ? (
          <>
            <Titulo
              texto="Biografia"
              alinhar="center"
              pequeno
              className="mb-0"
            />
            <Descricao
              texto={ator.biografia}
              className="text-justify mx-10 mb-5"
            />
          </>
        ) : (
          <SemBiografia />
        )}
      </Flex>
    </Flex>
  )
}

export default DetalhesAtor
