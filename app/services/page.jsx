import {SectionHeading,Divider} from '../../components/ds/core.jsx';
import {Button} from '../../components/ds/Button.jsx';
import {Card} from '../../components/ds/Card.jsx';
import {PackageCard} from '../../components/ds/PackageCard.jsx';
import {Checkbox} from '../../components/ds/forms.jsx';
import {Reveal,RevealStagger} from '../../components/Reveal.jsx';
import {packages} from '../../lib/data.js';

export const metadata={title:'Services & Pricing — D&T Mobile Bartending'};

const steps=[
  ['Tell us about the night','Request a quote with your date, guest count, and the drinks you love. We reply within one business day.'],
  ['We write the menu — and the shopping list','A custom menu for your event, plus an exact bottle-by-bottle shopping list for your guest count. No guesswork, no overbuying.'],
  ['You purchase the alcohol','Buy it anywhere you like — it’s yours from the first bottle to the last, including anything left at the end of the night.'],
  ['We bring the bar & pour','TABC-certified bartenders arrive with the bar, mixers, ice, garnish, and tools. You host; we handle the rest.']
];

const rules=[
  ['You buy it, you own it','By Texas law (TABC), a mobile bar can’t sell alcohol — so you purchase it directly, and every leftover bottle goes home with you.'],
  ['Our pricing covers service only','Your per-guest rate pays for bartenders, the bar, mixers, ice, and equipment — never the alcohol itself.'],
  ['Private events only','We pour at private, invitation-only gatherings — weddings, corporate parties, celebrations at homes and venues.'],
  ['Served responsibly','Every bartender is TABC-certified. We check IDs, never serve minors, and know when to slow a pour.']
];

const addons=[
  ['Bottle pickup & delivery','You buy it — we haul it, chill it, stock it'],
  ['Glassware rental','Coupes, rocks, highballs'],
  ['Champagne toast','Poured and passed'],
  ['Smoked cocktail station','Live torched oak'],
  ['Zero-proof program','Full mocktail menu'],
  ['Bar-back service','Restock, ice, polish'],
  ['Late-night espresso martinis','The 10pm revival']
];

export default function ServicesPage(){
  return <main className="page" style={{padding:'calc(var(--nav-h) + var(--space-8)) var(--gutter) var(--section-y)'}}>
    <div className="inner" style={{display:'flex',flexDirection:'column',gap:'var(--space-9)'}}>
      <Reveal>
        <SectionHeading align="center" eyebrow="Services & pricing" title="Three ways to pour" lede="Every package includes licensed, TABC-certified bartenders and a menu consultation. Pricing is per guest for four-hour service — alcohol isn’t included or sold by us; see how it works below."/>
      </Reveal>
      <RevealStagger className="packages" delayStep={110}>
        {packages.map(p=><PackageCard key={p.name} {...p} ctaHref="/contact"/>)}
      </RevealStagger>
      <Divider ornament/>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
        <Reveal>
          <SectionHeading align="center" eyebrow="How it works" title="You bring the bottles, we bring the bar" lede="Texas law doesn’t allow a mobile bar to sell alcohol — you purchase it, you own it, and anything left over stays with you. Our packages cover everything else. Here’s how a booking goes."/>
        </Reveal>
        <RevealStagger className="steps" delayStep={100}>
          {steps.map(([t,d],i)=><div key={t} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <span style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'2.25rem',lineHeight:1,color:'var(--rose-500)'}}>{String(i+1).padStart(2,'0')}</span>
            <h3 style={{font:'var(--type-title)',margin:0}}>{t}</h3>
            <p style={{font:'var(--type-body-s)',color:'var(--text-muted)'}}>{d}</p>
          </div>)}
        </RevealStagger>
        <div className="cta-band" style={{background:'var(--surface-inverse)'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'10px',maxWidth:'58ch'}}>
            <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--rose-300)'}}>Bottle concierge</span>
            <h3 style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'var(--size-display-s)',lineHeight:1.15,margin:0,color:'var(--text-on-inverse)'}}>Skip the store run.</h3>
            <p style={{font:'var(--type-body)',color:'var(--text-on-inverse-muted)'}}>Your shopping list, handled. Purchase your order and for a flat delivery charge we&rsquo;ll pick it up, keep it cold, and have every bottle stocked behind the bar before your first guest arrives.</p>
          </div>
          <Button variant="inverse-outline" size="lg" className="cta-btn" href="/contact">Add pickup to my quote</Button>
        </div>
        <Card variant="accent" padding="var(--space-7)">
          <div className="rules">
            <SectionHeading eyebrow="The ground rules" title="What Texas law means for your event" lede="A few things the TABC requires of every mobile bar — worth knowing before you book anyone."/>
            <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
              {rules.map(([t,d])=><li key={t} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                <span style={{width:'6px',height:'6px',transform:'rotate(45deg)',background:'var(--rose-600)',flex:'0 0 auto',marginTop:'9px'}}/>
                <span style={{display:'flex',flexDirection:'column',gap:'2px'}}>
                  <span style={{font:'var(--weight-body-strong) var(--size-body)/var(--leading-tight) var(--font-sans)',color:'var(--text-display)'}}>{t}</span>
                  <span style={{font:'var(--type-body-s)',color:'var(--ink-600)'}}>{d}</span>
                </span>
              </li>)}
            </ul>
          </div>
        </Card>
      </div>
      <Divider ornament/>
      <div className="addons">
        <SectionHeading eyebrow="Add-ons" title="Make it yours" lede="Layer any of these onto a package when you request your quote."/>
        <Card padding="var(--space-6)"><div className="addons-grid">
          {addons.map(([label,description])=><Checkbox key={label} label={label} description={description}/>)}
        </div></Card>
      </div>
    </div>
  </main>;
}
