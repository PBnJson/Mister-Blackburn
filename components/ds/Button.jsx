'use client';
import React from 'react';
import Link from 'next/link';

function useHover(){const[h,s]=React.useState(false);return[h,{onMouseEnter:()=>s(true),onMouseLeave:()=>s(false)}]}
const SIZES={sm:{h:'var(--control-h-s)',px:'18px',fs:'11px'},md:{h:'var(--control-h-m)',px:'26px',fs:'12px'},lg:{h:'var(--control-h-l)',px:'34px',fs:'13px'}};

export function Button({variant='primary',size='md',href,disabled=false,fullWidth=false,children,onClick,style,className,...rest}){
  const[hov,bind]=useHover();const[down,setDown]=React.useState(false);const s=SIZES[size]||SIZES.md;
  const skins={
    primary:{bg:hov?'var(--action-primary-hover)':'var(--action-primary)',fg:'var(--cream-50)',bd:'transparent'},
    secondary:{bg:hov?'var(--action-secondary-hover)':'var(--action-secondary)',fg:'var(--ink-900)',bd:'transparent'},
    outline:{bg:hov?'rgba(18,16,14,.05)':'transparent',fg:'var(--ink-900)',bd:'var(--line-strong)'},
    ghost:{bg:'transparent',fg:hov?'var(--text-accent)':'var(--ink-900)',bd:'transparent'},
    inverse:{bg:hov?'var(--bone-100)':'var(--cream-50)',fg:'var(--ink-900)',bd:'transparent'},
    'inverse-outline':{bg:hov?'rgba(250,247,241,.10)':'transparent',fg:'var(--cream-50)',bd:'var(--line-inverse)'}
  };
  const k=skins[variant]||skins.primary;
  const css={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'10px',height:s.h,padding:'0 '+s.px,width:fullWidth?'100%':undefined,
    background:k.bg,color:k.fg,border:'1px solid '+k.bd,borderRadius:'var(--radius-1)',
    font:'500 '+s.fs+'/1 var(--font-sans)',letterSpacing:'var(--tracking-button)',textTransform:'uppercase',
    cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,textDecoration:'none',whiteSpace:'nowrap',
    transform:down&&!disabled?'scale(var(--press-scale))':'none',transition:'var(--transition-control),transform var(--dur-instant) var(--ease-standard)',...style};
  const shared={onMouseDown:()=>setDown(true),onMouseUp:()=>setDown(false),...bind,style:css,className,...rest};
  if(href)return <Link href={href} onClick={onClick} {...shared}>{children}</Link>;
  return <button onClick={disabled?undefined:onClick} disabled={disabled} {...shared}>{children}</button>;
}
