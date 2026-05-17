import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={2} label="skills" title="Technical Stack" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {data.skills.map((cat, i) => (
            <FadeUp key={cat.category} delay={i * 0.08}>
              <div className="card p-4 h-full">
                <div className="font-head text-[11px] font-semibold text-accent tracking-wide uppercase mb-3 pb-2.5 border-b border-border1">
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
