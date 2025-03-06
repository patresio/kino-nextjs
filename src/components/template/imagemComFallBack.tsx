"use client"
import { useEffect, useState } from 'react'
import Flex from './Flex'
import Image from 'next/image'
import mergeClasses from '@/utils/mergeClasses'

interface ImagemComFallBackProps {
  url: string
  imgAlt: string
  className?: string
  children: React.ReactNode
}

const ImagemComFallBack = ({
  url,
  imgAlt,
  className,
  children
}: ImagemComFallBackProps) => {
  const [imagemPadrao, setImagemPadrao] = useState(false)

  useEffect(() => {
    fetch(url).then(reposta => setImagemPadrao(!reposta.ok))
  }, [])

  if (imagemPadrao || !url) {
    return <Flex className="h-full w-full absolute -z-30">{children}</Flex>
  }

  return (
    <Image
      fill
      src={url}
      alt={imgAlt}
      className={mergeClasses('object-cover', className)}
      sizes='80vw'
    />
  )
}

export default ImagemComFallBack
