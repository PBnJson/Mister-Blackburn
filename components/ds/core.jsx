import React from 'react';

export function Eyebrow({children,rule=true,tone='accent',style}){
  const color=tone==='inverse'?'var(--rose-300)':tone==='muted'?'var(--text-muted)':'var(--text-accent)';
  return <span style={{display:'inline-flex',alignItems:'center',gap:'12px',font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color,...style}}>
    {rule&&<span style={{width:'28px',height:'1px',background:'currentColor',opacity:.55}}/>}{children}</span>;
}

export function SectionHeading({eyebrow,title,lede,align='left',tone='default',level=2,id,style}){
  const inv=tone==='inverse';
  const Tag='h'+level;
  return <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)',alignItems:align==='center'?'center':'flex-start',
    textAlign:align,maxWidth:align==='center'?'720px':'640px',margin:align==='center'?'0 auto':0,...style}}>
    {eyebrow&&<Eyebrow tone={inv?'inverse':'accent'}>{eyebrow}</Eyebrow>}
    <Tag id={id} style={{font:'var(--type-display-m)',letterSpacing:'var(--tracking-display)',color:inv?'var(--text-on-inverse)':'var(--text-display)',margin:0}}>{title}</Tag>
    {lede&&<p style={{font:'var(--type-lead)',color:inv?'var(--text-on-inverse-muted)':'var(--text-muted)',maxWidth:'56ch'}}>{lede}</p>}
  </div>;
}

export function Divider({ornament=false,tone='default',style}){
  const c=tone==='inverse'?'var(--line-inverse)':'var(--line-hairline)';
  if(!ornament)return <hr style={{border:0,borderTop:'1px solid '+c,margin:0,width:'100%',...style}}/>;
  return <div style={{display:'flex',alignItems:'center',gap:'14px',width:'100%',color:'var(--rose-500)',...style}}>
    <span style={{flex:1,height:'1px',background:c}}/>
    <span style={{width:'5px',height:'5px',transform:'rotate(45deg)',background:'currentColor'}}/>
    <span style={{flex:1,height:'1px',background:c}}/></div>;
}

export function Tag({children,tone='neutral',style}){
  const tones={neutral:{bg:'transparent',fg:'var(--text-muted)',bd:'var(--line-hairline)'},
    rose:{bg:'var(--rose-100)',fg:'var(--rose-700)',bd:'transparent'},
    ink:{bg:'var(--ink-900)',fg:'var(--cream-50)',bd:'transparent'},
    inverse:{bg:'rgba(250,247,241,.08)',fg:'var(--cream-50)',bd:'var(--line-inverse)'}}[tone];
  return <span style={{display:'inline-flex',alignItems:'center',height:'26px',padding:'0 12px',background:tones.bg,color:tones.fg,
    border:'1px solid '+tones.bd,borderRadius:'var(--radius-pill)',font:'var(--type-caption)',letterSpacing:'.08em',textTransform:'uppercase',...style}}>{children}</span>;
}

export function Badge({children,status='info',style}){
  const map={info:['var(--blue-700)','rgba(58,90,107,.10)'],success:['var(--green-600)','rgba(79,107,74,.12)'],
    warning:['var(--amber-600)','rgba(181,119,42,.12)'],danger:['var(--red-700)','rgba(140,47,42,.10)'],
    licensed:['var(--rose-700)','var(--rose-100)']}[status]||['var(--blue-700)','rgba(58,90,107,.10)'];
  return <span style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'4px 10px',color:map[0],background:map[1],
    borderRadius:'var(--radius-1)',font:'var(--type-caption)',letterSpacing:'.06em',textTransform:'uppercase',...style}}>
    <span style={{width:'5px',height:'5px',borderRadius:'999px',background:'currentColor'}}/>{children}</span>;
}

export function StatBlock({value,label,tone='default',style}){
  const inv=tone==='inverse';
  return <div style={{display:'flex',flexDirection:'column',gap:'6px',...style}}>
    <span style={{fontFamily:'var(--font-display)',fontSize:'var(--size-display-s)',fontWeight:300,lineHeight:1.05,
      color:inv?'var(--rose-300)':'var(--rose-600)'}}>{value}</span>
    <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:inv?'var(--text-on-inverse-muted)':'var(--text-muted)'}}>{label}</span>
  </div>;
}

export function DrinkMenuItem({name,build,note,tags=[],tone='default',style}){
  const inv=tone==='inverse';
  return <div style={{display:'flex',flexDirection:'column',gap:'6px',padding:'var(--space-5) 0',borderBottom:'1px solid '+(inv?'var(--line-inverse)':'var(--line-hairline)'),...style}}>
    <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:'16px',flexWrap:'wrap'}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:'1.375rem',lineHeight:1.2,color:inv?'var(--text-on-inverse)':'var(--text-display)'}}>{name}</span>
      {tags.length>0&&<span style={{display:'flex',gap:'6px'}}>{tags.map(t=><Tag key={t} tone={inv?'inverse':'neutral'}>{t}</Tag>)}</span>}
    </div>
    {build&&<span style={{font:'var(--type-body-s)',color:inv?'var(--text-on-inverse-muted)':'var(--text-muted)'}}>{build}</span>}
    {note&&<span style={{font:'var(--type-caption)',fontStyle:'italic',fontFamily:'var(--font-display)',fontSize:'1rem',color:'var(--rose-600)'}}>{note}</span>}
  </div>;
}

export function Testimonial({quote,author,detail,tone='default',style}){
  const inv=tone==='inverse';
  return <figure style={{margin:0,display:'flex',flexDirection:'column',gap:'var(--space-6)',...style}}>
    <span style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',lineHeight:1.45,fontWeight:300,fontStyle:'italic',
      color:inv?'var(--text-on-inverse)':'var(--text-display)'}}>&ldquo;{quote}&rdquo;</span>
    <figcaption style={{display:'flex',flexDirection:'column',gap:'4px'}}>
      <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:inv?'var(--rose-300)':'var(--text-accent)'}}>{author}</span>
      {detail&&<span style={{font:'var(--type-caption)',color:inv?'var(--text-on-inverse-muted)':'var(--text-subtle)'}}>{detail}</span>}
    </figcaption></figure>;
}

const photoMoods={
  rose:'linear-gradient(145deg,var(--ink-700) 0%,var(--rose-700) 55%,var(--berry-700) 100%)',
  ink:'linear-gradient(155deg,var(--ink-900) 0%,var(--ink-700) 48%,var(--rose-700) 100%)',
  berry:'linear-gradient(135deg,var(--berry-800) 0%,var(--rose-600) 50%,var(--ink-800) 100%)'
};

/* Photo frame — real image when `src` is set; otherwise a warm mood gradient. */
export function Photo({label,height,radius='var(--radius-2)',mood='rose',src,alt='',style,className=''}){
  const caption=label??(src?undefined:'Photo placeholder');
  return <div className={`photo-frame${className?' '+className:''}`} style={{height,borderRadius:radius,...style}}>
    <div
      className="photo-frame__media"
      aria-hidden="true"
      style={src?undefined:{background:photoMoods[mood]||photoMoods.rose}}
    >
      {src?<img src={src} alt={alt} loading="lazy" decoding="async"/>:null}
    </div>
    <div className="photo-frame__scrim" aria-hidden="true"/>
    {caption?<span className="photo-frame__label">{caption}</span>:null}
  </div>;
}
