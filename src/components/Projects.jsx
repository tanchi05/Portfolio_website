import { motion } from 'framer-motion'
import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

const statusStyles = {
  active:   'bg-accent/10 text-accent border border-accent/25',
  progress: 'bg-amber/10 text-amber border border-amber/25',
  planned:  'bg-blue/10 text-blue border border-blue/25',
  lead:     'bg-accent/10 text-accent border border-accent/25',
}

const statusLabel = {
  active:   'Active',
  progress: 'In Progress',
  planned:  'Planned',
  lead:     'Project Lead',
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={3} label="projects" title="Featured Work" />

        <div className="grid sm:grid-cols-2 gap-3">
          {data.projects.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="relative bg-surface border border-border1 rounded-xl p-5 flex flex-col gap-3 h-full overflow-hidden group"
              >
                {/* top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex justify-between items-start gap-3">
                  <div className="font-head font-bold text-tx1 text-base leading-tight">{p.name}</div>
                  <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${statusStyles[p.statusType]}`}>
                    {statusLabel[p.statusType]}
                  </span>
                </div>

                <p className="text-tx2 text-[13px] leading-relaxed">{p.description}</p>

                <div className="flex flex-col gap-1">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 font-mono text-[11px] text-tx3">
                      <span className="text-accent text-[9px]">→</span>
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-border1">
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tech.map((t) => (
                      <span key={t} className="bg-bg border border-border1 rounded-full px-2 py-0.5 font-mono text-[10px] text-tx3">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link ? (
                    <a href={p.link} className="font-mono text-[11px] text-tx3 hover:text-accent transition-colors no-underline">
                      GitHub →
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-tx3">Coming soon</span>
                  )}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
