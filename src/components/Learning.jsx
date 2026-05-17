import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

export default function Learning() {
  return (
    <section id="learning" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={5} label="learning" title="Currently Learning" />

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-5">
            {data.learning.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-surface border border-border1 rounded-lg px-3.5 py-2 font-mono text-[11px] text-tx2 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-default"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="bg-surface border border-border2 border-l-[3px] border-l-accent rounded-xl p-5">
            <p className="text-tx2 text-sm leading-relaxed">{data.learning.focus}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
