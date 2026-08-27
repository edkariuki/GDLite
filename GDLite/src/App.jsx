import './App.css'
import HeroImg from './assets/images/101.jpg'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-full h-full">
          <img src={HeroImg} className="w-full h-full object-contain" />
          <p className="absolute top-1/4 left-1/5 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-extrabold whitespace-nowrap">
            <span className="text-[#EFA24C]">GD</span>
            <span className="text-[#2547A8]">LITE</span>
            <span className="text-black">AFRICA</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default App