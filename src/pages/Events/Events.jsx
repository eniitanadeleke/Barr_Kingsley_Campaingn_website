import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import DataTable from '../../components/DataTable/DataTable'
import BuildNote from '../../components/BuildNote/BuildNote'
import ImageBand from '../../components/ImageBand/ImageBand'
import './Events.css'

const ROWS = [
  { date: '[DATE]', name: '[EVENT NAME — TO SUPPLY]', lga: '[LGA — TO SUPPLY]', venue: '[VENUE — TO SUPPLY]' },
  { date: '[DATE]', name: '[EVENT NAME — TO SUPPLY]', lga: '[LGA — TO SUPPLY]', venue: '[VENUE — TO SUPPLY]' }
]

export default function Events() {
  return (
    <>
      <PrimaryAction />

      <PageHero eyebrow="Events"
        title="Where the campaign will be"
        image={{
          label: 'CAMPAIGN GATHERING',
          note: 'Rally, town hall or ward meeting.'
        }}>
        <p>Listed by local government area. Details can change; check back close to the date.</p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <DataTable caption="Campaign events by date and local government area">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Local government area</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i}>
                  <td>{row.date}</td>
                  <td>{row.name}</td>
                  <td>{row.lga}</td>
                  <td>{row.venue}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>

          <BuildNote label="To supply:">
            [No confirmed events have been provided. Add the campaign's real schedule, one
            row per event, before launch.]
          </BuildNote>
        </div>
      </section>

      <ImageBand
        tone="sand"
        images={[
          { label: 'RALLY OR TOWN HALL', note: 'Photograph from a campaign gathering.' },
          { label: 'WARD MEETING', note: 'Smaller community or ward-level meeting.' },
          { label: 'ARRIVAL BY WATER', note: 'Campaign travelling to a riverine community.' }
        ]}
      />
    </>
  )
}
