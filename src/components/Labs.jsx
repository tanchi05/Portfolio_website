import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

export default function Labs() {
  return (
    <section id="labs" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={4} label="labs" title="Security Lab" />

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Environment Setup', items: data.lab.environment },
            { title: 'Practice Areas', items: data.lab.practice },
          ].map((block, i) => (
            <FadeUp key={block.title} delay={i * 0.1}>
              <div className="card p-5 h-full">
                <div className="flex items-center gap-2 font-head font-bold text-tx1 text-sm mb-4">
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  {block.title}
                </div>
                <ul className="flex flex-col gap-2 list-none">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-mono text-[11px] text-tx2">
                      <span className="text-accent text-[10px]">$</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
