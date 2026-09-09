import './PlaceholderImage.css'

/**
 * Image slot.
 *
 * While `src` is empty it renders a labelled placeholder telling the
 * campaign exactly which photograph belongs here. Supply `src` (and
 * optionally `srcSet`) and it renders the real photograph instead —
 * no other change is needed anywhere.
 *
 * ratio: "portrait" | "landscape" | "wide" | "square" | "tall"
 */
export default function PlaceholderImage({
  label,
  note,
  alt = '',
  src = '',
  srcSet = '',
  sizes = '100vw',
  ratio = 'landscape',
  priority = false,
  className = ''
}) {
  const classes = `ph ph--${ratio} ${className}`.trim()

  if (src) {
    return (
      <figure className={classes}>
        <img
          src={src}
          srcSet={srcSet || undefined}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className="ph__img"
        />
      </figure>
    )
  }

  return (
    <figure className={`${classes} ph--empty`} role="img" aria-label={label}>
      <div className="ph__inner">
        <span className="ph__mark" aria-hidden="true" />
        <span className="ph__label">{label}</span>
        {note && <span className="ph__note">{note}</span>}
      </div>
    </figure>
  )
}
