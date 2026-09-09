import PlaceholderImage from '../PlaceholderImage/PlaceholderImage'
import './ImageBand.css'

/**
 * A full-width run of photographs used to break up long stretches of
 * text. Purely visual: it carries no copy of its own, so adding or
 * removing one changes no wording anywhere on the site.
 */
export default function ImageBand({ images = [], tone = 'light' }) {
  return (
    <div className={`image-band image-band--${tone}`} aria-hidden={false}>
      <div className="image-band__track">
        {images.map((img, i) => (
          <PlaceholderImage
            key={i}
            ratio={img.ratio || 'landscape'}
            label={img.label}
            note={img.note}
            src={img.src}
            alt={img.alt}
            className="image-band__item"
          />
        ))}
      </div>
    </div>
  )
}
