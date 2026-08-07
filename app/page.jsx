import Link from 'next/link';
import Image from 'next/image';
import {Button} from '../components/ds/Button.jsx';
import {Card} from '../components/ds/Card.jsx';
import {Eyebrow,SectionHeading,Divider,StatBlock,DrinkMenuItem,Testimonial,Photo} from '../components/ds/core.jsx';
import {Reveal,RevealStagger} from '../components/Reveal.jsx';
import {GalleryStack} from '../components/GalleryStack.jsx';
import {menu} from '../lib/data.js';

const services=[
  ['Lorem ipsum','Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'],
  ['Amet consectetur','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'],
  ['Adipiscing elit','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.']
];

/* Placeholder hero — swap for a real D&T pour/event shot when ready.
   Full-bleed fills the mobile “dead space” as atmosphere, not a card. */
const heroImage={
  src:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80',
  alt:'Craft cocktails on a dark bar top'
};

export default function HomePage(){
  return <main>
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={heroImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media__img"
        />
      </div>
      <div className="hero-tint" aria-hidden="true"/>
      <div className="hero-scrim" aria-hidden="true"/>
      <div className="hero-inner">
        <Eyebrow tone="inverse">Lorem ipsum dolor sit amet</Eyebrow>
        <span className="hero-rule" aria-hidden="true"/>
        <h1 style={{font:'var(--type-display-xl)',letterSpacing:'var(--tracking-display)',color:'var(--cream-50)',maxWidth:'14ch',margin:0}}>Lorem ipsum dolor sit.</h1>
        <p style={{font:'var(--type-lead)',color:'var(--text-on-inverse-muted)',maxWidth:'52ch'}}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        <div className="hero-actions">
          <Button variant="secondary" size="lg" href="/contact">Lorem ipsum</Button>
          <Button variant="inverse-outline" size="lg" href="/menus">Dolor sit amet</Button>
        </div>
      </div>
    </section>

    <section className="section" style={{paddingTop:'var(--space-8)',paddingBottom:'var(--space-8)'}}>
      <RevealStagger className="inner stats" delayStep={70} variant="scale">
        <StatBlock value="450+" label="Events poured"/>
        <StatBlock value="12" label="Years behind the bar"/>
        <StatBlock value="100%" label="Licensed & insured"/>
        <StatBlock value="48 hr" label="Quote turnaround"/>
      </RevealStagger>
    </section>
    <Divider style={{maxWidth:'var(--container)',margin:'0 auto'}}/>

    <section className="section"><div className="inner">
      <Reveal>
        <SectionHeading eyebrow="Lorem ipsum" title="Dolor sit amet consectetur adipiscing" lede="Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud."/>
      </Reveal>
      <RevealStagger className="grid-3" style={{marginTop:'var(--space-8)'}} delayStep={85}>
        {services.map(([t,d])=>
        <Card key={t} interactive padding="var(--space-7)"><div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          <h3 style={{font:'var(--type-title)',margin:0}}>{t}</h3>
          <p style={{font:'var(--type-body-s)',color:'var(--text-muted)'}}>{d}</p>
          <Link href="/services" style={{font:'500 12px/1 var(--font-sans)',letterSpacing:'var(--tracking-button)',textTransform:'uppercase',alignSelf:'flex-start',marginTop:'6px'}}>Lorem →</Link>
        </div></Card>)}
      </RevealStagger>
    </div></section>

    <section style={{background:'var(--surface-inverse)',padding:'var(--section-y) var(--gutter)'}}>
      <div className="inner split">
        <Reveal variant="left">
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
            <SectionHeading tone="inverse" eyebrow="Lorem ipsum" title="Dolor sit amet consectetur" lede="Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Button variant="inverse-outline" style={{alignSelf:'flex-start'}} href="/menus">Lorem ipsum dolor</Button>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <div>{menu.sig.map(d=><DrinkMenuItem key={d.name} tone="inverse" {...d}/>)}</div>
        </Reveal>
      </div>
    </section>

    <section className="section"><div className="inner founders">
      <div className="founders-photos">
        <Reveal variant="photo" delay={0}><Photo label="Founder photo 1" radius="var(--radius-2)"/></Reveal>
        <Reveal variant="photo" delay={120}><Photo label="Founder photo 2" radius="var(--radius-2)"/></Reveal>
      </div>
      <Reveal delay={80}>
        <div className="founders-text">
          <SectionHeading eyebrow="Women-owned & operated" title="The D and the T" lede="[Your Buiness Name] was built by two best friends who met in high school. They have been serving drinks and making memories for year."/>
          <p style={{font:'var(--type-body-s)',color:'var(--text-muted)',maxWidth:'48ch',margin:0}}>
            Contact them today and let them help you take your event to the next level.
          </p>
          <Button variant="ghost" style={{alignSelf:'flex-start',paddingLeft:0,paddingRight:0}} href="/contact">Say hello →</Button>
        </div>
      </Reveal>
    </div></section>

    <section className="section" style={{paddingTop:0}}><div className="inner">
      <Reveal>
        <div className="cta-band" style={{background:'var(--surface-inverse)'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'10px',maxWidth:'58ch'}}>
            <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--rose-300)'}}>Lorem ipsum</span>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'var(--size-display-s)',lineHeight:1.15,margin:0,color:'var(--text-on-inverse)'}}>Dolor sit amet.</h2>
            <p style={{font:'var(--type-body)',color:'var(--text-on-inverse-muted)'}}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="hero-actions" style={{flexWrap:'wrap',flex:'0 0 auto'}}>
            <Button variant="secondary" size="lg" href="/contact">Lorem ipsum</Button>
            <Button variant="inverse-outline" size="lg" href="/services">Dolor sit amet</Button>
          </div>
        </div>
      </Reveal>
    </div></section>

    <section className="section gallery-section" style={{paddingTop:0,paddingBottom:0}}>
      <div className="inner">
        <Reveal>
          <SectionHeading align="center" eyebrow="Lorem ipsum" title="Dolor sit amet"/>
        </Reveal>
      </div>
      <GalleryStack/>
    </section>

    <section className="section"><div className="inner-narrow">
      <Reveal variant="fade">
        <Testimonial quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." author="Lorem & Ipsum" detail="Dolor · Sit amet, 140 guests"/>
      </Reveal>
    </div></section>

    <section className="section" style={{paddingTop:0}}><div className="inner">
      <Reveal>
        <div className="cta-band">
          <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
            <h2 style={{font:'var(--type-display-m)',margin:0}}>Lorem ipsum dolor.</h2>
            <p style={{font:'var(--type-body)',color:'var(--ink-600)'}}>Sit amet consectetur adipiscing elit sed do eiusmod.</p>
          </div>
          <Button size="lg" className="cta-btn" href="/contact">Lorem ipsum</Button>
        </div>
      </Reveal>
    </div></section>
  </main>;
}
