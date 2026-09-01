import './App.css'
import HeroImg from './assets/images/105.jpg'

function App() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <img
        src={HeroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <p className="absolute top-42 left-6 md:top-48 md:left-12 text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold whitespace-nowrap drop-shadow-md">
        <span className="text-[#EFA24C]">GD</span>
        <span className="text-[#2547A8]">LITE</span>
        <span className="text-black">AFRICA</span>
      </p>
    </div>
  )
}

export default App