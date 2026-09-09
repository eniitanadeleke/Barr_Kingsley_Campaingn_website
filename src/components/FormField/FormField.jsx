import './FormField.css'

export default function FormField({ id, label, note, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field__error" id={`${id}-error`} role="alert">{error}</span>}
      {note && !error && <p className="field-note">{note}</p>}
    </div>
  )
}
