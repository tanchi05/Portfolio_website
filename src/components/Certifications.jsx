import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

const badgeStyles = {
  progress: 'bg-amber/10 text-amber border border-amber/25',
  planned:  'bg-blue/10 text-blue border border-blue/25',
}

export default function Certifications() {
  return (
    <section id="certs" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={6} label="certifications" title="Learning Path" />

        <div className="grid sm:grid-cols-3 gap-2.5 mb-6">
          {data.certifications.map((cert, i) => (
            <FadeUp key={cert.name} delay={i * 0.08}>
              <div className="card p-4 flex flex-col gap-1.5 h-full">
                <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-0.5 rounded-full w-fit ${badgeStyles[cert.type]}`}>
                  {cert.type === 'progress' ? '●' : '◌'} {cert.status}
                </span>
                <div className="font-head font-semibold text-tx1 text-sm leading-snug">{cert.name}</div>
                <div className="font-mono text-[11px] text-tx3">{cert.desc}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="font-mono text-[10px] text-tx3 uppercase tracking-wider mb-2.5">Practice Platforms</div>
          <div className="flex flex-wrap gap-2">
            {data.platforms.map((p) => (
              <span key={p} className="bg-bg3 border border-border1 rounded-full px-3 py-1 font-mono text-[11px] text-tx2">
                {p}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
