'use client'
import mergeClasses from '@/utils/mergeClasses'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { Children, cloneElement, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Wrap from './Wrap'

interface CarrouselProps {
  children: JSX.Element[]
  slideAuto?: boolean
}

function BotaoLateral(props: {
  esquerda?: boolean
  direita?: boolean
  children: React.ReactNode
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  {
    return (
      <button
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={mergeClasses(
          `group absolute top-0 lg:h-full h-1/2 cursor-pointer flex items-center justify-center px-4 focus:outline-none`,
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
  const carrouselRef = useRef<HTMLDivElement | null>(null)
  const intervaloRef = useRef<NodeJS.Timeout | null>(null)
  const animationRef = useRef<HTMLDivElement | null>(null)
  const [atualIndex, setAtualIndex] = useState(0)
  const NUMBER_OF_ITENS = children.length
  const TEMPO = 5000

  function iniciarSlide() {
    if (!slideAuto) return
    if (animationRef.current) {
      animationRef.current.style.display = 'block'
    }
    intervaloRef.current = global.setInterval(() => {
      if (animationRef.current) {
        animationRef.current.style.display = 'block'
      }
      nextSlide()
    }, TEMPO)
  }

  function pararSlide() {
    if (animationRef.current) {
      animationRef.current.style.display = 'none'
    }
    clearInterval(intervaloRef.current!)
  }

  useEffect(() => {
    iniciarSlide()
    return () => {
      pararSlide()
    }
  }, [NUMBER_OF_ITENS])

  useEffect(() => {
    if (!carrouselRef.current) return
    const childs = Array.from(carrouselRef.current.children)
    const width = carrouselRef.current.offsetWidth
    childs.forEach((child: any, index: number) => {
      child.style.transform = `translateX(${(index - atualIndex) * width}px)`
    })
  }, [atualIndex])

  function nextSlide() {
    setAtualIndex((previousIndex: number) => {
      return previousIndex === NUMBER_OF_ITENS - 1 ? 0 : previousIndex + 1
    })
  }

  function previousSlide() {
    setAtualIndex((previousIndex: number) => {
      return previousIndex === 0 ? NUMBER_OF_ITENS - 1 : previousIndex - 1
    })
  }

  return (
    <Wrap className="relative">
      <Container className="relative w-5/6">
        <Wrap>
          <div
            className="relative rounded-lg mb-5"
            ref={carrouselRef}
            onMouseEnter={pararSlide}
            onMouseLeave={iniciarSlide}
          >
            {Children.map(children, (child: JSX.Element, index) => {
              const propsChild = child.props
              return cloneElement(child, {
                ...propsChild,
                className: `${index === atualIndex ? '' : 'hidden'}`
              })
            })}
          </div>
          <Flex className="bottom-5 gap-2 z-30">
            {Array.from({ length: NUMBER_OF_ITENS }).map((_, index) => {
              return (
                <button
                  key={index}
                  className={mergeClasses('w-3 h-3 rounded-full bg-gray-800', {
                    'bg-gray-500': index === atualIndex
                  })}
                  onClick={() => {
                    setAtualIndex(index)
                  }}
                />
              )
            })}
          </Flex>
        </Wrap>
        <Wrap className="absolute h-1 -bottom-0">
          <div
            ref={animationRef}
            onAnimationEnd={() =>
              (animationRef.current!.style.display = 'none')
            }
            className="rounded-lg h-full animate-[timer_4.8s_ease-in-out] bg-gray-800"
          ></div>
        </Wrap>
      </Container>
      <Wrap>
        <BotaoLateral
          esquerda
          onClick={previousSlide}
          onMouseEnter={pararSlide}
          onMouseLeave={iniciarSlide}
        >
          <CaretLeft size={20} />
          <span className="hidden">Anterior</span>
        </BotaoLateral>
        <BotaoLateral
          direita
          onClick={nextSlide}
          onMouseEnter={pararSlide}
          onMouseLeave={iniciarSlide}
        >
          <CaretRight size={20} />
          <span className="hidden">Próximo</span>
        </BotaoLateral>
      </Wrap>
    </Wrap>
  )
}

export default Carrousel
