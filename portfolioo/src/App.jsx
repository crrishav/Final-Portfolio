import './App.css'
import { FadeIn, FadeInSlideUp, FadeInSlideDown, FadeInSlideLeft, FadeInSlideRight } from './Components/animations'
import NavBar from './Components/navBar'
import IconsGrid from './Components/iconsGrid'
import SmoothScroll from './Components/smoothScroll'
import ProjectCard from './Components/projectCard'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter']">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      
      <SmoothScroll>
        <main>
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-1">
            <FadeInSlideUp duration={1.2} distance={30}>
              <h1 className="m-0 text-7xl md:text-8xl font-normal tracking-tight flex flex-wrap justify-center items-baseline gap-4">
                <span className="text-[60px]">Hi, I am</span>
                <span className="font-kaushan text-[60px]">Rishav</span>
              </h1>
            </FadeInSlideUp>
            
            <FadeIn delay={0.8} duration={1}>
              <p className="text-xl md:text-2xl mt-0 text-gray-700 font-medium font-['Inter']">
                Frontend Developer
              </p>
            </FadeIn>
          </section>

          {/* Technologies Section */}
          <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 bg-white">
            <FadeInSlideUp duration={1} distance={40} trigger={true}>
              <h2 className="text-5xl md:text-7xl font-normal tracking-tight text-black m-0 mb-12 font-['Inter']">
                Technologies I use
              </h2>
            </FadeInSlideUp>
            
            <FadeIn delay={0.6} duration={1} trigger={true}>
              <IconsGrid />
            </FadeIn>
          </section>

          {/* Projects Section */}
          <section className="flex flex-col items-center justify-center min-h-screen py-32 bg-[#fff]">
            <FadeInSlideDown duration={1.2} distance={40} trigger={true}>
              <h2 className="text-6xl md:text-8xl font-normal tracking-tight text-black m-0 mb-20 font-['Inter']">
                My Projects
              </h2>
            </FadeInSlideDown>

            <div className="flex flex-wrap justify-center gap-12 px-8 max-w-7xl">
              <FadeInSlideRight duration={1.2} distance={100} trigger={true}>
                <ProjectCard 
                  title="GIG - Freelancing Platform"
                  description="A lightweight Node.js + Express + MongoDB marketplace for companies and freelancers. Companies can register, manage profiles, and post short-term or remote freelance jobs (including on-site gigs)."
                />
              </FadeInSlideRight>

              <FadeInSlideLeft duration={1.2} distance={100} trigger={true} delay={0.2}>
                <ProjectCard 
                  title="Portfolio App"
                  description="A minimalist portfolio built with React, Tailwind CSS, and GSAP animations. Features smooth scrolling, custom reveal animations, and a sleek, modern UI designed for performance and aesthetics."
                />
              </FadeInSlideLeft>
            </div>
          </section>
          
          {/* Bottom Spacer */}
          <div className="h-[20vh]" />
        </main>
      </SmoothScroll>
    </div>
  )
}

export default App
