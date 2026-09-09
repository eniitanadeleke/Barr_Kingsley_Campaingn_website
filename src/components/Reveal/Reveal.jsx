import { useRef, useEffect, useState } from 'react'
import './Reveal.css'

/**
 * Reveals its children once, when they first scroll into view.
 *
 * Used sparingly and only on the large photographic moments — not on
 * every section. Scattering the same fade-and-rise down a whole page
 * is the thing that makes a site feel automated rather than designed.
 *
 * Honours prefers-reduced-motion by rendering visible immediately.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShown(true); return }

    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setShown(true); io.disconnect() }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' reveal--in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
