import mergeClasses from '@/utils/mergeClasses'

interface TituloProps {
  texto: string
  pequeno?: boolean
  className?: string
  alinhar?: 'center' | 'left' | 'right'
}

const Titulo = ({ texto, pequeno, className, alinhar }: TituloProps) => {
  return (
    <h1
      className={mergeClasses(
        `
      my-5 text-3xl px-0 font-bold w-full
      md:text-4xl  xl:text-5xl
      `,
        {
          'font-semibold text-2xl md:text-3xl xl:text-4xl': pequeno,
          [`text-${alinhar}`]: alinhar
        },
        className
      )}
    >
      {texto}
    </h1>
  )
}

export default Titulo
