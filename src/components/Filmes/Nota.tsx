import { Star } from '@phosphor-icons/react'
import Flex from '../template/Flex'
import mergeClasses from '@/utils/mergeClasses'

interface NotaProps {
  nota: number
  grande?: boolean
}

const Nota = ({ nota, grande }: NotaProps) => {
  return (
    <Flex className="mt-2">
      <Star
        weight="fill"
        className={mergeClasses('text-amber-400', grande ? 'text-3xl' : '')}
      />
      <span className={mergeClasses('font-semibold', grande ? 'text-xl' : '')}>{nota.toFixed(1)}/10</span>
    </Flex>
  )
}
export default Nota
