import Link from 'next/link';
import Image from 'next/image';
import {Button} from '../components/ds/Button.jsx';
import {Card} from '../components/ds/Card.jsx';
import {Eyebrow,SectionHeading,Divider,StatBlock,DrinkMenuItem,Testimonial,Photo} from '../components/ds/core.jsx';
import {Reveal,RevealStagger} from '../components/Reveal.jsx';
import {GalleryStack} from '../components/GalleryStack.jsx';
import {menu} from '../lib/data.js';

const services=[
  ['Weddings','A signature cocktail for each of you, a toast pour timed to the minute.'],
  ['Corporate','Polished service that keeps the conversation moving, not the line.'],
  ['Private parties','Backyards, lofts, galleries — we build a bar anywhere.']
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
        <Eyebrow tone="inverse">Craft cocktails, wherever you celebrate</Eyebrow>
        <span className="hero-rule" aria-hidden="true"/>
        <h1 style={{font:'var(--type-display-xl)',letterSpacing:'var(--tracking-display)',color:'var(--cream-50)',maxWidth:'14ch',margin:0}}>The bar comes to you.</h1>
        <p style={{font:'var(--type-lead)',color:'var(--text-on-inverse-muted)',maxWidth:'52ch'}}>Custom drink menus designed around your night, poured by professional, certified bartenders. Weddings, corporate events, and every celebration in between.</p>
        <div className="hero-actions">
          <Button variant="secondary" size="lg" href="/contact">Request a quote</Button>
          <Button variant="inverse-outline" size="lg" href="/menus">View sample menus</Button>
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
        <SectionHeading eyebrow="What we do" title="Every detail behind the bar, handled" lede="We arrive with everything but the guests — the bar, the ice, the glassware, and a menu written for the two of you."/>
      </Reveal>
      <RevealStagger className="grid-3" style={{marginTop:'var(--space-8)'}} delayStep={85}>
        {services.map(([t,d])=>
        <Card key={t} interactive padding="var(--space-7)"><div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          <h3 style={{font:'var(--type-title)',margin:0}}>{t}</h3>
          <p style={{font:'var(--type-body-s)',color:'var(--text-muted)'}}>{d}</p>
          <Link href="/services" style={{font:'500 12px/1 var(--font-sans)',letterSpacing:'var(--tracking-button)',textTransform:'uppercase',alignSelf:'flex-start',marginTop:'6px'}}>Explore →</Link>
        </div></Card>)}
      </RevealStagger>
    </div></section>

    <section style={{background:'var(--surface-inverse)',padding:'var(--section-y) var(--gutter)'}}>
      <div className="inner split">
        <Reveal variant="left">
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
            <SectionHeading tone="inverse" eyebrow="Tonight's board" title="A menu written for your night" lede="Three signatures, two classics, one thing nobody expected. Tell us the story; we'll put it in a glass."/>
            <Button variant="inverse-outline" style={{alignSelf:'flex-start'}} href="/menus">See full sample menu</Button>
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
            <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--rose-300)'}}>Bottle concierge</span>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'var(--size-display-s)',lineHeight:1.15,margin:0,color:'var(--text-on-inverse)'}}>Skip the store run.</h2>
            <p style={{font:'var(--type-body)',color:'var(--text-on-inverse-muted)'}}>In Texas, you purchase the alcohol and we pour it — and we&rsquo;ll even make that part easy. Purchase your order and for a flat delivery charge we&rsquo;ll pick it up, keep it cold, and have every bottle stocked behind the bar before your first guest arrives.</p>
          </div>
          <div className="hero-actions" style={{flexWrap:'wrap',flex:'0 0 auto'}}>
            <Button variant="secondary" size="lg" href="/contact">Contact us for details</Button>
            <Button variant="inverse-outline" size="lg" href="/services">See how it works</Button>
          </div>
        </div>
      </Reveal>
    </div></section>

    <section className="section gallery-section" style={{paddingTop:0,paddingBottom:0}}>
      <div className="inner">
        <Reveal>
          <SectionHeading align="center" eyebrow="From recent nights" title="Behind the bar"/>
        </Reveal>
      </div>
      <GalleryStack/>
    </section>

    <section className="section"><div className="inner-narrow">
      <Reveal variant="fade">
        <Testimonial quote="They designed a menu around our first date — our guests are still talking about the smoked old fashioned." author="Maya & Ellis" detail="Wedding · The Loom, 140 guests"/>
      </Reveal>
    </div></section>

    <section className="section" style={{paddingTop:0}}><div className="inner">
      <Reveal>
        <div className="cta-band">
          <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
            <h2 style={{font:'var(--type-display-m)',margin:0}}>Your date is waiting.</h2>
            <p style={{font:'var(--type-body)',color:'var(--ink-600)'}}>Tell us about the night — quotes within one business day.</p>
          </div>
          <Button size="lg" className="cta-btn" href="/contact">Check availability</Button>
        </div>
      </Reveal>
    </div></section>
  </main>;
}
