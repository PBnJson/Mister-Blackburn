'use client';
import React from 'react';
import {Photo} from './ds/core.jsx';

/* Sample cubic-bezier(x1,y1,x2,y2) at progress t ∈ [0,1].
   Allows y>1 for a short overshoot — that “lock / snap” feel. */
function cubicBezier(t,x1,y1,x2,y2){
  const cx=3*x1;
  const bx=3*(x2-x1)-cx;
  const ax=1-cx-bx;
  const cy=3*y1;
  const by=3*(y2-y1)-cy;
  const ay=1-cy-by;

  const sampleX=s=>((ax*s+bx)*s+cx)*s;
  const sampleY=s=>((ay*s+by)*s+cy)*s;
  const sampleDX=s=>(3*ax*s+2*bx)*s+cx;

  let s=t;
  for(let i=0;i<6;i++){
    const x=sampleX(s)-t;
    const d=sampleDX(s);
    if(Math.abs(x)<1e-5||Math.abs(d)<1e-5)break;
    s-=x/d;
    s=Math.min(1,Math.max(0,s));
  }
  return sampleY(s);
}

/* Visceral settle: ease-out with a touch of overshoot */
const SNAP=(t)=>cubicBezier(t,0.22,1.28,0.36,1);

export function GalleryStack({
  items=[
    {label:'Lorem ipsum',src:'/assets/images/drinks1.jpg'},
    {label:'Dolor sit',src:'/assets/images/drinks2.jpg'},
    {label:'Amet elit',src:'/assets/images/drinks3.jpg'}
  ]
}){
  const wrapRef=React.useRef(null);
  const[progress,setProgress]=React.useState(0);
  const reduced=React.useRef(false);

  React.useEffect(()=>{
    reduced.current=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced.current){setProgress(1);return}

    const wrap=wrapRef.current;
    if(!wrap)return;

    let raf=0;
    const update=()=>{
      const rect=wrap.getBoundingClientRect();
      const run=Math.max(1,wrap.offsetHeight-window.innerHeight);
      const raw=Math.min(1,Math.max(0,-rect.top/run));
      setProgress(raw);
    };
    const onScroll=()=>{
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll,{passive:true});
    return()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll',onScroll);
      window.removeEventListener('resize',onScroll);
    };
  },[]);

  const n=items.length;
  const segments=Math.max(1,n-1);
  /* Tall runway: each handoff gets roughly a viewport of scroll */
  const runwayVh=n*95;

  return <div
    ref={wrapRef}
    className="gallery-stack"
    style={{'--gallery-runway':`${runwayVh}vh`}}
  >
    <div className="gallery-stack__sticky">
      {items.map((item,i)=>{
        let y=0;
        if(i>0){
          const start=(i-1)/segments;
          const end=i/segments;
          const local=Math.min(1,Math.max(0,(progress-start)/(end-start)));
          const eased=SNAP(local);
          y=(1-eased)*105;
        }

        /* Soften the card underneath as the next one locks over it */
        let dim=1;
        if(i<n-1){
          const start=i/segments;
          const end=(i+1)/segments;
          const local=Math.min(1,Math.max(0,(progress-start)/(end-start)));
          dim=1-SNAP(local)*0.18;
        }

        return <div
          key={item.label}
          className="gallery-stack__slide"
          style={{
            zIndex:i+1,
            transform:`translate3d(0,${y}%,0)`,
            filter:`brightness(${dim})`
          }}
          aria-hidden={y>40?true:undefined}
        >
          <Photo label={item.label} mood={item.mood} src={item.src} alt={item.alt||item.label} radius="var(--radius-2)" className="gallery-stack__photo"/>
        </div>;
      })}
      <div className="gallery-stack__progress" aria-hidden="true">
        {items.map((item,i)=>{
          const activeIndex=Math.min(n-1,Math.round(progress*segments));
          return <span
            key={item.label}
            className={`gallery-stack__dot${i<=activeIndex?' is-on':''}${i===activeIndex?' is-active':''}`}
          />;
        })}
      </div>
    </div>
  </div>;
}
