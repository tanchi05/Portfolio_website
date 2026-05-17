import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { data } from '../data/portfolio'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = data.titles[titleIndex]
    let timeout

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        }, 65)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        }, 38)
      } else {
        setDeleting(false)
        setTitleIndex((i) => (i + 1) % data.titles.length)
        timeout = setTimeout(() => {}, 400)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, titleIndex])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center px-6 py-16 border-b border-border1 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1e2f42 1px, transparent 1px), linear-gradient(90deg, #1e2f42 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 100% at 40% 50%, black 20%, transparent 100%)',
        }}
      />
      {/* Accent glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,170,0.07) 0%, transparent 70%)' }}
      />

      <motion.div
        className="max-w-[860px] mx-auto w-full relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex items-center gap-2 font-mono text-[10px] text-accent tracking-[2px] uppercase mb-4">
          <span className="w-6 h-px bg-accent" />
          Portfolio 2025
        </motion.div>

        <motion.h1
          variants={item}
          className="font-head font-extrabold text-tx1 leading-none mb-3"
          style={{ fontSize: 'clamp(38px, 6vw, 68px)', letterSpacing: '-2px' }}
        >
          Tanchi
          <br />
          <span className="text-accent">Chrispus</span>
        </motion.h1>

        <motion.div variants={item} className="h-7 overflow-hidden mb-6">
          <div className="font-mono text-sm text-tx2 flex items-center gap-1.5">
            <span>{displayed}</span>
            <span className="inline-block w-0.5 h-4 bg-accent animate-blink align-middle" />
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="max-w-[540px] text-tx2 text-sm leading-relaxed mb-8 border-l-2 border-border2 pl-4"
        >
          {data.heroBio}
        </motion.p>

        <motion.div variants={item} className="flex gap-2.5 flex-wrap">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#resume" className="btn-outline">Resume</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
