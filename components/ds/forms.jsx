'use client';
import React from 'react';

function Field({label,hint,error,required,children,style,className}){return <label className={className} style={{display:'flex',flexDirection:'column',gap:'8px',width:'100%',...style}}>
  {label&&<span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--text-muted)'}}>{label}{required&&<span style={{color:'var(--rose-600)'}}> *</span>}</span>}
  {children}
  {(hint||error)&&<span style={{font:'var(--type-caption)',color:error?'var(--red-700)':'var(--text-subtle)'}}>{error||hint}</span>}</label>}

const ctrl=(error,foc)=>({width:'100%',height:'var(--control-h-m)',padding:'0 14px',background:'var(--surface-card)',color:'var(--text-display)',
  border:'1px solid '+(error?'var(--red-700)':foc?'var(--rose-500)':'var(--line-hairline)'),borderRadius:'var(--radius-1)',
  font:'var(--type-body)',outline:'none',transition:'var(--transition-control)'});

export function Input({label,hint,error,required,type='text',placeholder,value,defaultValue,onChange,disabled,style,className,...rest}){
  const[foc,setFoc]=React.useState(false);
  return <Field label={label} hint={hint} error={error} required={required} style={style} className={className}>
    <input type={type} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled} required={required}
      onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} style={{...ctrl(error,foc),opacity:disabled?.5:1}} {...rest}/>
  </Field>;
}

export function Select({label,hint,error,required,options=[],value,defaultValue,onChange,disabled,placeholder,style,className,...rest}){
  const[foc,setFoc]=React.useState(false);
  return <Field label={label} hint={hint} error={error} required={required} style={style} className={className}>
    <div style={{position:'relative',width:'100%'}}>
      <select value={value} defaultValue={defaultValue??(placeholder!==undefined&&value===undefined?'':undefined)} onChange={onChange} disabled={disabled}
        onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)}
        style={{...ctrl(error,foc),appearance:'none',paddingRight:'38px',cursor:'pointer'}} {...rest}>
        {placeholder&&<option value="">{placeholder}</option>}
        {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>})}
      </select>
      <span style={{position:'absolute',right:'14px',top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--text-muted)',fontSize:'11px'}}>▾</span>
    </div></Field>;
}

export function Textarea({label,hint,error,required,rows=5,placeholder,value,defaultValue,onChange,disabled,style,className,...rest}){
  const[foc,setFoc]=React.useState(false);
  return <Field label={label} hint={hint} error={error} required={required} style={style} className={className}>
    <textarea rows={rows} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}
      onFocus={()=>setFoc(true)} onBlur={()=>setFoc(false)} style={{...ctrl(error,foc),height:'auto',padding:'12px 14px',resize:'vertical',lineHeight:'var(--leading-body)'}} {...rest}/>
  </Field>;
}

export function Checkbox({label,description,checked,defaultChecked,onChange,disabled,style,className}){
  const ctl=checked!==undefined;const[int,setInt]=React.useState(!!defaultChecked);const on=ctl?checked:int;
  return <label className={className} style={{display:'flex',gap:'12px',alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
    <input type="checkbox" checked={on} onChange={e=>{if(!ctl)setInt(e.target.checked);onChange&&onChange(e)}} disabled={disabled} style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span style={{flex:'0 0 auto',width:'18px',height:'18px',marginTop:'2px',display:'grid',placeItems:'center',
      background:on?'var(--ink-900)':'var(--surface-card)',border:'1px solid '+(on?'var(--ink-900)':'var(--line-strong)'),
      borderRadius:'var(--radius-1)',color:'var(--cream-50)',fontSize:'11px',transition:'var(--transition-control)'}}>{on?'✓':''}</span>
    <span style={{display:'flex',flexDirection:'column',gap:'2px'}}>
      <span style={{font:'var(--type-body-s)',color:'var(--text-display)'}}>{label}</span>
      {description&&<span style={{font:'var(--type-caption)',color:'var(--text-subtle)'}}>{description}</span>}</span></label>;
}

export function Radio({name,options=[],value,defaultValue,onChange,direction='column',style}){
  const ctl=value!==undefined;const[int,setInt]=React.useState(defaultValue);const cur=ctl?value:int;
  return <div role="radiogroup" style={{display:'flex',flexDirection:direction,flexWrap:'wrap',gap:direction==='row'?'12px 24px':'12px',...style}}>
    {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;const on=cur===v;
      return <label key={v} style={{display:'flex',gap:'10px',alignItems:'center',cursor:'pointer'}}>
        <input type="radio" name={name} checked={on} onChange={()=>{if(!ctl)setInt(v);onChange&&onChange(v)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
        <span style={{width:'16px',height:'16px',borderRadius:'999px',border:'1px solid '+(on?'var(--ink-900)':'var(--line-strong)'),display:'grid',placeItems:'center',transition:'var(--transition-control)'}}>
          {on&&<span style={{width:'8px',height:'8px',borderRadius:'999px',background:'var(--ink-900)'}}/>}</span>
        <span style={{font:'var(--type-body-s)',color:'var(--text-display)'}}>{l}</span></label>;})}
  </div>;
}
