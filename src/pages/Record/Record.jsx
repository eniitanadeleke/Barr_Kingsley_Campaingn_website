import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import { Timeline, TimelineItem } from '../../components/Timeline/Timeline'
import BuildNote from '../../components/BuildNote/BuildNote'
import SectionCTA from '../../components/SectionCTA/SectionCTA'
import './Record.css'

export default function Record() {
  return (
    <>
      <PrimaryAction />

      <PageHero eyebrow="Track record"
        title="What he has already done"
        image={{
          label: 'CANDIDATE IN OFFICE',
          note: 'Photograph from a period of public service.'
        }}>
        <p>
          Every entry below is dated and drawn from public record. Supporting documents
          are held on file in the campaign's claims log.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <Timeline>
            <TimelineItem
              year="2000–2006"
              title="Chairman, Okerenkoko Federated Communities"
              image={{
                label: 'OKERENKOKO / GBARAMATU',
                note: 'Community leadership era photograph, if available.'
              }}
            >
              <p>
                Led the federated communities of Gbaramatu Kingdom. During this period,
                also took part in the Warri Ijaw-Itsekiri Grassroots Peace Front, engaging
                in efforts associated with the resolution of the inter-ethnic conflict in
                Warri.
              </p>
            </TimelineItem>

            <TimelineItem
              year="2003–2009"
              title="Secretary, Federated Niger Delta Ijaw Communities (FNDIC)"
            >
              <p>
                Served in advocacy on behalf of Niger Delta communities on issues of
                resource-producing areas and development.
              </p>
            </TimelineItem>

            <TimelineItem
              year="2005"
              title="Special Assistant on Community Affairs to Governor James Ibori"
            >
              <p>
                Brought community-level experience into formal Delta State government service.
              </p>
            </TimelineItem>

            <TimelineItem
              year="2008"
              title="Member, Delta State Technical Support Committee"
            >
              <p>
                Appointed to the committee led by Professor Sam Oyovbaire, supporting the
                state's engagement with the Niger Delta reform process and examining the
                effectiveness of state institutions and development agencies.
              </p>
            </TimelineItem>

            <TimelineItem
              year="2009"
              title="Chairman, Delta State Rehabilitation Committee for Internally Displaced Persons"
              image={{
                label: 'REHABILITATION COMMITTEE, 2009',
                note: 'Photograph from the displacement response work, if available.'
              }}
            >
              <p>
                Appointed following military operations in the Niger Delta, leading the
                state's response to communities affected by conflict and displacement.
              </p>
            </TimelineItem>

            <TimelineItem
              year="2011–2014"
              title="Commissioner, Delta State Oil Producing Areas Development Commission (DESOPADEC)"
            >
              <p>
                Served on the Board representing the Ijaw ethnic nationality, deepening his
                experience of the relationship between resource-producing communities,
                government institutions and development.
              </p>
            </TimelineItem>

            <TimelineItem
              year="2014"
              title="M.Sc. in Peace and Conflict Studies, University of Ibadan"
            >
              <p>
                Completed formal academic training in a field where he had already
                accumulated substantial practical experience.
              </p>
            </TimelineItem>

            <TimelineItem
              year="2015–2023"
              title="Deputy Governor of Delta State"
              image={{
                label: 'DEPUTY GOVERNOR, 2015–2023',
                note: 'Official photograph from the two terms in state executive government.'
              }}
            >
              <p>
                Elected alongside Governor Ifeanyi Okowa and served two full terms, from
                29 May 2015 to 29 May 2023. Responsibilities included government, policy and
                institutional coordination, and engagement in peacebuilding through the
                Peace Advocacy Committee Against Oil Facility Vandalism.
              </p>
            </TimelineItem>
          </Timeline>

          <BuildNote label="To supply:">
            [Additional measurable outcomes, dates and locations for specific projects
            delivered during the above roles, with supporting documents for the claims log,
            as required by section 5 and section 7.2 of the delivery standard.]
          </BuildNote>
        </div>
      </section>

      <SectionCTA
        title="See what this record is being put toward"
        to="/plan"
        buttonLabel="Read the plan for Delta South"
        variant="dark"
      />
    </>
  )
}
