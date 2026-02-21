import './App.css'
import { FadeIn, FadeInSlideUp, FadeInSlideDown, FadeInSlideLeft, FadeInSlideRight, ContactReveal } from './Components/animations'
import NavBar from './Components/navBar'
import IconsGrid from './Components/iconsGrid'
import SmoothScroll from './Components/smoothScroll'
import ProjectCard from './Components/projectCard'
import LogoCircleR from './Components/rWithCircle'

import gigImg from './assets/gig.PNG'
import botImg from './assets/Bot.PNG'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter']">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      
      <SmoothScroll>
        <main>
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center min-h-screen text-center px-1">
            <FadeInSlideUp duration={1.2} distance={30}>
              <h1 className="m-0 text-5xl md:text-8xl font-normal tracking-tight flex flex-wrap justify-center items-baseline gap-2 md:gap-4 px-4">
                <span className="text-[40px] md:text-[60px]">Hi, I am</span>
                <span className="font-kaushan text-[40px] md:text-[60px]">Rishav</span>
              </h1>
            </FadeInSlideUp>
            
            <FadeIn delay={0.8} duration={1}>
              <p className="text-xl md:text-2xl mt-0 text-gray-700 font-medium font-['Inter']">
                Frontend Developer
              </p>
            </FadeIn>
          </section>

          {/* Technologies Section */}
          <section className="flex flex-col items-center justify-center min-h-[80vh] py-40 bg-white">
            <FadeInSlideUp duration={1} distance={40} trigger={true}>
              <h2 className="text-[32px] md:text-[60px] font-normal tracking-tight text-black m-0 mb-8 font-['Inter'] px-4 text-center">
                Technologies I use
              </h2>
            </FadeInSlideUp>
            
            <FadeIn delay={0.6} duration={1} trigger={true}>
              <IconsGrid />
            </FadeIn>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col items-center justify-center py-20 md:py-40 bg-[#fff] px-4">
            <FadeInSlideDown duration={1.2} distance={40} trigger={true}>
              <h2 className="text-[40px] md:text-[60px] font-normal tracking-tight mb-12 mt-10 text-black m-0 font-['Inter'] text-center">
                My Projects
              </h2>
            </FadeInSlideDown>

            <div className="flex flex-wrap justify-center gap-12 md:gap-40 px-4 md:px-8 max-w-7xl">
              <FadeInSlideRight duration={1.2} distance={100} trigger={true}>
                <ProjectCard 
                  title="GIG - Freelancing Platform"
                  description="A lightweight Node.js + Express + MongoDB marketplace for companies and freelancers. Companies can register, manage profiles, and post short-term or remote freelance jobs (including on-site gigs)."
                  image={gigImg}
                  link="https://github.com/omthapa779/gig"
                />
              </FadeInSlideRight>

              <FadeInSlideLeft duration={1.2} distance={100} trigger={true} delay={0.2}>
                <ProjectCard 
                  title="Job Bot"
                  description="An automated lead-generation tool built with Python and SQLite. It leverages the feedparser library to monitor Reddit RSS feeds in real-time, using a custom weighted-scoring algorithm to identify and alert high-value freelance opportunities via Discord Webhooks"
                  image={botImg}
                  link="https://github.com/crrishav/job-bot"
                />
              </FadeInSlideLeft>
            </div>
          </section>
          
          {/* Final Contact Section */}
          <section id="contact" className="bg-white">
            <ContactReveal 
              logo={<LogoCircleR />}
            >
              <div className="flex flex-col gap-2 px-4">
                <h2 className="text-[32px] md:text-[55px] font-normal leading-tight m-0 text-black font-['ADLaM_Display']">
                  Contact Me
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-base md:text-2xl font-medium text-black m-0 break-words">
                    crrishav.business@gmail.com
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm md:text-xl font-medium text-black">
                    <a href="https://www.instagram.com/crrishavv/" target="_blank" rel="noopener noreferrer" className="text-black underline md:no-underline hover:underline cursor-pointer">Instagram</a>
                    <a href="https://github.com/crrishav" target="_blank" rel="noopener noreferrer" className="text-black underline md:no-underline hover:underline cursor-pointer">Github</a>
                  </div>
                </div>
              </div>
            </ContactReveal>
          </section>
        </main>
      </SmoothScroll>
    </div>
  )
}

export default App
