import mergeClasses from '@/utils/mergeClasses'

interface GridProps {
  children: React.ReactNode
  className?: string
  column?: boolean
  numCols?: number
  numRows?: number
}

const Grid = ({ children, className, column, numCols, numRows }: GridProps) => {
  return (
    <div
      className={mergeClasses(
        `grid grid-rows-${numRows}`,
        { [`grid-cols-${numCols}`]: column },
        `${className}`
      )}
    >
      {children}
    </div>
  )
}

export default Grid
