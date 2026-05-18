import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={8} label="resume" title="Resume" />

        <FadeUp delay={0.1}>
          <div className="bg-surface border border-border1 rounded-2xl p-6 grid md:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <p className="text-tx2 text-sm leading-relaxed mb-5">{data.resumeSummary}</p>
              <div className="flex flex-wrap gap-1.5">
                {data.resumeSkills.map((s) => (
                  <span key={s} className="bg-bg3 border border-border1 rounded-full px-2.5 py-0.5 font-mono text-[10px] text-tx2">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-[140px]">
              <a href="Resume.pdf" className="btn-primary justify-center">Download PDF</a>
              <a href="#contact" className="btn-outline justify-center">Get in Touch</a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
