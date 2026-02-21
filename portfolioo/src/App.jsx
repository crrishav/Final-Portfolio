import './App.css'
import { FadeIn, FadeInSlideUp, FadeInSlideDown } from './Components/animations'
import NavBar from './Components/navBar'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter']">
      <NavBar />

      <main className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center px-1">
        <FadeInSlideUp duration={1.2} distance={30}>
          <h1 className="m-0 text-7xl md:text-8xl font-normal tracking-tight flex flex-wrap justify-center items-baseline gap-4">
            <span className="text-[60px]">Hi, I am</span>
            <span className="font-kaushan text-[60px]">Rishav</span>
          </h1>
        </FadeInSlideUp>

        <FadeIn delay={0.8} duration={1}>
          <p className="text-xl md:text-2xl mt-0 text-gray-700 font-medium">
            Frontend Developer
          </p>
        </FadeIn>
      </main>
    </div>
  )
}

export default App
