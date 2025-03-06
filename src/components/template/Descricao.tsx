import mergeClasses from "@/utils/mergeClasses";

interface DescricaoProps {
  texto: string;
  className?: string;
}

const Descricao = ({ texto, className }: DescricaoProps) => {
  return ( 
    <p className={mergeClasses(`mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm lg:text-md text-justify`, className)}>{texto}</p>
   );
}

export default Descricao;