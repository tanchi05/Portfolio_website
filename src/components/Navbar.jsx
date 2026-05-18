import { motion } from 'framer-motion'

const links = ['about', 'skills', 'projects', 'labs', 'learning', 'contact']

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 h-14 border-b border-border1 bg-bg/90 backdrop-blur-xl flex items-center justify-between px-6"
    >
      <div className="font-head text-base font-bold text-accent">
        T C<span className="text-tx3 font-normal text-xs ml-1.5 font-mono">~/security</span>
      </div>

      <ul className="hidden md:flex gap-5 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l}`}
              className="text-tx3 no-underline font-mono text-[11px] hover:text-accent transition-colors duration-200"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse2" />
        available for internships
      </div>
    </motion.nav>
  )
}
