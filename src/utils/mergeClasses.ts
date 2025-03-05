import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
