import {SectionHeading,Divider} from '../../components/ds/core.jsx';
import {Button} from '../../components/ds/Button.jsx';
import {Card} from '../../components/ds/Card.jsx';
import {PackageCard} from '../../components/ds/PackageCard.jsx';
import {Checkbox} from '../../components/ds/forms.jsx';
import {Reveal,RevealStagger} from '../../components/Reveal.jsx';
import {packages} from '../../lib/data.js';

export const metadata={title:'Services & Pricing — D&T Mobile Bartending'};

const steps=[
  ['Lorem ipsum dolor','Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
  ['Consectetur adipiscing','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'],
  ['Elit sed do eiusmod','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'],
  ['Tempor incididunt','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.']
];

const rules=[
  ['Lorem ipsum dolor','Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'],
  ['Consectetur adipiscing','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
  ['Elit sed eiusmod','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'],
  ['Tempor incididunt','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.']
];

const addons=[
  ['Lorem ipsum','Dolor sit amet consectetur'],
  ['Adipiscing elit','Sed do eiusmod tempor'],
  ['Incididunt ut','Labore et dolore magna'],
  ['Ut enim ad','Minim veniam quis'],
  ['Nostrud exercitation','Ullamco laboris nisi'],
  ['Duis aute irure','Dolor in reprehenderit'],
  ['Voluptate velit','Esse cillum dolore']
];

export default function ServicesPage(){
  return <main className="page" style={{padding:'calc(var(--nav-h) + var(--space-8)) var(--gutter) var(--section-y)'}}>
    <div className="inner" style={{display:'flex',flexDirection:'column',gap:'var(--space-9)'}}>
      <Reveal>
        <SectionHeading align="center" eyebrow="Lorem ipsum" title="Dolor sit amet" lede="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."/>
      </Reveal>
      <RevealStagger className="packages" delayStep={110}>
        {packages.map(p=><PackageCard key={p.name} {...p} ctaHref="/contact"/>)}
      </RevealStagger>
      <Divider ornament/>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
        <Reveal>
          <SectionHeading align="center" eyebrow="Lorem ipsum" title="Dolor sit amet consectetur" lede="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
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
            <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--rose-300)'}}>Lorem ipsum</span>
            <h3 style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'var(--size-display-s)',lineHeight:1.15,margin:0,color:'var(--text-on-inverse)'}}>Dolor sit amet.</h3>
            <p style={{font:'var(--type-body)',color:'var(--text-on-inverse-muted)'}}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <Button variant="inverse-outline" size="lg" className="cta-btn" href="/contact">Lorem ipsum</Button>
        </div>
        <Card variant="accent" padding="var(--space-7)">
          <div className="rules">
            <SectionHeading eyebrow="Lorem ipsum" title="Dolor sit amet consectetur" lede="Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
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
        <SectionHeading eyebrow="Lorem ipsum" title="Dolor sit amet" lede="Consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
        <Card padding="var(--space-6)"><div className="addons-grid">
          {addons.map(([label,description])=><Checkbox key={label} label={label} description={description}/>)}
        </div></Card>
      </div>
    </div>
  </main>;
}
