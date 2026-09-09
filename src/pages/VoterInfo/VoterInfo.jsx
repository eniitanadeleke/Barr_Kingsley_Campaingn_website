import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import DataTable from '../../components/DataTable/DataTable'
import LgaList from '../../components/LgaList/LgaList'
import Notice from '../../components/Notice/Notice'
import './VoterInfo.css'

const DATES = [
  ['Electoral Act 2026 signed into law', '18 February 2026'],
  ['Presidential and National Assembly campaigning opens', '19 August 2026'],
  ['Governorship and State House of Assembly campaigning opens', '9 September 2026'],
  ['Election day, Delta South Senatorial District', '[DATE — confirm against the INEC timetable]'],
  ['Campaigning ends', '24 hours before polling day']
]

export default function VoterInfo() {
  return (
    <>
      <PrimaryAction />

      <PageHero eyebrow="Voter information" title="Know your vote" plain>
        <p>
          This page is strictly factual and non-partisan. For the authoritative source on
          registration, polling units and election dates, always check the Independent
          National Electoral Commission (INEC).
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap voter-body">
          <h2>Check your registration and polling unit</h2>
          <p>
            Visit the official INEC website to confirm your registration status and find
            your polling unit. [INEC VOTER PORTAL LINK &mdash; TO SUPPLY. Verify the current,
            correct official INEC URL before launch; do not link to any unofficial or
            unverified site.]
          </p>

          <h2>Key dates for Delta South</h2>
          <DataTable caption="Key electoral dates for Delta South">
            <tbody>
              {DATES.map(([label, value]) => (
                <tr key={label}>
                  <th>{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>

          <h2>Delta South Senatorial District covers</h2>
          <LgaList />

          <Notice label="A note on this page:">
            Dates above are drawn from the Electoral Act 2026 and the published INEC
            timetable. Always confirm current details directly with INEC, as this page does
            not replace the official source.
          </Notice>
        </div>
      </section>
    </>
  )
}
