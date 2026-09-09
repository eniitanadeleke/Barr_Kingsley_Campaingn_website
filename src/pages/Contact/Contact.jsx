import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import DataTable from '../../components/DataTable/DataTable'
import FormField from '../../components/FormField/FormField'
import ConsentBox from '../../components/ConsentBox/ConsentBox'
import Button from '../../components/Button/Button'
import BuildNote from '../../components/BuildNote/BuildNote'
import StatCard from '../../components/StatCard/StatCard'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import { Link } from 'react-router-dom'
import useFormValidation, { required, email, requiredCheck } from '../../hooks/useFormValidation'
import './Contact.css'

const DETAILS = [
  ['Office address', '[OFFICE ADDRESS]'],
  ['Phone', '[PHONE]'],
  ['WhatsApp', '[WHATSAPP]'],
  ['Email', '[EMAIL]'],
  ['Office hours', '[OFFICE HOURS]'],
  ['Press contact', '[PRESS CONTACT NAME AND EMAIL]']
]

export default function Contact() {
  const { errors, status, handleSubmit, clearField } = useFormValidation({
    name: required('Full name'),
    email: email,
    subject: required('A subject'),
    message: required('A message'),
    consent: requiredCheck('Please confirm the campaign may respond to you.')
  })

  // No backend is connected yet. Route by subject when one exists.
  const onValid = () => {}

  return (
    <>
      <PrimaryAction />

      <PageHero eyebrow="Contact" title="Reach the campaign office" plain />

      <section className="section">
        <div className="wrap two-col">
          <div>
            <DataTable caption="Campaign office contact details">
              <tbody>
                {DETAILS.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </DataTable>

            <h2 className="contact-form__heading">Send a message</h2>

            <form onSubmit={handleSubmit(onValid)} noValidate>
              <FormField error={errors.name} id="c-name" label="Full name">
                <input type="text" id="c-name" name="name" autoComplete="name"
                       aria-invalid={Boolean(errors.name)} onChange={() => clearField('name')} />
              </FormField>

              <FormField id="c-phone" label="Phone number">
                <input type="tel" id="c-phone" name="phone" autoComplete="tel" />
              </FormField>

              <FormField error={errors.email} id="c-email" label="Email address">
                <input type="email" id="c-email" name="email" autoComplete="email"
                       aria-invalid={Boolean(errors.email)} onChange={() => clearField('email')} />
              </FormField>

              <FormField error={errors.subject} id="c-subject" label="Subject">
                <select id="c-subject" name="subject" defaultValue=""
                        aria-invalid={Boolean(errors.subject)} onChange={() => clearField('subject')}>
                  <option value="">Choose one</option>
                  <option value="general">General enquiry</option>
                  <option value="press">Press enquiry</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="event">Event invitation</option>
                  <option value="data">Data request</option>
                </select>
              </FormField>

              <FormField error={errors.message} id="c-message" label="Message">
                <textarea id="c-message" name="message"
                          aria-invalid={Boolean(errors.message)} onChange={() => clearField('message')}></textarea>
              </FormField>

              <ConsentBox
                id="c-consent"
                label="I agree that the campaign may use these details to respond to my message."
              >
                This box is unticked by default. Your details are stored in an access
                controlled system and used only to respond to your enquiry, as set out in
                our <Link to="/legal#privacy">privacy notice</Link>.
              </ConsentBox>

              <Button variant="primary" type="submit">Send message</Button>

              {status === 'error' && (
                <p className="contact-status contact-status--error" role="alert">
                  Please check the fields marked above.
                </p>
              )}
              {status === 'pending' && (
                <p className="contact-status" role="status">
                  Your message is complete. This form is not yet connected to the
                  campaign's inbox, so nothing has been sent.
                </p>
              )}
            </form>

            <BuildNote label="Build note:">
              [Route submissions by subject to the correct named inbox before launch, and
              confirm the routing with the campaign manager. This form must be rate limited
              per section 11 of the delivery standard.]
            </BuildNote>
          </div>

          <aside className="contact-aside">
            <PlaceholderImage
              ratio="landscape"
              className="contact-aside__image"
              label="CAMPAIGN OFFICE"
              note="Exterior or interior of the campaign office, once open."
            />

            <StatCard value="All contact details tested">
              <p>
                Before launch, every phone number, WhatsApp line and email address on this
                page is tested to confirm it is answered and received, per the launch
                readiness checklist.
              </p>
            </StatCard>
          </aside>
        </div>
      </section>
    </>
  )
}
