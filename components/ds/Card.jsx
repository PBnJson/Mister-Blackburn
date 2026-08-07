'use client';
import React from 'react';

function useHover(){const[h,s]=React.useState(false);return[h,{onMouseEnter:()=>s(true),onMouseLeave:()=>s(false)}]}

export function Card({variant='default',interactive=false,padding='var(--space-7)',children,style,...rest}){
  const[hov,bind]=useHover();
  const skins={default:{bg:'var(--surface-card)',bd:'var(--line-hairline)',fg:'var(--text-body)'},
    sunken:{bg:'var(--surface-sunken)',bd:'transparent',fg:'var(--text-body)'},
    inverse:{bg:'var(--surface-inverse)',bd:'var(--line-inverse)',fg:'var(--text-on-inverse-muted)'},
    accent:{bg:'var(--surface-accent)',bd:'transparent',fg:'var(--ink-700)'},
    outline:{bg:'transparent',bd:'var(--line-hairline)',fg:'var(--text-body)'}};
  const k=skins[variant]||skins.default;
  return <div {...(interactive?bind:{})} style={{background:k.bg,color:k.fg,border:'1px solid '+k.bd,borderRadius:'var(--radius-2)',padding,
    boxShadow:interactive&&hov?'var(--shadow-2)':'var(--shadow-none)',transform:interactive&&hov?'var(--lift-hover)':'none',
    transition:'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',...style}} {...rest}>{children}</div>;
}
