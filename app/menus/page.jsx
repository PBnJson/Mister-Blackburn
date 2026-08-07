'use client';
import React from 'react';
import {SectionHeading,Divider,DrinkMenuItem} from '../../components/ds/core.jsx';
import {Tabs} from '../../components/ds/overlays.jsx';
import {Button} from '../../components/ds/Button.jsx';
import {Reveal} from '../../components/Reveal.jsx';
import {menu} from '../../lib/data.js';

export default function MenusPage(){
  const[cat,setCat]=React.useState('sig');
  const items=menu[cat];
  return <main className="page" style={{padding:'calc(var(--nav-h) + var(--space-8)) var(--gutter) var(--section-y)'}}>
    <div className="inner-narrow" style={{display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
      <Reveal>
        <SectionHeading align="center" eyebrow="Lorem ipsum" title="Dolor sit amet" lede="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </Reveal>
      <Reveal delay={120} variant="scale">
        <div className="menu-board">
          <div style={{textAlign:'center',marginBottom:'var(--space-6)'}}>
            <span style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:'1.75rem',letterSpacing:'.06em',color:'var(--cream-50)'}}>D&T</span>
            <div style={{font:'var(--type-eyebrow)',letterSpacing:'.24em',textTransform:'uppercase',color:'var(--rose-300)',marginTop:'4px'}}>Lorem ipsum</div>
          </div>
          <Divider ornament tone="inverse" style={{marginBottom:'var(--space-6)',color:'var(--rose-300)'}}/>
          <Tabs tone="inverse" items={[{id:'sig',label:'Lorem'},{id:'cls',label:'Ipsum'},{id:'zero',label:'Dolor'}]} value={cat} onChange={setCat}/>
          <div style={{marginTop:'var(--space-4)'}}>{items.map(d=><DrinkMenuItem key={d.name} tone="inverse" {...d}/>)}</div>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <div style={{textAlign:'center'}}><Button variant="secondary" size="lg" href="/contact">Lorem ipsum</Button></div>
      </Reveal>
    </div>
  </main>;
}
