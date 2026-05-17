import FadeUp from './FadeUp'

export default function SectionHeader({ index, label, title }) {
  return (
    <FadeUp>
      <div className="section-label">
        {String(index).padStart(2, '0')} // {label}
      </div>
      <h2 className="section-title">{title}</h2>
    </FadeUp>
  )
}
