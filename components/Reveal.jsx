'use client';
import React from 'react';

function prefersReducedMotion(){
  return typeof window!=='undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isCoarsePointer(){
  return typeof window!=='undefined'
    && window.matchMedia('(max-width:900px), (hover:none)').matches;
}

export function Reveal({
  as:Tag='div',
  children,
  className='',
  variant='up',
  delay=0,
  style,
  ...rest
}){
  const ref=React.useRef(null);

  React.useEffect(()=>{
    const el=ref.current;
    if(!el)return;

    if(prefersReducedMotion()){
      el.classList.add('is-visible');
      return;
    }

    /* Mobile-first: fire earlier so the animation lands while the
       block is still entering the viewport — feels intentional, not late. */
    const mobile=isCoarsePointer();
    const io=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    },{
      threshold:mobile?0.06:0.12,
      rootMargin:mobile?'0px 0px 12% 0px':'0px 0px -4% 0px'
    });

    io.observe(el);
    return()=>io.disconnect();
  },[]);

  return <Tag
    ref={ref}
    className={`reveal reveal--${variant}${className?' '+className:''}`}
    style={{'--reveal-delay':`${delay}ms`,...style}}
    {...rest}
  >{children}</Tag>;
}

export function RevealStagger({
  as:Tag='div',
  children,
  className='',
  delayStep=75,
  variant='up',
  style,
  ...rest
}){
  const items=React.Children.toArray(children);

  return <Tag className={className} style={style} {...rest}>
    {items.map((child,i)=>
      <Reveal key={child.key??i} delay={i*delayStep} variant={variant}>
        {child}
      </Reveal>
    )}
  </Tag>;
}
