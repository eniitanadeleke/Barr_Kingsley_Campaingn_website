import { useRef, useEffect, useState } from 'react'
import './FullBleed.css'

/**
 * A full-width section where a photograph carries the section and the
 * text sits over it. This is the "let the pictures do the talking"
 * treatment — used for a handful of moments per page, not everywhere.
 *
 * While `image` has no src it renders a labelled placeholder field so
 * the campaign can see exactly which photograph belongs here.
 *
 * height:  "tall" | "standard" | "band"
 * align:   "left" | "center"
 */
export default function FullBleed({
  image = {},
  height = 'standard',
  align = 'left',
  overlay = 'balanced',
  parallax = true,
  children
}) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!parallax) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = null
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = null
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        if (r.bottom < 0 || r.top > window.innerHeight) return
        // Progress from -1 (below viewport) to 1 (above it)
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
        setOffset(Math.max(-1, Math.min(1, p)) * 40)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [parallax])

  const hasImage = Boolean(image.src)

  return (
    <section
      ref={ref}
      className={`fullbleed fullbleed--${height} fullbleed--${align} fullbleed--ov-${overlay}${hasImage ? '' : ' fullbleed--empty'}`}
    >
      <div className="fullbleed__media" style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.08)` }}>
        {hasImage ? (
          <img
            src={image.src}
            srcSet={image.srcSet || undefined}
            sizes={image.srcSet ? '100vw' : undefined}
            alt={image.alt || ''}
            loading={image.priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        ) : (
          <div className="fullbleed__slot" role="img" aria-label={image.label}>
            <span className="fullbleed__slot-label">{image.label}</span>
            {image.note && <span className="fullbleed__slot-note">{image.note}</span>}
          </div>
        )}
      </div>

      <div className="fullbleed__scrim" />

      <div className="wrap fullbleed__inner">
        {children}
      </div>
    </section>
  )
}
