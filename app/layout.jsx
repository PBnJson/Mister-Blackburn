import {Cormorant_Garamond,Jost} from 'next/font/google';
import {NavBar} from '../components/NavBar.jsx';
import {Footer} from '../components/Footer.jsx';
import './globals.css';

const cormorant=Cormorant_Garamond({subsets:['latin'],weight:['300','400','500','600','700'],style:['normal','italic'],variable:'--font-cormorant',display:'swap'});
const jost=Jost({subsets:['latin'],weight:['200','300','400','500','600'],variable:'--font-jost',display:'swap'});

export const metadata={
  title:'D&T Mobile Bartending — Lorem ipsum dolor',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
