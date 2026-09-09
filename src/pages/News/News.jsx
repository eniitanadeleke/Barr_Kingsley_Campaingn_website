import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import BuildNote from '../../components/BuildNote/BuildNote'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import './News.css'

/**
 * Placeholder items reproduce the two blank entries from the supplied
 * news.html exactly. Replace this array with real posts before launch.
 */
const ITEMS = [
  { date: '[DATE]', kind: 'Press release' },
  { date: '[DATE]', kind: 'Campaign statement' }
]

export default function News() {
  return (
    <>
      <PrimaryAction />

      <PageHero eyebrow="News and updates"
        title="Campaign statements and press releases"
        image={{
          label: 'PRESS OR ADDRESS',
          note: 'Candidate addressing press or a gathering.'
        }}>
        <p>
          Updated at least weekly once the campaign is live. Every item below is dated and
          attributable to the campaign.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <BuildNote label="To supply:">
            [This page has no news items yet. Add dated campaign statements, event reports
            and press releases here, drafted and verified per section 7.2 of the delivery
            standard, before launch. A page with no recent post reads as an abandoned
            campaign, so plan the first three weeks of posts before going live.]
          </BuildNote>

          <div className="news-list">
            {ITEMS.map((item, i) => (
              <article className="news-item" key={i}>
                <div className="news-item__media">
                  <PlaceholderImage
                    ratio="landscape"
                    label="ARTICLE IMAGE"
                    note="One photograph per post."
                  />
                </div>
                <div className="news-item__body">
                  <p className="field-note">{item.date} &middot; {item.kind}</p>
                  <h3>[HEADLINE &mdash; TO SUPPLY]</h3>
                  <p>
                    [Summary of the statement, sourced and verified, to be added by the
                    content lead before launch.]
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
