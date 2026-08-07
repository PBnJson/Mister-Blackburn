'use client';
import React from 'react';
import {X,Check,Info,TriangleAlert,CircleAlert} from 'lucide-react';

function useHover(){const[h,s]=React.useState(false);return[h,{onMouseEnter:()=>s(true),onMouseLeave:()=>s(false)}]}

export function IconButton({icon,label,size='md',variant='ghost',onClick,style,...rest}){
  const[hov,bind]=useHover();
  const d={sm:32,md:40,lg:48}[size]||40;
  const skins={ghost:{bg:hov?'rgba(18,16,14,.06)':'transparent',fg:'var(--ink-900)',bd:'transparent'},
    outline:{bg:hov?'rgba(18,16,14,.05)':'transparent',fg:'var(--ink-900)',bd:'var(--line-hairline)'},
    inverse:{bg:hov?'rgba(250,247,241,.12)':'transparent',fg:'var(--cream-50)',bd:'transparent'}};
  const k=skins[variant]||skins.ghost;
  return <button aria-label={label} onClick={onClick} {...bind} style={{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',
    background:k.bg,color:k.fg,border:'1px solid '+k.bd,borderRadius:'var(--radius-1)',cursor:'pointer',transition:'var(--transition-control)',...style}} {...rest}>
    {icon}</button>;
}

export function Dialog({open=true,title,description,onClose,footer,width='520px',children,style}){
  if(!open)return null;
  return <div role="dialog" aria-modal="true" style={{position:'fixed',inset:0,zIndex:100,display:'grid',placeItems:'center',padding:'24px',
    background:'var(--surface-overlay)',backdropFilter:'blur(3px)'}} onClick={onClose}>
    <div onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:width,background:'var(--surface-card)',border:'1px solid var(--line-hairline)',
      borderRadius:'var(--radius-2)',boxShadow:'var(--shadow-3)',padding:'var(--space-7)',display:'flex',flexDirection:'column',gap:'var(--space-6)',...style}}>
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'16px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
          <h3 style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:'1.75rem',lineHeight:1.15,margin:0,color:'var(--text-display)'}}>{title}</h3>
          {description&&<p style={{font:'var(--type-body-s)',color:'var(--text-muted)'}}>{description}</p>}
        </div>
        {onClose&&<IconButton icon={<X size={16} strokeWidth={1.5}/>} label="Close" size="sm" onClick={onClose}/>}
      </div>
      {children}
      {footer&&<div style={{display:'flex',justifyContent:'flex-end',gap:'12px'}}>{footer}</div>}
    </div></div>;
}

export function Toast({message,detail,status='success',onDismiss,style}){
  const Icon={success:Check,info:Info,warning:TriangleAlert,danger:CircleAlert}[status]||Info;
  return <div role="status" style={{display:'flex',alignItems:'flex-start',gap:'12px',padding:'14px 18px',minWidth:'280px',maxWidth:'calc(100vw - 32px)',
    background:'var(--surface-inverse)',color:'var(--text-on-inverse)',borderRadius:'var(--radius-2)',boxShadow:'var(--shadow-3)',
    borderLeft:'1px solid var(--rose-500)',...style}}>
    <Icon size={16} strokeWidth={1.5} style={{marginTop:'2px',color:'var(--rose-300)',flex:'0 0 auto'}}/>
    <span style={{display:'flex',flexDirection:'column',gap:'2px'}}>
      <span style={{font:'var(--type-body-s)'}}>{message}</span>
      {detail&&<span style={{font:'var(--type-caption)',color:'var(--text-on-inverse-muted)'}}>{detail}</span>}</span>
    {onDismiss&&<button onClick={onDismiss} aria-label="Dismiss" style={{marginLeft:'auto',background:'none',border:0,color:'var(--smoke-400)',cursor:'pointer'}}>✕</button>}
  </div>;
}

export function Tabs({items=[],value,defaultValue,onChange,tone='default',style}){
  const ctl=value!==undefined;const[int,setInt]=React.useState(defaultValue||(items[0]&&(items[0].id||items[0])));
  const cur=ctl?value:int;const inv=tone==='inverse';
  return <div role="tablist" style={{display:'flex',gap:'clamp(16px,4.5vw,32px)',borderBottom:'1px solid '+(inv?'var(--line-inverse)':'var(--line-hairline)'),overflowX:'auto',...style}}>
    {items.map(it=>{const id=it.id||it,label=it.label||it;const on=cur===id;
      return <button key={id} role="tab" aria-selected={on} onClick={()=>{if(!ctl)setInt(id);onChange&&onChange(id)}}
        style={{background:'none',border:0,padding:'0 0 14px',cursor:'pointer',whiteSpace:'nowrap',
        font:'400 12px/1 var(--font-sans)',letterSpacing:'var(--tracking-button)',textTransform:'uppercase',
        color:on?(inv?'var(--rose-300)':'var(--ink-900)'):(inv?'var(--text-on-inverse-muted)':'var(--text-subtle)'),
        boxShadow:on?'inset 0 -1px 0 '+(inv?'var(--rose-300)':'var(--ink-900)'):'none',transition:'var(--transition-control)'}}>{label}</button>;})}
  </div>;
}
