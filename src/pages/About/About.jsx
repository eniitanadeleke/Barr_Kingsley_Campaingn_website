import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import PageHero from '../../components/PageHero/PageHero'
import PlaceholderImage from '../../components/PlaceholderImage/PlaceholderImage'
import StatCard from '../../components/StatCard/StatCard'
import SectionCTA from '../../components/SectionCTA/SectionCTA'
import ImageBand from '../../components/ImageBand/ImageBand'
import './About.css'

export default function About() {
  return (
    <>
      <PrimaryAction />

      <PageHero
        
        title="A journey of service"
        image={{
          label: 'THE CANDIDATE IN THE CONSTITUENCY',
          note: 'Environmental portrait — the candidate in a riverine setting.'
        }}
      >
        <p>
          A life shaped by the riverine communities of Gbaramatu Kingdom, by the law,
          and by eight years in the executive government of Delta State.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap two-col">
          <div className="about-body">

            <h2>Born in Oporoza, Gbaramatu Kingdom</h2>

            <img
  src="/images/BarrKingsley.png"
  alt="Barr. Kingsley Burutu Otuaro"
  className="about-aside__portrait"
/>

            <p>
              Barr. Kingsley Burutu Otuaro was born on 16 April 1968 in Oporoza, Gbaramatu
              Kingdom, Warri South-West Local Government Area of Delta State. His family
              roots extend to Okerenkoko and Obotebe, communities that form part of the
              riverine environment that has remained central to his life and public service.
            </p>

            <p>
              His early working life began outside politics. After secondary school, he
              worked at the Jones Creek Flow Station under SPDC's Northern Swamp Operations,
              and later with the Nigerian Dredging and Marine Company in Warri, where he
              served in the Marine Department. These years gave him an early, practical
              understanding of two realities that remain central to Delta South: the energy
              economy and the waterways through which many of its communities live, work
              and connect.
            </p>

            <h2>Called to the Nigerian Bar in 2005</h2>

            <p>
              Otuaro pursued Law at the then Edo State University, now Ambrose Alli
              University, Ekpoma, where he obtained an LL.B. with honours. He proceeded to
              the Nigerian Law School and was called to the Nigerian Bar in 2005. Law gave
              him a further foundation for public life: an understanding of institutions,
              rights, responsibilities and the structures through which public decisions
              are made.
            </p>

            <h2>A Master's in Peace and Conflict Studies</h2>

            <p>
              Alongside his practical engagement with conflict and community relations,
              Otuaro pursued formal academic training in the field. In 2014, he obtained a
              Master's degree in Peace and Conflict Studies from the University of Ibadan,
              reflecting a field in which he had already accumulated considerable practical
              experience through years of community and stakeholder engagement.
            </p>

            <h2>Deputy Governor of Delta State, 2015&ndash;2023</h2>

            <PlaceholderImage
              ratio="wide"
              className="about-body__image"
              label="DEPUTY GOVERNOR YEARS, 2015–2023"
              note="An approved photograph from the candidate's time in state executive government."
            />

            <p>
              In 2015, Kingsley Burutu Otuaro was elected Deputy Governor of Delta State
              alongside Governor Ifeanyi Okowa. He served two terms, from 29 May 2015 to
              29 May 2023. His eight years in the State Executive gave him sustained
              experience in government, policy, institutional coordination and public
              administration, including significant engagement in peacebuilding and
              community relations through the Peace Advocacy Committee Against Oil
              Facility Vandalism.
            </p>

            <p>
              The journey has taken Otuaro through several levels of public responsibility:
              from community leadership to government, from the riverine environment to the
              institutions that govern it, from conflict resolution to development
              administration, and from local leadership to eight years in the executive
              government of Delta State. He now seeks to bring that experience to the
              Federal level, to represent Delta South in the Senate.
            </p>
          </div>

          <aside className="about-aside">
            <PlaceholderImage
              ratio="portrait"
              className="about-aside__portrait"
              label="CANDIDATE PORTRAIT"
              note="Formal approved portrait for the biography page."
            />

            <StatCard value="16 Apr 1968">
              <p>Born in Oporoza, Gbaramatu Kingdom, Warri South-West LGA, Delta State.</p>
            </StatCard>

            <StatCard value="LL.B, 2005">
              <p>
                Law degree from the then Edo State University (now Ambrose Alli University,
                Ekpoma); called to the Nigerian Bar in 2005.
              </p>
            </StatCard>

            <StatCard value="M.Sc., 2014">
              <p>Peace and Conflict Studies, University of Ibadan.</p>
            </StatCard>

            <StatCard value="2015–2023">
              <p>Deputy Governor of Delta State, under Governor Ifeanyi Okowa.</p>
            </StatCard>
          </aside>
        </div>
      </section>

      <ImageBand
        tone="sand"
        images={[
          {
            label: 'COMMUNITY LEADERSHIP',
            note: 'Early community or FNDIC-era photograph.'
          },
          {
            label: 'LEGAL / PROFESSIONAL LIFE',
            note: 'Called to the Bar, or professional setting.'
          },
          {
            label: 'PEACEBUILDING WORK',
            note: 'Stakeholder or peace committee engagement.'
          }
        ]}
      />

      <section className="section-dark">
        <div className="wrap">
          <h2>"Representation as a responsibility"</h2>

          <p className="lead about-quote__lead">
            "I believe Delta South has reached a point where representation must become
            more purposeful, more strategic and more directly connected to the economic
            future of our people. I am seeking your mandate not simply to occupy a seat in
            the Senate. I am seeking it to build an instrument of purposeful representation
            with fairness, courage and accountability for Delta South."
          </p>

          <p className="about-quote__attrib">
            &mdash; Barr. Kingsley Burutu Otuaro, Esq.
          </p>
        </div>
      </section>

      <SectionCTA
        raised={false}
        title="See the full record of public service"
        to="/record"
        buttonLabel="View track record"
        variant="dark"
      />
    </>
  )
}