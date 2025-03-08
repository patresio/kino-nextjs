import mergeClasses from '@/utils/mergeClasses'

interface SkeletonProps {
  className: string
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={mergeClasses(`bg-red-kino/60 animate-plus`, className)}
    ></div>
  )
}

export default Skeleton
