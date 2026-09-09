import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import FormField from '../../components/FormField/FormField'
import ConsentBox from '../../components/ConsentBox/ConsentBox'
import Button from '../../components/Button/Button'
import BuildNote from '../../components/BuildNote/BuildNote'
import StatCard from '../../components/StatCard/StatCard'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import { Link } from 'react-router-dom'
import useFormValidation, { required, phone, requiredCheck } from '../../hooks/useFormValidation'
import './Involved.css'

export default function Involved() {
  const { errors, status, handleSubmit, clearField } = useFormValidation({
    name: required('Full name'),
    phone: phone,
    ward: required('Ward'),
    help_type: required('A way to help'),
    consent: requiredCheck('Please confirm you agree to be contacted.')
  })

  // No backend is connected yet. When one exists, replace this with the
  // POST and keep server-side validation regardless of what runs here.
  const onValid = () => {}

  return (
    <>
      <PrimaryAction to="#volunteer-form" anchor />

      <PageHero eyebrow="Get involved"
        title="Join a campaign for purposeful representation"
        image={{
          label: 'VOLUNTEERS AT WORK',
          note: 'Campaign volunteers or ward organisers in the district.'
        }}>
        <p>
          This campaign runs on time, endorsement and volunteering, not online donations.
          Sign up below to help organise your ward, or to share the campaign's message.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2 id="volunteer-form">Volunteer sign-up</h2>
            <p>We ask for the minimum needed to organise: your name, phone number and ward.</p>

            <form onSubmit={handleSubmit(onValid)} noValidate>
              <FormField id="v-name" label="Full name" error={errors.name}>
                <input type="text" id="v-name" name="name" autoComplete="name"
                       aria-invalid={Boolean(errors.name)} onChange={() => clearField('name')} />
              </FormField>

              <FormField id="v-phone" label="Phone number" error={errors.phone}>
                <input type="tel" id="v-phone" name="phone" autoComplete="tel"
                       aria-invalid={Boolean(errors.phone)} onChange={() => clearField('phone')} />
              </FormField>

              <FormField
                id="v-ward"
                label="Ward"
                note="Tell us your local government area and ward so we can connect you to the right organiser."
                error={errors.ward}
              >
                <input
                  type="text"
                  id="v-ward"
                  name="ward"
                  placeholder="e.g. Ward 4, Bomadi"
                  aria-invalid={Boolean(errors.ward)}
                  onChange={() => clearField('ward')}
                />
              </FormField>

              <FormField id="v-help" label="How would you like to help?" error={errors.help_type}>
                <select id="v-help" name="help_type" defaultValue=""
                        aria-invalid={Boolean(errors.help_type)} onChange={() => clearField('help_type')}>
                  <option value="">Choose one</option>
                  <option value="canvassing">Canvassing and door knocking</option>
                  <option value="ward_organiser">Ward level organising</option>
                  <option value="events">Event support</option>
                  <option value="sharing">Sharing campaign material</option>
                  <option value="other">Other</option>
                </select>
              </FormField>

              <ConsentBox
                id="v-consent"
                label="I agree to be contacted by the campaign by phone, SMS or WhatsApp about volunteering opportunities and campaign updates."
              >
                This box is unticked by default. Your name, phone number and ward will be
                stored in an access controlled system and used only for campaign organising,
                as set out in our <Link to="/legal#privacy">privacy notice</Link>. It will
                not be sold or shared with any third party.
              </ConsentBox>

              <Button variant="primary" type="submit">Sign up to volunteer</Button>

              {status === 'error' && (
                <p className="involved-status involved-status--error" role="alert">
                  Please check the fields marked above.
                </p>
              )}
              {status === 'pending' && (
                <p className="involved-status" role="status">
                  Your details are complete. This form is not yet connected to the
                  campaign's system, so nothing has been sent.
                </p>
              )}
            </form>

            <BuildNote label="Build note:">
              [This form is not yet wired to a live submission and storage system. Before
              launch, connect it to an access controlled, rate limited backend per section
              10 and section 11 of the delivery standard, and confirm the receiving inbox
              with the campaign manager.]
            </BuildNote>
          </div>

          <aside className="involved-aside">
            <PlaceholderImage
              ratio="portrait"
              className="involved-aside__image"
              label="VOLUNTEERS AT WORK"
              note="Campaign volunteers or ward organisers in the district."
            />

            <StatCard value="No donations">
              <p>
                This site does not collect donations or payments of any kind. If a donation
                function is added later, it will only go live once the campaign's lawyer has
                confirmed in writing that it complies with the Electoral Act 2026.
              </p>
            </StatCard>

            <StatCard value="Share the message">
              <p>
                [Provide the campaign's official social handles and any approved share
                graphics here once supplied.]
              </p>
            </StatCard>
          </aside>
        </div>
      </section>
    </>
  )
}
