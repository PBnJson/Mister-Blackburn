import React from 'react';
import Link from 'next/link';
import {Instagram,Facebook,Mail} from 'lucide-react';
import {Divider} from './ds/core.jsx';

const cols=[
  {title:'Services',links:[['Weddings','/services'],['Corporate','/services'],['Private parties','/services']]},
  {title:'Explore',links:[['Sample menus','/menus'],['Pricing','/services'],['Service area','/contact#service-area'],['Contact','/contact']]}
];
const social=[[Instagram,'Instagram'],[Facebook,'Facebook'],[Mail,'Email']];
const eyebrow={font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--smoke-400)'};

export function Footer(){
  return <footer className="footer">
    <div className="footer-grid">
      <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
        <span style={{fontFamily:'var(--font-display)',fontSize:'1.75rem',fontWeight:500,letterSpacing:'.06em',color:'var(--cream-50)'}}>D&T</span>
        <span style={{font:'var(--type-eyebrow)',letterSpacing:'.24em',textTransform:'uppercase',color:'var(--rose-300)'}}>Mobile Bartending</span>
        <p style={{font:'var(--type-body-s)',maxWidth:'32ch',marginTop:'8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
      </div>
      <div className="footer-cols">
        {cols.map(c=><div key={c.title} style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          <span style={eyebrow}>{c.title}</span>
          {c.links.map(([label,href])=><Link key={label} href={href} style={{font:'var(--type-body-s)',color:'var(--text-on-inverse)',textDecoration:'none',border:0}}>{label}</Link>)}
        </div>)}
        <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          <span style={eyebrow}>Contact</span>
          <span style={{font:'var(--type-body-s)',color:'var(--text-on-inverse)'}}>hello@dtbartending.com</span>
          <span style={{font:'var(--type-body-s)',color:'var(--text-on-inverse)'}}>(555) 014-2280</span>
          <div style={{display:'flex',gap:'12px',marginTop:'6px'}}>
            {social.map(([Icon,label])=><a key={label} href="#" aria-label={label} style={{color:'var(--cream-50)',border:0}}><Icon size={18} strokeWidth={1.5}/></a>)}
          </div>
        </div>
      </div>
    </div>
    <div style={{maxWidth:'var(--container)',margin:'var(--space-8) auto 0'}}>
      <Divider tone="inverse"/>
      <div className="footer-legal">
        <span>© 2026 D&T Mobile Bartending</span><span>Licensed &amp; insured · TABC certified</span>
      </div>
    </div>
  </footer>;
}
