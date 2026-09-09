import FullBleed from '../FullBleed/FullBleed'
import './PageHero.css'

/**
 * Interior page opening. Where an `image` is supplied the heading sits
 * over a photograph; otherwise it falls back to a typographic opening
 * on the deep field. Voter Information and Legal use the plain form
 * deliberately — they are reference pages, not persuasion.
 */
export default function PageHero({ eyebrow, title, image, children, plain = false }) {
  if (plain || !image) {
    return (
      <section className="phero phero--plain">
        <div className="wrap">
          {eyebrow && <p className="kicker kicker--light">{eyebrow}</p>}
          <h1 className="phero__title">{title}</h1>
          {children && <div className="phero__intro measure">{children}</div>}
        </div>
      </section>
    )
  }

  return (
    <FullBleed image={image} height="standard" overlay="balanced">
      {eyebrow && <p className="kicker">{eyebrow}</p>}
      <h1 className="phero__title">{title}</h1>
      {children && <div className="phero__intro measure">{children}</div>}
    </FullBleed>
  )
}
