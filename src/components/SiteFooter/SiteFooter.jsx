import { Link } from 'react-router-dom'
import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">

          <div>
            <h4>Kingsley Burutu Otuaro for the Senate</h4>

            <p className="footer-detail">
              [OFFICE ADDRESS] &middot; Delta South Senatorial District, Delta State
            </p>

            <p className="footer-detail">
              Phone: [PHONE] &middot; WhatsApp: [WHATSAPP]
              <br />
              Email: [EMAIL]
            </p>

            <div className="social-row">
              <a
                href="#"
                aria-label="Facebook"
                className="social-link facebook"
                data-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7H17V2.5c-.4-.1-1.6-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8v2.4H6.4V13h3.1v9h4Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="social-link instagram"
                data-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="X"
                className="social-link x-social"
                data-label="X"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.5 4h4.1l4 5.4L17.2 4H20l-6.1 7.1L20.5 20h-4.1l-4.6-6.2L6.5 20H3.7l6.8-7.9L4.5 4Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="social-link whatsapp"
                data-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.3L4 20.2l1.1-4.1A8.4 8.4 0 1 1 20.5 11.8Z" />
                  <path d="M9 8.3c.3-.4.6-.4.9-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.8l-.6.8c-.1.2-.2.4 0 .6.7 1.2 1.8 2.1 3 2.8.2.1.4.1.6-.1l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6 0 .7-.3 1.4-.8 1.9-.5.5-1.3.8-2 .8-1.4 0-3.2-.7-5.1-2.4-2.3-2-3.7-4.6-3.8-5.7 0-.7.1-1.2.5-1.6Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="social-link youtube"
                data-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 8.2c-.2-1.3-.7-2.1-1.9-2.3C17.7 5.6 14.8 5.5 12 5.5s-5.7.1-7.1.4C3.7 6.1 3.2 6.9 3 8.2A23.7 23.7 0 0 0 2.8 12c0 1.4.1 2.7.2 3.8.2 1.3.7 2.1 1.9 2.3 1.4.3 4.3.4 7.1.4s5.7-.1 7.1-.4c1.2-.2 1.7-1 1.9-2.3.1-1.1.2-2.4.2-3.8s-.1-2.7-.2-3.8Z" />
                  <path className="youtube-play" d="m10 9 5 3-5 3V9Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Site</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/plan">The Plan</Link></li>
              <li><Link to="/record">Track Record</Link></li>
              <li><Link to="/voter-info">Voter Information</Link></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link to="/legal#privacy">Privacy notice</Link></li>
              <li><Link to="/legal#terms">Terms of use</Link></li>
              <li><Link to="/legal#cookies">Cookie notice</Link></li>
            </ul>
          </div>

        </div>

        <p className="attribution">
          Published by [ORGANISATION], [ADDRESS].
        </p>
      </div>
    </footer>
  )
}