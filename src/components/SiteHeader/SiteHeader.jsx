import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import ScrollProgress from '../ScrollProgress/ScrollProgress'
import './SiteHeader.css'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/plan', label: 'The Plan' },
  { to: '/record', label: 'Track Record' },
  { to: '/news', label: 'News' },
  { to: '/events', label: 'Events' },
  { to: '/involved', label: 'Get Involved' },
  { to: '/voter-info', label: 'Voter Information' },
  { to: '/contact', label: 'Contact' }
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [condensed, setCondensed] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 90)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKey)

    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`hdr${condensed ? ' hdr--condensed' : ''}${open ? ' hdr--open' : ''}`}
      >
        <div className="wrap hdr__inner">

          <Link className="hdr__brand" to="/">
            <span className="hdr__name">
              Barr. Kingsley Burutu
            </span>

            <span className="hdr__race">
              For the Senate · Delta South Senatorial District
            </span>
          </Link>

          <nav className="hdr__nav" aria-label="Primary navigation">
            {NAV.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `hdr__link${isActive ? ' is-current' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link className="hdr__support" to="/involved">
            <span>Support</span>
            <span className="hdr__support-arrow">→</span>
          </Link>

          <button
            className="hdr__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(value => !value)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        <ScrollProgress />
      </header>

      <div
        className={`mnav${open ? ' mnav--open' : ''}`}
        id="mobile-nav"
        aria-hidden={!open}
      >
        <div className="mnav__top">

          <Link className="mnav__brand" to="/">
            <span>Barr. Kingsley Burutu</span>
            <small>For the Senate · Delta South</small>
          </Link>

        </div>

        <nav className="mnav__inner" aria-label="Mobile navigation">
          {NAV.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `mnav__link${isActive ? ' is-current' : ''}`
              }
              style={{
                transitionDelay: open ? `${80 + index * 42}ms` : '0ms'
              }}
              tabIndex={open ? 0 : -1}
            >
              <span className="mnav__num">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span>{item.label}</span>
            </NavLink>
          ))}

          <Link
            className="mnav__support"
            to="/involved"
            tabIndex={open ? 0 : -1}
          >
            Support the campaign
            <span>→</span>
          </Link>
        </nav>

        <div className="mnav__footer">
          <span>People</span>
          <i />
          <span>Resources</span>
          <i />
          <span>Future</span>
        </div>
      </div>
    </>
  )
}