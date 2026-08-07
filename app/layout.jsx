import {Cormorant_Garamond,Jost} from 'next/font/google';
import {NavBar} from '../components/NavBar.jsx';
import {Footer} from '../components/Footer.jsx';
import './globals.css';

const cormorant=Cormorant_Garamond({subsets:['latin'],weight:['300','400','500','600','700'],style:['normal','italic'],variable:'--font-cormorant',display:'swap'});
const jost=Jost({subsets:['latin'],weight:['200','300','400','500','600'],variable:'--font-jost',display:'swap'});

export const metadata={
  title:'D&T Mobile Bartending — The bar comes to you',
  description:'Custom drink menus designed around your night, poured by professional, certified bartenders. Weddings, corporate events, and every celebration in between.'
};

export const viewport={width:'device-width',initialScale:1};

export default function RootLayout({children}){
  return <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
    <body>
      <NavBar/>
      {children}
      <Footer/>
    </body>
  </html>;
}
