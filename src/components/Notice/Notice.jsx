import './Notice.css'

/**
 * A public-facing notice that always renders.
 *
 * Distinct from BuildNote: this is content written for the reader
 * (for example the INEC disclaimer on the voter information page),
 * not an internal instruction to the campaign team. It is never
 * hidden by VITE_SHOW_BUILD_NOTES.
 */
export default function Notice({ label, children }) {
  return (
    <div className="notice">
      <p className="notice__body">
        <strong className="notice__label">{label}</strong> {children}
      </p>
    </div>
  )
}
