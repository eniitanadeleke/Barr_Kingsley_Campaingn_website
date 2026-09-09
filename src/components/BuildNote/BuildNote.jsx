import './BuildNote.css'

/**
 * Internal build note.
 *
 * The text inside these notes is reproduced from the supplied HTML
 * exactly as written. Nothing has been reworded or removed.
 *
 * Visibility is controlled by VITE_SHOW_BUILD_NOTES in .env:
 *   true  -> notes render (review and hand-off)
 *   false -> notes do not render (public launch)
 *
 * The content stays in the codebase either way, so nothing is lost
 * when the notes are switched off.
 */

const SHOW = import.meta.env.VITE_SHOW_BUILD_NOTES !== 'false'

export default function BuildNote({ label, children, tone = 'default' }) {
  if (!SHOW) return null

  return (
    <div className={`build-note build-note--${tone}`} data-internal="true">
      <p className="build-note__body">
        <strong className="build-note__label">{label}</strong>{' '}
        {children}
      </p>
    </div>
  )
}
