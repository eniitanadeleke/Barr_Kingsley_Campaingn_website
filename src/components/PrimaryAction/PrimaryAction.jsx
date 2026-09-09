import { Link } from 'react-router-dom'
import './PrimaryAction.css'

/**
 * The campaign-wide action bar that sits directly under the header.
 * Text reproduced exactly from the supplied pages.
 * `to` defaults to the Get Involved page; involved.html points it at
 * the volunteer form anchor on its own page instead.
 */
export default function PrimaryAction({ to = '/involved', anchor = false }) {
  return (
    <div className="primary-action">
      <span className="primary-action__text">
        Join the campaign for Delta South &mdash;{' '}
      </span>
      {anchor ? (
        <a href={to}>volunteer today</a>
      ) : (
        <Link to={to}>volunteer today</Link>
      )}
    </div>
  )
}
