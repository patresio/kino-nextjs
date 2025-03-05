import Carrousel from "@/components/template/Carrousel";


export default function Home() {
  return (
    <Carrousel>
      <div className="w-full h-[500px] bg-red-500">1</div>
      <div className="w-full h-[500px] bg-red-500">2</div>
      <div className="w-full h-[500px] bg-red-500">3</div>
      <div className="w-full h-[500px] bg-red-500">4</div>
    </Carrousel>
  );
}
