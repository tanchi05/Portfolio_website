import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={7} label="writeups" title="Blog & Writeups" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
          {data.writeups.map((w, i) => (
            <FadeUp key={w.title} delay={i * 0.07}>
              <div className="card p-4 flex flex-col gap-1.5 hover:-translate-y-0.5 transition-transform duration-200 cursor-default h-full">
                <div className="font-mono text-[10px] text-accent uppercase tracking-wide">{w.type}</div>
                <div className="font-head font-semibold text-tx1 text-[13px] leading-snug">{w.title}</div>
                <div className="font-mono text-[10px] text-tx3 mt-auto">Coming soon</div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="flex items-center gap-3 font-mono text-[12px] text-tx2 bg-surface border border-border2 border-l-[3px] border-l-accent rounded-lg px-4 py-3.5">
            Writeups and technical documentation coming soon — documenting the learning journey as it happens.
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
