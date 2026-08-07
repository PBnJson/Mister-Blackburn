'use client';
import React from 'react';
import {Button} from './Button.jsx';
import {Tag} from './core.jsx';

function useHover(){const[h,s]=React.useState(false);return[h,{onMouseEnter:()=>s(true),onMouseLeave:()=>s(false)}]}

export function PackageCard({name,price,unit='per guest',summary,includes=[],featured=false,ctaLabel='Request this package',ctaHref,onSelect,style}){
  const[hov,bind]=useHover();
  return <div {...bind} style={{display:'flex',flexDirection:'column',gap:'var(--space-6)',padding:'var(--space-7)',
    background:featured?'var(--surface-inverse)':'var(--surface-card)',color:featured?'var(--text-on-inverse-muted)':'var(--text-body)',
    border:'1px solid '+(featured?'var(--line-inverse)':'var(--line-hairline)'),borderRadius:'var(--radius-2)',
    boxShadow:hov?'var(--shadow-2)':'none',transform:hov?'var(--lift-hover)':'none',
    transition:'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',...style}}>
    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
      {featured&&<Tag tone="rose" style={{alignSelf:'flex-start'}}>Most requested</Tag>}
      <span style={{fontFamily:'var(--font-display)',fontWeight:300,fontSize:'2rem',lineHeight:1.1,color:featured?'var(--text-on-inverse)':'var(--text-display)'}}>{name}</span>
      {summary&&<span style={{font:'var(--type-body-s)'}}>{summary}</span>}
    </div>
    <div style={{display:'flex',alignItems:'baseline',gap:'8px',paddingBottom:'var(--space-5)',borderBottom:'1px solid '+(featured?'var(--line-inverse)':'var(--line-hairline)')}}>
      <span style={{fontFamily:'var(--font-display)',fontSize:'2.25rem',fontWeight:400,color:featured?'var(--rose-300)':'var(--rose-600)'}}>{price}</span>
      <span style={{font:'var(--type-caption)',letterSpacing:'.1em',textTransform:'uppercase',color:featured?'var(--text-on-inverse-muted)':'var(--text-subtle)'}}>{unit}</span>
    </div>
    <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:'10px',flex:1}}>
      {includes.map(i=><li key={i} style={{display:'flex',gap:'10px',font:'var(--type-body-s)'}}>
        <span style={{color:'var(--rose-500)',flex:'0 0 auto'}}>—</span>{i}</li>)}
    </ul>
    <Button variant={featured?'inverse':'outline'} fullWidth href={ctaHref} onClick={onSelect}>{ctaLabel}</Button>
  </div>;
}
