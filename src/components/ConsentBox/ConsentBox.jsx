import './ConsentBox.css'

/**
 * Consent checkbox. Never pre-ticked — the supplied pages are explicit
 * that the box is unticked by default, and the notice text says so.
 */
export default function ConsentBox({ id, label, children }) {
  return (
    <div className="consent">
      <input type="checkbox" id={id} name="consent" required />
      <div>
        <label htmlFor={id} className="consent__label">{label}</label>
        <p className="consent-note">{children}</p>
      </div>
    </div>
  )
}
