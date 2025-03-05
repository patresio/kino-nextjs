import Carrousel from '@/components/template/Carrousel'

export default function Home() {
  return (
    <Carrousel>
      <div className="w-20 h-20 p-8 bg-red-500">1</div>
      <div className="w-20 h-20 p-8 bg-yellow-500">2</div>
      <div className="w-20 h-20 p-8 bg-blue-500">3</div>
      <div className="w-20 h-20 p-8 bg-green-500">4</div>
    </Carrousel>
  )
}
