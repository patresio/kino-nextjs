'use client'
import { Children, cloneElement } from 'react'
import Container from './Container'
import Wrap from './Wrap'
import Flex from './Flex'
import mergeClasses from '@/utils/mergeClasses'
import { CaretLeft, CaretRight } from 'phosphor-react'

interface CarrouselProps {
  children: JSX.Element[]
  slideAuto?: boolean
}

function BotaoLateral(props: {
  esquerda?: boolean
  direita?: boolean
  children?: React.ReactNode
}) {
  {
    return (
      <button
        className={mergeClasses(
          `group absolute top-0 h-full cursor-pointer flex items-center justify-center px-4 focus:outline-none`,
          {
            'left-0': props.esquerda,
            'right-0': props.direita
          }
        )}
      >
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-4 group-focus:ring-white group-hover:bg-gray-800/60`}
        >
          {props.children}
        </span>
      </button>
    )
  }
}

const Carrousel = ({ children, slideAuto }: CarrouselProps) => {
  const atualIndex = 0
  const itensNumber = children.length

  return (
    <Wrap>
      <Container>
        <Wrap>
          <div className="relative rounded-lg mb-5">
            {Children.map(children, (child: JSX.Element, index) => {
              const propsChild = child.props
              return cloneElement(child, {
                className: `${index === atualIndex ? '' : 'hidden'}`
              })
            })}
          </div>
          <Flex className="absolute bottom-5 left-1/2 translate-x-1/2 gap-2">
            {Array.from({ length: itensNumber }).map((_, index) => {
              return (
                <button
                  key={index}
                  className={mergeClasses('w-3 h-3 rounded-full bg-gray-800', {
                    'bg-gray-500': index === atualIndex
                  })}
                />
              )
            })}
          </Flex>
        </Wrap>
      </Container>
      <Wrap>
        <BotaoLateral esquerda>
          <CaretLeft size={20} />
          <span className='hidden'>Anterior</span>
        </BotaoLateral>
        <BotaoLateral direita>
          <CaretRight size={20} />
          <span className='hidden'>Próximo</span>
        </BotaoLateral>
      </Wrap>
    </Wrap>
  )
}

export default Carrousel
