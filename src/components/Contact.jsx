import { useState } from 'react'
import FadeUp from './FadeUp'
import SectionHeader from './SectionHeader'
import { data } from '../data/portfolio'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="px-6 py-10 border-b border-border1">
      <div className="max-w-[860px] mx-auto">
        <SectionHeader index={9} label="contact" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left — links */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-2.5">
              <a
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-border1 rounded-lg font-mono text-[12px] text-tx2 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200 no-underline"
              >
                <span className="w-8 h-8 rounded-lg bg-bg3 border border-border1 flex items-center justify-center text-sm flex-shrink-0">⌥</span>
                {data.contact.github.replace('https://', '')}
              </a>

              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-border1 rounded-lg font-mono text-[12px] text-tx2 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200 no-underline"
              >
                <span className="w-8 h-8 rounded-lg bg-bg3 border border-border1 flex items-center justify-center text-sm flex-shrink-0 font-bold">in</span>
                {data.contact.linkedin.replace('https://', '')}
              </a>

              <a
                href={`mailto:${data.contact.email}`}
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-border1 rounded-lg font-mono text-[12px] text-tx2 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200 no-underline"
              >
                <span className="w-8 h-8 rounded-lg bg-bg3 border border-border1 flex items-center justify-center text-sm flex-shrink-0">@</span>
                {data.contact.email}
              </a>

              <div className="bg-surface border border-border2 border-l-[3px] border-l-accent rounded-xl p-4 mt-1">
                <div className="font-mono text-[10px] text-accent uppercase tracking-wider mb-1.5">Open to</div>
                <p className="text-tx2 text-sm leading-relaxed">
                  Internship opportunities, cybersecurity collaborations, and technical mentorship. Always happy to connect with others in the security space.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-border1 rounded-xl p-5 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-tx3 uppercase tracking-wider">Name</label>
                <input type="text" required placeholder="Your name" className="form-input" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-tx3 uppercase tracking-wider">Email</label>
                <input type="email" required placeholder="your@email.com" className="form-input" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-tx3 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  placeholder="What would you like to discuss?"
                  rows={4}
                  className="form-input resize-none"
                />
              </div>
              <button
                type="submit"
                className={`btn-primary justify-center transition-all duration-200 ${sent ? 'bg-accent2' : ''}`}
              >
                {sent ? 'Message Sent ✓' : 'Send Message'}
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
