import Button from '../Button/Button'
import './SectionCTA.css'

/** The centred closing call-to-action used at the foot of several pages. */
export default function SectionCTA({ title, lead, to, buttonLabel, variant = 'primary', raised = true }) {
  return (
    <section className={raised ? 'section-dark' : 'section'}>
      <div className="wrap section-cta">
        <h2>{title}</h2>
        {lead && <p className="lead section-cta__lead">{lead}</p>}
        <Button variant={variant} to={to}>{buttonLabel}</Button>
      </div>
    </section>
  )
}
