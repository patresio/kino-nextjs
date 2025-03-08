'use client'
import Wrap from '@/components/template/Wrap'
import { CircleNotch } from 'phosphor-react'

const Carregando = () => {
  return (
    <Wrap className="absolute w-full top-1/2">
      <CircleNotch
        size={80}
        weight="bold"
        className="animate-spin text-white m-auto"
      />
    </Wrap>
  )
}

export default Carregando
