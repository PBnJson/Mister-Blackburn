'use client';
import React from 'react';
import {Card} from '../../components/ds/Card.jsx';
import {Button} from '../../components/ds/Button.jsx';
import {Input,Select,Textarea,Radio,Checkbox} from '../../components/ds/forms.jsx';
import {Dialog,Toast} from '../../components/ds/overlays.jsx';

export function ContactForm(){
  const[sent,setSent]=React.useState(false);
  const[toast,setToast]=React.useState(false);
  const close=()=>{setSent(false);setToast(true)};
  return <>
    <Card padding="clamp(20px, 5vw, 48px)">
      <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="form-grid">
        <Input label="Full name" placeholder="Jordan Avery" required/>
        <Input label="Email" type="email" placeholder="you@example.com" required/>
        <Input label="Event date" type="date" required/>
        <Input label="Guest count" type="number" placeholder="120"/>
        <Select label="Event type" placeholder="Choose one" options={["Wedding","Corporate","Private party","Fundraiser","Other"]} className="span-all"/>
        <div className="span-all"><Radio name="barstyle" direction="row" options={["Full bar","Beer & wine","Juice Bar","Not sure yet"]} defaultValue="Full bar"/></div>
        <Textarea label="The night, in a few lines" rows={4} placeholder="Venue, timing, the drinks you love…" className="span-all"/>
        <Checkbox label="Send me the sample menu PDF" defaultChecked className="span-all"/>
        <Button size="lg" className="span-all" fullWidth>Request my quote</Button>
      </form>
    </Card>
    <Dialog open={sent} title="Request received" description="We reply within one business day with a draft menu and quote. Your date is penciled in for 48 hours." onClose={close}
      footer={<Button size="sm" onClick={close}>Done</Button>}/>
    {toast&&<div style={{position:'fixed',right:16,bottom:16,zIndex:90}}><Toast message="Date held for 48 hours" detail="We'll be in touch shortly" onDismiss={()=>setToast(false)}/></div>}
  </>;
}
