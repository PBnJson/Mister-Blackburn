'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu,X} from 'lucide-react';
import {Button} from './ds/Button.jsx';
import {IconButton} from './ds/overlays.jsx';
import {links} from '../lib/data.js';

export function NavBar(){
  const pathname=usePathname();
  const home=pathname==='/';
  const[scrolled,setScrolled]=React.useState(false);
  const[open,setOpen]=React.useState(false);
  React.useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>24);
    h();window.addEventListener('scroll',h);
    return()=>window.removeEventListener('scroll',h);
  },[]);
  React.useEffect(()=>{setOpen(false)},[pathname]);
  React.useEffect(()=>{
    document.documentElement.style.overflow=open?'hidden':'';
    return()=>{document.documentElement.style.overflow=''};
  },[open]);

  const solid=!home||scrolled;
  const inv=home;
  const fg=inv?'var(--cream-50)':'var(--ink-900)';
  const cls='nav '+(solid?(inv?'nav--solid-dark':'nav--solid-light'):'');

  return <>
    <header className={cls}>
      <Link href="/" style={{display:'flex',flexDirection:'column',gap:'2px',border:0,textDecoration:'none'}}>
        <span style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:500,letterSpacing:'.06em',color:fg,lineHeight:1}}>D&T</span>
        <span style={{font:'var(--type-eyebrow)',letterSpacing:'.24em',textTransform:'uppercase',color:inv?'var(--rose-300)':'var(--rose-600)'}}>Mobile Bartending</span>
      </Link>
      <nav className="nav-links" aria-label="Primary">
        {links.map(l=><Link key={l.href} href={l.href}
          style={{font:'400 12px/1 var(--font-sans)',letterSpacing:'var(--tracking-button)',textTransform:'uppercase',
          color:pathname===l.href?(inv?'var(--rose-300)':'var(--rose-600)'):fg,textDecoration:'none',
          borderBottom:'1px solid '+(pathname===l.href?'currentColor':'transparent'),paddingBottom:'4px',transition:'var(--transition-control)'}}>{l.label}</Link>)}
        <Button size="sm" variant={inv?'inverse-outline':'outline'} href="/contact">Request a quote</Button>
      </nav>
      <span className="nav-burger">
        <IconButton icon={<Menu size={20} strokeWidth={1.5}/>} label="Open menu" variant={inv?'inverse':'ghost'} onClick={()=>setOpen(true)} style={{color:fg}}/>
      </span>
    </header>
    {open&&<div className="nav-menu" role="dialog" aria-modal="true" aria-label="Menu">
      <div style={{height:'var(--nav-h)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{display:'flex',flexDirection:'column',gap:'2px'}}>
          <span style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:500,letterSpacing:'.06em',color:'var(--cream-50)',lineHeight:1}}>D&T</span>
          <span style={{font:'var(--type-eyebrow)',letterSpacing:'.24em',textTransform:'uppercase',color:'var(--rose-300)'}}>Mobile Bartending</span>
        </span>
        <IconButton icon={<X size={20} strokeWidth={1.5}/>} label="Close menu" variant="inverse" onClick={()=>setOpen(false)}/>
      </div>
      <nav className="nav-menu-links" aria-label="Mobile">
        {links.map(l=><Link key={l.href} href={l.href} className="nav-menu-link" data-active={pathname===l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}
      </nav>
      <Button variant="secondary" size="lg" fullWidth href="/contact" onClick={()=>setOpen(false)}>Request a quote</Button>
    </div>}
  </>;
}
