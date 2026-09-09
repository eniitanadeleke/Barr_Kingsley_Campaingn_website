import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import './ThemeBlock.css'

/**
 * A policy theme. Used on the home page (three commitments, no image)
 * and on The Plan page (six themes, each with a photograph).
 */
export default function ThemeBlock({ label, title, image, children, index }) {
  return (
    <article className={`theme-block${image ? ' theme-block--imaged' : ''}`}>
      {image && (
        <div className="theme-block__media">
          <PlaceholderImage
            ratio="landscape"
            label={image.label}
            note={image.note}
            src={image.src}
            alt={image.alt}
          />
        </div>
      )}
      <div className="theme-block__body">
        {label && <p className="theme-label">{label}</p>}
        {index ? <h2>{title}</h2> : <h3>{title}</h3>}
        {children}
      </div>
    </article>
  )
}
