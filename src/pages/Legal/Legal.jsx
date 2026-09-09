import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../../components/PageHero/PageHero'
import BuildNote from '../../components/BuildNote/BuildNote'
import './Legal.css'

export default function Legal() {
  const { hash } = useLocation()

  // Router hash links (#privacy, #terms, #cookies) need to scroll manually.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy, terms and cookies" plain />

      <section className="section legal-section" id="privacy">
        <div className="wrap legal-body">
          <h2>Privacy notice</h2>

          <BuildNote label="Draft for legal review:">
            [The text below is a starting structure only. It must be completed with the
            campaign's actual details and reviewed and signed off by the campaign's lawyer
            before launch, per section 4.4 and section 4.7 of the delivery standard. It is
            not a substitute for that review.]
          </BuildNote>

          <p><strong>What we collect.</strong> When you use the volunteer sign-up or contact forms on this site, we collect the details you provide, which may include your name, phone number, ward, email address and the content of your message.</p>
          <p><strong>Why we collect it.</strong> We use this information to organise volunteers, respond to enquiries, and, where you have given consent, to send you campaign updates.</p>
          <p><strong>How long we keep it.</strong> [RETENTION PERIOD &mdash; TO SUPPLY, agreed in advance per section 10 of the delivery standard.]</p>
          <p><strong>Who it is shared with.</strong> Your information is not sold, transferred or shared with any third party, including the party structure, except as described in this notice. [Confirm and complete before launch.]</p>
          <p><strong>How your data is stored.</strong> Form submissions are stored in an access controlled system. Access is limited to named campaign staff.</p>
          <p><strong>Your rights.</strong> You can ask us to delete your data at any time under the Nigeria Data Protection Act 2023. To make a request, contact [DATA PROTECTION CONTACT NAME AND EMAIL &mdash; TO SUPPLY].</p>
          <p><strong>After the election.</strong> [Describe what happens to supporter data after the election, per section 14.3 of the delivery standard.]</p>
        </div>
      </section>

      <section className="section-stone legal-section" id="terms">
        <div className="wrap legal-body">
          <h2>Terms of use</h2>

          <BuildNote label="Draft for legal review:">
            [Complete and confirm with the campaign's lawyer before launch.]
          </BuildNote>

          <p>This website is published by [ORGANISATION] on behalf of the campaign of Barr. Kingsley Burutu Otuaro for the Senate, Delta South Senatorial District. The content on this site reflects the candidate's own statements and policy positions. It does not represent the position of the Independent National Electoral Commission or any government body.</p>
          <p>All content is provided for informational purposes. While every reasonable effort is made to keep information accurate and current, [ORGANISATION] does not guarantee that all content will remain up to date at all times.</p>
        </div>
      </section>

      <section className="section legal-section" id="cookies">
        <div className="wrap legal-body">
          <h2>Cookie notice</h2>

          <BuildNote label="Draft for legal review:">
            [Confirm the actual analytics and cookie tools in use before launch and update
            this notice to match, per section 9 of the delivery standard.]
          </BuildNote>

          <p>This site uses [ANALYTICS TOOL &mdash; TO SUPPLY] to understand how visitors use the site. This tool may set cookies on your device. No cookie on this site is used to collect payment information, as this site does not process donations.</p>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap legal-body">
          <h2>Publisher attribution</h2>
          <p className="legal-attrib">Published by [ORGANISATION], [ADDRESS].</p>
        </div>
      </section>
    </>
  )
}
