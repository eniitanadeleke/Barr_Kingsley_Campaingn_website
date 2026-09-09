import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import './LgaList.css'

export const LGAS = [
  'Bomadi',
  'Burutu',
  'Isoko North',
  'Isoko South',
  'Patani',
  'Warri North',
  'Warri South',
  'Warri South-West'
]

/**
 * The eight local government areas of Delta South.
 *
 * withImages -> photo card per LGA (home page)
 * plain      -> simple named list (voter information page)
 */
export default function LgaList({ withImages = false }) {
  if (!withImages) {
    return (
      <ul className="lga-list">
        {LGAS.map(name => <li key={name}>{name}</li>)}
      </ul>
    )
  }

  return (
    <ul className="lga-grid">
      {LGAS.map(name => (
        <li className="lga-card" key={name}>
          <PlaceholderImage
            ratio="square"
            label={`${name.toUpperCase()}`}
            note="Photograph from this local government area"
          />
          <span className="lga-card__name">{name}</span>
        </li>
      ))}
    </ul>
  )
}
