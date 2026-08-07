import {SectionHeading,Badge} from '../../components/ds/core.jsx';
import {ServiceAreaMap} from '../../components/ServiceAreaMap.jsx';
import {Reveal} from '../../components/Reveal.jsx';
import {ContactForm} from './ContactForm.jsx';

export const metadata={
  title:'Contact & Service Area | D&T Mobile Bartending — Mesquite, TX',
  description:'Request a quote for mobile bartending within 40 miles of Mesquite, TX. Serving Dallas, Garland, Rockwall, Forney, Plano, Arlington, and the greater DFW metro.'
};

const serviceCities=[
  'Dallas','Garland','Rowlett','Sunnyvale','Balch Springs','Forney','Seagoville',
  'Rockwall','Plano','Richardson','Arlington','Irving','Grand Prairie','Hutchins','Lancaster'
];

const jsonLd={
  '@context':'https://schema.org',
  '@type':'LocalBusiness',
  name:'D&T Mobile Bartending',
  description:'Mobile bartending for weddings, corporate events, and private parties within 40 miles of Mesquite, Texas.',
  url:'https://dtbartending.com/contact',
  email:'hello@dtbartending.com',
  telephone:'+1-555-014-2280',
  address:{
    '@type':'PostalAddress',
    addressLocality:'Mesquite',
    addressRegion:'TX',
    addressCountry:'US'
  },
  geo:{
    '@type':'GeoCoordinates',
    latitude:32.7668,
    longitude:-96.5992
  },
  areaServed:{
    '@type':'GeoCircle',
    geoMidpoint:{
      '@type':'GeoCoordinates',
      latitude:32.7668,
      longitude:-96.5992
    },
    geoRadius:String(Math.round(40*1609.344))
  },
  openingHoursSpecification:{
    '@type':'OpeningHoursSpecification',
    dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens:'09:00',
    closes:'21:00'
  }
};

export default function ContactPage(){
  return <main className="page" style={{padding:'calc(var(--nav-h) + var(--space-8)) var(--gutter) var(--section-y)'}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <div className="inner contact">
      <Reveal>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
          <SectionHeading eyebrow="Check availability" title="Tell us about the night" lede="We reply within one business day with a draft menu and a quote — no deposit until you love it."/>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
            <Badge status="licensed">TABC certified</Badge>
            <Badge status="info">Licensed &amp; insured</Badge>
          </div>
          <div style={{font:'var(--type-body-s)',color:'var(--text-muted)',display:'flex',flexDirection:'column',gap:'6px'}}>
            <span>hello@dtbartending.com</span>
            <span>(555) 014-2280</span>
            <span>Based in Mesquite, TX · 40-mile service radius</span>
          </div>
        </div>
      </Reveal>
      <Reveal delay={120} variant="right">
        <ContactForm/>
      </Reveal>
    </div>

    <section id="service-area" className="inner service-area" aria-labelledby="service-area-heading">
      <Reveal>
        <SectionHeading
          id="service-area-heading"
          align="center"
          eyebrow="Where we pour"
          title="Mobile bartending within 40 miles of Mesquite, TX"
          lede="We bring a full craft bar to venues across the greater Dallas–Fort Worth metro. If your event is inside the circle below, we can be there."
        />
      </Reveal>
      <Reveal delay={100} variant="scale">
        <ServiceAreaMap/>
      </Reveal>
      <Reveal delay={160} variant="fade">
        <div className="service-area-copy">
          <p>
            D&amp;T Mobile Bartending is based in <strong>Mesquite, Texas</strong> and serves events within a{' '}
            <strong>40-mile radius</strong> — including weddings, corporate gatherings, and private parties throughout DFW.
          </p>
          <p>
            Common service cities include{' '}
            {serviceCities.map((city,i)=><span key={city}>{city}{i<serviceCities.length-1?', ':''}</span>)}
            , and surrounding communities. Not sure if your venue is in range? Request a quote and we&apos;ll confirm.
          </p>
        </div>
      </Reveal>
    </section>
  </main>;
}
