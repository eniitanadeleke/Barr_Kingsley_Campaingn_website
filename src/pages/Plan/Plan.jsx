import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import ThemeBlock from '../../components/ThemeBlock/ThemeBlock'
import SectionCTA from '../../components/SectionCTA/SectionCTA'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import './Plan.css'

export default function Plan() {
  return (
    <>
      <PrimaryAction />

      <PageHero
        eyebrow="The plan"
        title="Building an economically viable, productive and prosperous Delta South"
        image={{
          label: 'DELTA SOUTH LANDSCAPE',
          note: 'Wide view of the waterways, coastline or working district.'
        }}
      >
        <p>
          Six themes guide this plan. Each names the problem, the commitment, and how the
          campaign proposes to be judged on it. Nothing here promises what is outside the
          powers of a Senator; the Senate legislates, advocates, exercises oversight,
          facilitates and represents.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <ThemeBlock
            index
            label="Theme one"
            title="Productivity"
            image={{
              label: 'PRODUCTIVITY',
              note: 'Fisheries, farming, processing or oil and gas activity in Delta South.'
            }}
          >
            <p>
              <strong>The problem:</strong> Delta South's waterways, land, oil and gas
              resources, and people are economic assets, but assets alone have not
              translated into prosperity. Production without processing, storage and
              markets limits the value our fishermen, farmers and traders can capture.
            </p>
            <p>
              <strong>The commitment:</strong> Advocate for stronger federal focus on the
              maritime and blue economy potential of Delta South &mdash; fisheries, marine
              services, coastal and inland transportation. Advocate for access to federal
              agricultural and fisheries programmes, extension support, financing, storage
              and processing interventions, and stronger connections between producers and
              markets.
            </p>
            <p>
              <strong>How progress is judged:</strong> Regular reporting to constituents on
              which federal programmes, partnerships and legislative or oversight actions
              have been pursued on behalf of Delta South's producers, through the channel
              described in the First 100 Days plan below.
            </p>
          </ThemeBlock>

          <ThemeBlock
            index
            label="Theme two"
            title="Opportunity"
            image={{
              label: 'OPPORTUNITY',
              note: 'Young people and women in training, enterprise, sport or creative work.'
            }}
          >
            <p>
              <strong>The problem:</strong> Too many of Delta South's young people and women
              wait on government employment rather than finding pathways into enterprise,
              skills and productive work.
            </p>
            <p>
              <strong>The commitment:</strong> Advocate for education that connects learning
              to employability and entrepreneurship, for vocational, technical and digital
              skills programmes, and for stronger access for young entrepreneurs to
              training, financing and mentorship. Advocate for women's access to enterprise
              development, skills, finance, markets and leadership opportunities. Support
              pathways from grassroots sports talent to competition and opportunity, and
              from creative talent to enterprise.
            </p>
            <p>
              <strong>How progress is judged:</strong> Visible connections made between
              Delta South's young people, women, athletes and creatives and the federal
              programmes, partnerships and institutions relevant to each, reported to
              constituents.
            </p>
          </ThemeBlock>

          <ThemeBlock
            index
            label="Theme three"
            title="Connectivity"
            image={{
              label: 'CONNECTIVITY',
              note: 'Roads, jetties, bridges, boats or power and digital infrastructure.'
            }}
          >
            <p>
              <strong>The problem:</strong> Roads, waterways, bridges, electricity and
              digital connectivity determine whether a community can take part in economic
              life, and Delta South's riverine geography makes access difficult for many
              communities.
            </p>
            <p>
              <strong>The commitment:</strong> Use legislative advocacy, oversight and
              engagement with relevant federal institutions to pursue priority connectivity
              projects for Delta South, identifying the interventions that unlock the
              greatest economic and social value rather than promising every road or project.
            </p>
            <p>
              <strong>How progress is judged:</strong> A published priority register of
              connectivity needs across the eight local government areas, with reporting on
              which items have moved and which have not.
            </p>
          </ThemeBlock>

          <ThemeBlock
            index
            label="Theme four"
            title="Inclusion"
            image={{
              label: 'INCLUSION',
              note: 'Elderly citizens, persons with disabilities, and riverine communities.'
            }}
          >
            <p>
              <strong>The problem:</strong> Delta South's communities are not identical, and
              development conversations often leave out riverine communities, persons with
              disabilities, elderly citizens and vulnerable families.
            </p>
            <p>
              <strong>The commitment:</strong> Maintain a district-wide perspective covering
              Bomadi, Burutu, Isoko North, Isoko South, Patani, Warri North, Warri South and
              Warri South-West. Ensure the priority register and engagement plan explicitly
              account for every generation and major demographic, including persons with
              disabilities and elderly citizens.
            </p>
            <p>
              <strong>How progress is judged:</strong> The structured stakeholder engagement
              across all eight local government areas described in the First 100 Days plan,
              reported openly.
            </p>
          </ThemeBlock>

          <ThemeBlock
            index
            label="Theme five"
            title="Sustainability"
            image={{
              label: 'SUSTAINABILITY',
              note: 'Waterways, mangrove, farmland or fishing grounds of Delta South.'
            }}
          >
            <p>
              <strong>The problem:</strong> Many Delta South communities depend on land and
              waterways for farming, fishing, transportation and settlement, so
              environmental degradation directly affects livelihoods.
            </p>
            <p>
              <strong>The commitment:</strong> Advocate for stronger oversight of
              environmental commitments and remediation where federal responsibilities are
              implicated, and for stronger institutional accountability where communities
              are affected by environmental degradation.
            </p>
            <p>
              <strong>How progress is judged:</strong> Use of the Senate's oversight
              function, through the relevant committee system, on environmental matters
              affecting Delta South, reported to constituents.
            </p>
          </ThemeBlock>

          <ThemeBlock
            index
            label="Theme six"
            title="Accountability"
            image={{
              label: 'ACCOUNTABILITY',
              note: 'Town hall, constituency briefing or public reporting setting.'
            }}
          >
            <p>
              <strong>The problem:</strong> Public interventions are not always visible or
              measurable to the people they are meant to serve.
            </p>
            <p>
              <strong>The commitment:</strong> Legislate, advocate, exercise oversight
              through the National Assembly's committee system, facilitate connections
              between Delta South and legitimate opportunities, represent the district's
              concerns in national policy, convene stakeholders, and report progress back to
              constituents on a clear, established mechanism.
            </p>
            <p>
              <strong>How progress is judged:</strong> A published record of legislative and
              oversight activity, and a defined channel through which constituents are kept
              informed of what is being pursued, what has been achieved, and what remains
              outstanding.
            </p>
          </ThemeBlock>

          <hr className="divider" />

          <div className="plan-days">
            <div className="plan-days__text">
              <h2>The first 100 days</h2>
              <p>If given the mandate, the campaign has committed to the following sequence:</p>
              <ol className="steps">
                <li>
                  Establish structured engagement with stakeholders across all eight local
                  government areas.
                </li>
                <li>
                  Develop a Delta South priority register covering infrastructure, economic
                  development, human capital, environment, security, sports and enterprise.
                </li>
                <li>Map relevant federal programmes and agencies against these priorities.</li>
                <li>Identify immediate legislative and oversight opportunities.</li>
                <li>
                  Begin structured engagement with relevant federal institutions,
                  development partners and private-sector actors.
                </li>
                <li>Establish a clear mechanism for communicating progress to constituents.</li>
              </ol>
            </div>

            <div className="plan-days__media">
              <PlaceholderImage
                ratio="tall"
                label="STAKEHOLDER ENGAGEMENT"
                note="Candidate meeting community stakeholders across the district."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Help carry this plan forward"
        to="/involved"
        buttonLabel="Volunteer or join as a ward organiser"
        variant="primary"
      />
    </>
  )
}
