import mergeClasses from '@/utils/mergeClasses'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  bigPadding?: boolean
}

const Container = ({ children, className, bigPadding }: ContainerProps) => {
  return (
    <div
      className={mergeClasses(
        'w-full max-w-screen-xl mx-auto p-4',
        { 'py-20': bigPadding },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
