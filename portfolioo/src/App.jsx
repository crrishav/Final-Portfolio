import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail, SquareCode } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmoothScroll from './Components/smoothScroll'
import './App.css'

import gigImg from './assets/gig.PNG'
import botImg from './assets/Bot.PNG'
import faisanImg from './assets/faisan kaka.PNG'
import peakImg from './assets/peak digital.PNG'

gsap.registerPlugin(ScrollTrigger)

const workItems = [
  {
    title: 'Faisan Kaka',
    tag: 'Fashion Commerce',
    year: '2025',
    description:
      'Luxury storefront with CMS-driven storytelling, premium transitions, and a conversion-focused shopping journey.',
    image: faisanImg,
    github: 'https://github.com/crrishav/Faisan-Kaka',
    live: 'https://faisan-kaka.vercel.app/',
  },
  {
    title: 'Peak Digital',
    tag: 'Creative Agency',
    year: '2025',
    description:
      'Boutique agency website crafted around typographic rhythm, motion pacing, and intentional whitespace.',
    image: peakImg,
    github: 'https://github.com/crrishav/Peak-Digital',
    live: 'https://peak-digital-agency.vercel.app/',
  },
  {
    title: 'GIG Platform',
    tag: 'Marketplace Product',
    year: '2024',
    description:
      'Freelance marketplace with profile systems, job listings, and pragmatic backend architecture for scale.',
    image: gigImg,
    github: 'https://github.com/omthapa779/gig',
    live: '',
  },
  {
    title: 'Reddit Job Bot',
    tag: 'Automation',
    year: '2024',
    description:
      'Python-based monitoring engine that captures high-intent job opportunities from real-time subreddit feeds.',
    image: botImg,
    github: 'https://github.com/crrishav/job-bot',
    live: '',
  },
]

const capabilities = [
  'Strategy-first UI direction',
  'Motion architecture and pacing',
  'Performance-focused React builds',
  'Polished launch-ready handoff',
]

function App() {
  const pageRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (event, selector) => {
    event.preventDefault()
    const target = document.querySelector(selector)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const media = gsap.matchMedia()
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.03,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          },
        )
      })

      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        gsap.to(el, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        const items = group.children
        gsap.fromTo(
          items,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 82%',
              once: true,
            },
          },
        )
      })

      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: index % 2 === 0 ? 42 : 68,
            rotateZ: index % 2 === 0 ? 0.8 : -0.8,
          },
          {
            y: 0,
            rotateZ: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 35%',
              scrub: true,
            },
          },
        )
      })

      gsap.to('.capability-line', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.capability-track',
          start: 'top 70%',
          end: 'bottom 45%',
          scrub: true,
        },
      })

      gsap.to('.progress-meter', {
        scaleY: 1,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: '.site',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      media.add('(min-width: 960px)', () => {
        gsap.fromTo(
          '.hero-title-line',
          { yPercent: 0 },
          {
            yPercent: -22,
            ease: 'none',
            stagger: 0.08,
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          },
        )

        gsap.to('.hero-subcopy', {
          yPercent: -18,
          opacity: 0.45,
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, pageRef)

    return () => {
      media.revert()
      ctx.revert()
    }
  }, [])

  return (
    <SmoothScroll>
      <div className="site" ref={pageRef}>
        <div className="progress-rail" aria-hidden="true">
          <div className="progress-meter" />
        </div>

        <header className={`top-bar ${isMenuOpen ? 'top-bar--open' : ''}`}>
          <p className="top-bar__name">Rishav Chaudhary</p>
          <button
            className="top-bar__toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <nav className={`top-bar__nav ${isMenuOpen ? 'is-open' : ''}`} id="mobile-navigation">
            <a href="#work" onClick={(event) => handleNavClick(event, '#work')}>
              Work
            </a>
            <a href="#process" onClick={(event) => handleNavClick(event, '#process')}>
              Process
            </a>
            <a href="#contact" onClick={(event) => handleNavClick(event, '#contact')}>
              Contact
            </a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <p className="eyebrow" data-reveal>
              Frontend Engineer and Motion Designer
            </p>

            <h1 className="hero-title" aria-label="Rishav Chaudhary">
              <span className="hero-title-line">Minimal.</span>
              <span className="hero-title-line">Sharp.</span>
              <span className="hero-title-line">Memorable.</span>
            </h1>

            <p className="hero-subcopy" data-reveal>
              I build white-space-heavy digital experiences with agency-grade motion,
              strategic storytelling, and production-level frontend execution.
            </p>

            <a className="hero-cta" href="#work" data-reveal>
              Explore selected work
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </section>

          <section className="statement" data-reveal>
            <p>
              Most sites feel assembled. Mine feel directed. Every section has intent,
              every transition has timing, and every layout choice earns its place.
            </p>
          </section>

          <section className="work" id="work">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Selected Work</p>
              <h2>Projects with commercial intent and visual precision.</h2>
            </div>

            <div className="work-grid" data-stagger>
              {workItems.map((project, index) => (
                <article
                  key={project.title}
                  className="project-card"
                  data-reveal
                  style={{ '--card-delay': `${index * 0.06}s` }}
                >
                  <div className="project-visual">
                    <img src={project.image} alt={`${project.title} preview`} data-parallax />
                  </div>

                  <div className="project-meta">
                    <div className="project-kicker">
                      <span>{project.tag}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Source
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Live
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="process" id="process">
            <div className="section-head" data-reveal>
              <p className="eyebrow">How I Work</p>
              <h2>Clear thinking, elegant systems, and fast iterations.</h2>
            </div>

            <div className="capability-track" data-stagger>
              <div className="capability-line" aria-hidden="true" />
              {capabilities.map((item) => (
                <div className="capability" key={item} data-reveal>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="contact-panel" data-reveal>
              <p className="eyebrow">Have a project in mind?</p>
              <h2>Let's build something undeniable.</h2>
              <a className="contact-email" href="mailto:crrishav.business@gmail.com">
                <Mail size={22} aria-hidden="true" />
                crrishav.business@gmail.com
              </a>

              <div className="socials">
                <a href="https://github.com/crrishav" target="_blank" rel="noreferrer">
                  <SquareCode size={17} aria-hidden="true" />
                  Github
                </a>
                <a href="https://www.instagram.com/crrishavv/" target="_blank" rel="noreferrer">
                  <ArrowUpRight size={17} aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SmoothScroll>
  )
}

export default App
