'use client'
import Link from 'next/link'
import Flex from './Flex'
import Wrap from './Wrap'
import { Popcorn } from 'phosphor-react'

const Cabecalho = () => {
  return (
    <Wrap className="bg-neutral-950">
      <header className="p-4 px-32">
        <Flex className="justify-between">
          <Link
            href="/"
            className={`font-bold px-4 py-2 bg-red-kino hover:bg-red-700 flex gap-1 items-center justify-center rounded-lg`}
          >
            <Popcorn size={20} />
            Kino
          </Link>
          <Link
            target="_blank"
            className="font-bold px-4 hover:brightness-75"
            href="https://www.themoviedb.org"
          >
            The Movie DB
          </Link>
        </Flex>
      </header>
    </Wrap>
  )
}

export default Cabecalho
