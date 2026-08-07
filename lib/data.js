export const links = [
  {href:'/',label:'Home'},
  {href:'/services',label:'Services'},
  {href:'/menus',label:'Menus'},
  {href:'/contact',label:'Contact'}
];

export const menu = {
  sig:[{name:'The Long Table',build:'Rye, amaro nonino, black walnut bitters',note:'stirred tableside on request',tags:['Signature']},
    {name:'Garden Spritz',build:'Elderflower, cucumber, prosecco, mint',tags:['Light']},
    {name:'Ember & Oak',build:'Mezcal, charred pineapple, chile-lime salt',tags:['Smoky']}],
  cls:[{name:'Old Fashioned',build:'Bourbon, demerara, angostura, orange oil'},
    {name:'French 75',build:'Gin, lemon, champagne'},
    {name:'Negroni',build:'Gin, campari, sweet vermouth'}],
  zero:[{name:'Sundown Palmer',build:'Black tea, lemon, smoked honey',tags:['Juice Bar']},
    {name:'Juniper & Tonic',build:'Botanical distillate, yuzu tonic',tags:['Juice Bar']}]
};

export const packages = [
  {name:'Essentials',price:'$24',summary:'A polished bar for relaxed gatherings.',includes:['One certified bartender','Menu of three cocktails','Bar tools, ice & garnish','Up to 60 guests']},
  {name:'Signature',price:'$32',summary:'Our most requested service.',includes:['Two certified bartenders','Custom menu of five cocktails','Bar, ice & full garnish program','Glassware coordination','Up to 140 guests'],featured:true},
  {name:'Grand',price:'$45',summary:'Full production for the big night.',includes:['Three bartenders + bar-back','Unlimited custom menu','Welcome drinks & tableside service','Zero-proof program included','140+ guests']}
];
