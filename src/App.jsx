import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import SiteHeader from './components/SiteHeader/SiteHeader'
import SiteFooter from './components/SiteFooter/SiteFooter'
import useDocumentMeta from './hooks/useDocumentMeta'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Plan from './pages/Plan/Plan'
import Record from './pages/Record/Record'
import News from './pages/News/News'
import Events from './pages/Events/Events'
import Involved from './pages/Involved/Involved'
import VoterInfo from './pages/VoterInfo/VoterInfo'
import Contact from './pages/Contact/Contact'
import Legal from './pages/Legal/Legal'

/* Titles and descriptions carried over verbatim from the source HTML. */
const META = {
  '/': [
    'Barr. Kingsley Burutu Otuaro for the Senate | Delta South',
    'Barr. Kingsley Burutu Otuaro is seeking the mandate of Delta South Senatorial District. Purposeful representation for an economically viable, productive and prosperous Delta South.'
  ],
  '/about': [
    'About Barr. Kingsley Burutu Otuaro | Delta South Senate 2027',
    'The biography of Barr. Kingsley Burutu Otuaro: roots in Gbaramatu Kingdom, a career in law and community leadership, and eight years as Deputy Governor of Delta State.'
  ],
  '/plan': [
    'The Plan | Kingsley Burutu Otuaro for the Senate',
    'Six themes for Delta South: productivity, opportunity, connectivity, inclusion, sustainability and accountability, with the specific commitments under each.'
  ],
  '/record': [
    'Track Record | Kingsley Burutu Otuaro for the Senate',
    'A dated record of public service: community leadership, government appointments, and eight years as Deputy Governor of Delta State.'
  ],
  '/news': [
    'News and Updates | Kingsley Burutu Otuaro for the Senate',
    "Campaign statements, event reports and press releases from the campaign of Barr. Kingsley Burutu Otuaro for Delta South Senatorial District."
  ],
  '/events': [
    'Events | Kingsley Burutu Otuaro for the Senate',
    'Where Barr. Kingsley Burutu Otuaro will be and when, across Delta South Senatorial District.'
  ],
  '/involved': [
    'Get Involved | Kingsley Burutu Otuaro for the Senate',
    "Volunteer, join as a ward organiser, or share the campaign's message. No donations are collected on this site."
  ],
  '/voter-info': [
    'Voter Information | Delta South Senatorial District',
    'How to check your voter registration, find your polling unit, and key dates for the 2027 elections in Delta South Senatorial District. Sourced from INEC.'
  ],
  '/contact': [
    'Contact | Kingsley Burutu Otuaro for the Senate',
    'Contact the campaign office of Barr. Kingsley Burutu Otuaro for Delta South Senatorial District.'
  ],
  '/legal': [
    'Legal | Kingsley Burutu Otuaro for the Senate',
    'Privacy notice, terms of use, cookie notice and publisher attribution for the campaign website of Barr. Kingsley Burutu Otuaro.'
  ]
}

function RouteChrome() {
  const { pathname, hash } = useLocation()
  const [title, description] = META[pathname] || META['/']
  useDocumentMeta(title, description)

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <RouteChrome />
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/record" element={<Record />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/involved" element={<Involved />} />
          <Route path="/voter-info" element={<VoterInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}
