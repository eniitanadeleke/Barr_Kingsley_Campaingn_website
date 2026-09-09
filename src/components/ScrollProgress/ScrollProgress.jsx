import { useEffect, useState } from 'react'
import './ScrollProgress.css'

/** A hairline brass reading indicator under the header. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let frame = null
    const update = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = null
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        setPct(max > 0 ? (h.scrollTop / max) * 100 : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__bar" style={{ transform: `scaleX(${pct / 100})` }} />
    </div>
  )
}
