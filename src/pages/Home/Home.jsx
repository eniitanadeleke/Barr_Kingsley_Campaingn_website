import { Link } from 'react-router-dom'
import PrimaryAction from '../../components/PrimaryAction/PrimaryAction'
import FullBleed from '../../components/FullBleed/FullBleed'
import Reveal from '../../components/Reveal/Reveal'
import ThemeBlock from '../../components/ThemeBlock/ThemeBlock'
import StatCard from '../../components/StatCard/StatCard'
import LgaList from '../../components/LgaList/LgaList'
import Button from '../../components/Button/Button'
import './Home.css'

export default function Home() {
  return (
    <>
      <PrimaryAction />

      {/* Campaign Hero */}
      <section className="campaign-hero">

        <div className="campaign-hero__left">
          <div className="campaign-hero__content">

            <p className="campaign-hero__meta">
              Peoples Democratic Party (PDP) · Delta South Senatorial District · 2027
            </p>

            <div className="campaign-hero__rule" />

            <h1 className="campaign-hero__title">
              Purposeful
              <span>Representation</span>
            </h1>

            <p className="campaign-hero__lead">
              Building an Economically Viable, Proactive and Prosperous Delta South.
            </p>

            <div className="campaign-hero__buttons">
              <Button variant="primary" to="/plan">
                Read the manifesto
              </Button>

              <Button variant="secondary" to="/involved">
                Join the campaign
              </Button>
            </div>

            <div className="campaign-values">
              <div className="campaign-value">
                <span className="campaign-value__number">01</span>
                <span className="campaign-value__text">People First</span>
              </div>

              <div className="campaign-value">
                <span className="campaign-value__number">02</span>
                <span className="campaign-value__text">Economic Opportunity</span>
              </div>

              <div className="campaign-value">
                <span className="campaign-value__number">03</span>
                <span className="campaign-value__text">Safer Communities</span>
              </div>

              <div className="campaign-value">
                <span className="campaign-value__number">04</span>
                <span className="campaign-value__text">A Prosperous Delta South</span>
              </div>
            </div>

            <div className="campaign-hero__signature">
              <span className="campaign-hero__signature-line" />
              <span>Power to the People</span>
            </div>

          </div>
        </div>

        <div className="campaign-hero__right">

          <div className="campaign-hero__glow" />

          <div className="campaign-hero__poster">
            <img
              src="/images/Manifesto_Front_Page_Full.png"
              alt="Barr. Kingsley Burutu Otuaro manifesto for Delta South Senatorial District"
            />
          </div>

          <div className="campaign-hero__side-copy">
            <span>Our People</span>
            <span>Our Resources</span>
            <span>Our Future</span>
          </div>

          <div className="campaign-hero__accent campaign-hero__accent--one" />
          <div className="campaign-hero__accent campaign-hero__accent--two" />

        </div>

        <div className="campaign-hero__bottom-shape" />
      </section>

      {/* Vision Quote */}
      <section className="vision-quote">

        <div className="vision-quote__landscape" />

        <div className="vision-quote__shade" />

        <div className="vision-quote__inner">

          <div className="vision-quote__content">

            <p className="vision-quote__kicker">
              A word to the people of Delta South
            </p>

            <div className="vision-quote__rule" />

            <span className="vision-quote__mark">“</span>

            <blockquote className="vision-quote__text">
              My vision is simple but ambitious: to help build a Delta South that is
              economically viable, productive, connected, secure and inclusive
              <span> - </span>
              a Delta South in which our people can create wealth, build careers,
              raise families, invest, produce and prosper.
            </blockquote>

            <div className="vision-quote__author">
              <span className="vision-quote__author-line" />
              <p>Barr. Kingsley Burutu Otuaro</p>
            </div>

            <div className="vision-quote__pillars">
              <span>Our People</span>
              <i />
              <span>Our Resources</span>
              <i />
              <span>Our Future</span>
            </div>

            <div className="vision-quote__home">
              <span>Delta South</span>
              <strong>Our Home</strong>
            </div>

          </div>

          <div className="vision-quote__visual">

            <div className="vision-quote__portrait">
              <img
                 src="/images/BarrKingsley.png"
                alt="Barr. Kingsley Burutu Otuaro"
              />
            </div>

            <div className="vision-quote__representation">
              <span>Purposeful Representation</span>
              <i />
            </div>

          </div>

        </div>
      </section>

      {/* Three Commitments */}
      <section className="section">
        <div className="wrap">

          <div className="hthemes__head">
            <p className="kicker">Three commitments</p>

            <h2 className="hthemes__title">
              What this campaign is built on
            </h2>
          </div>

          <Reveal>
            <ThemeBlock
              label="Productivity"
              title="Turning Delta South's resources into value"
              image={{
                label: 'PRODUCTIVITY',
                note: 'Fishing, farming, waterways, or oil and gas activity in the district.'
              }}
            >
              <p>
                Our waterways, farmland, fisheries and oil and gas resources are assets.
                The campaign's commitment is to help our people move from producing raw
                resources to capturing more of the value those resources create. Read the
                full plan for the specific commitments under this theme.
              </p>
            </ThemeBlock>
          </Reveal>

          <Reveal>
            <ThemeBlock
              label="Opportunity"
              title="Opening pathways for young people and women"
              image={{
                label: 'OPPORTUNITY',
                note: 'Young people and women at work, in training, or in enterprise.'
              }}
            >
              <p>
                From entrepreneurship and vocational skills to sports and the creative
                economy, the commitment is to connect Delta South's young people and women
                to real pathways into productive life, not to wait on government jobs alone.
              </p>
            </ThemeBlock>
          </Reveal>

          <Reveal>
            <ThemeBlock
              label="Connectivity"
              title="Linking communities to markets and institutions"
              image={{
                label: 'CONNECTIVITY',
                note: 'Roads, jetties, boats, bridges or market activity across the district.'
              }}
            >
              <p>
                Roads, waterways, electricity and digital connectivity decide whether a
                community can take part in economic life. The commitment is to pursue the
                connectivity projects that unlock the greatest value for Bomadi, Burutu,
                Isoko North, Isoko South, Patani, Warri North, Warri South and Warri South-West.
              </p>
            </ThemeBlock>
          </Reveal>

          <div className="hthemes__action">
            <Button variant="ghost" to="/plan">
              See all six themes and the full plan
            </Button>
          </div>

        </div>
      </section>

      {/* Record */}
      <FullBleed
        height="standard"
        overlay="deep"
        image={{
          label: 'DEPUTY GOVERNOR YEARS, 2015-2023',
          note: 'Photograph from the two terms in state executive government.'
        }}
      >
        <div className="hrecord">

          <div>
            <p className="kicker">
              Eight years in state executive government
            </p>

            <h2 className="hrecord__title">
              Representation must become purposeful
            </h2>

            <Link className="hrecord__link" to="/about">
              Read the full story
            </Link>
          </div>

          <StatCard value="2015–2023">
            <p>
              Eight years serving as Deputy Governor of Delta State, alongside sustained
              community leadership across Gbaramatu Kingdom and the wider Niger Delta
              before that.
            </p>
          </StatCard>

        </div>
      </FullBleed>

      {/* District */}
      <section className="section-dark hdistrict">
        <div className="wrap">

          <Reveal>
            <p className="kicker">
              Every community, one conversation
            </p>

            <h2 className="hdistrict__title">
              Representing all of Delta South
            </h2>

            <p className="lead measure">
              Delta South is eight local government areas with different realities. This
              campaign's representation is built district-wide, not around one city, one
              ethnic group or one network.
            </p>
          </Reveal>

        </div>

        <div className="hdistrict__grid">
          <LgaList withImages />
        </div>
      </section>

      {/* Closing */}
      <FullBleed
        height="band"
        align="center"
        overlay="deep"
        image={{
          label: 'VOLUNTEERS OR SUPPORTERS',
          note: 'Campaign volunteers, ward organisers or a community gathering.'
        }}
      >
        <h2 className="hclose__title">
          Join a campaign for purposeful representation
        </h2>

        <p className="lead hclose__lead">
          Volunteer your time, join as a ward organiser, or share the campaign's message
          with your community.
        </p>

        <Button variant="primary" to="/involved">
          Get involved
        </Button>
      </FullBleed>
    </>
  )
}