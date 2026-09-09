import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import './Timeline.css'

/**
 * Dated record of public service. The content genuinely is a
 * chronological sequence, so the year marker earns its place.
 */
export function Timeline({ children }) {
  return <ol className="timeline">{children}</ol>
}

export function TimelineItem({ year, title, image, children }) {
  return (
    <li className="timeline__item">
      <span className="yr">{year}</span>
      <div className="timeline__content">
        <h3>{title}</h3>
        {children}
      </div>
      {image && (
        <div className="timeline__media">
          <PlaceholderImage
            ratio="landscape"
            label={image.label}
            note={image.note}
            src={image.src}
            alt={image.alt}
          />
        </div>
      )}
    </li>
  )
}
