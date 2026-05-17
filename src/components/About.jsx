import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={1} label="about" title="Who I Am" />

        <FadeUp delay={0.1}>
          <div className="grid md:grid-cols-[140px_1fr] gap-8 items-start">
            {/* Avatar + traits */}
            <div>
              <div className="w-24 h-24 rounded-xl bg-surface border border-border2 flex items-center justify-center font-head text-3xl font-extrabold text-accent mb-3 relative overflow-hidden">
                <span className="relative z-10">TC</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              </div>
              <div className="flex flex-col gap-1.5">
                {data.traits.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 bg-surface border border-border1 rounded-lg px-2.5 py-1.5 font-mono text-[10px] text-tx2"
                  >
                    <span className="text-accent text-[9px]">▸</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="terminal-line">
                <span className="text-accent">$</span>
                <span className="text-blue">~/about</span>
                <span>cat bio.txt</span>
              </div>
              {data.about.map((p, i) => (
                <p key={i} className="text-tx2 text-sm leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
