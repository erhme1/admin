"use client"
import Image from "next/image";
import './page.css';

import { Cardo, Syne, Urbanist } from "next/font/google";

import { Montserrat } from "next/font/google";

import { Inter } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: "700" });

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"], weight: "300" });

const users = [

  {

    id: 1,

    firstName: "Marian",

    lastName: "Dixsee",

    email: "mdixsee0@nba.com",

    companyName: "Blogtags",

    phoneNumber: "412-530-2249",

    address: "62 Meadow Ridge Plaza",

  },

  {

    id: 2,

    firstName: "Coleman",

    lastName: "Oxbie",

    email: "coxbie1@oaic.gov.au",

    companyName: "Fatz",

    phoneNumber: "592-295-2012",

    address: "18 Macpherson Place",

  },

  {

    id: 3,

    firstName: "Allx",

    lastName: "Tomasian",

    email: "atomasian2@cafepress.com",

    companyName: "Abata",

    phoneNumber: "741-828-1962",

    address: "42040 Ridgeway Trail",

  },

  {

    id: 4,

    firstName: "Jarrett",

    lastName: "Randales",

    email: "jrandales3@wiley.com",

    companyName: "Vidoo",

    phoneNumber: "401-321-9934",

    address: "595 Lakewood Street",

  },

  {

    id: 5,

    firstName: "Mora",

    lastName: "Tildesley",

    email: "mtildesley4@privacy.gov.au",

    companyName: "Shuffletag",

    phoneNumber: "254-913-7925",

    address: "7 Little Fleur Point",

  },

  {

    id: 6,

    firstName: "Livvyy",

    lastName: "Crankhorn",

    email: "lcrankhorn5@google.com.br",

    companyName: "Fivespan",

    phoneNumber: "589-951-2909",

    address: "23524 Thackeray Street",

  },

  {

    id: 7,

    firstName: "Erwin",

    lastName: "LLelweln",

    email: "ellelweln6@de.vu",

    companyName: "Cogibox",

    phoneNumber: "105-760-3548",

    address: "20 Cardinal Pass",

  },

  {

    id: 8,

    firstName: "Jourdain",

    lastName: "Leban",

    email: "jleban7@is.gd",

    companyName: "Layo",

    phoneNumber: "124-860-5889",

    address: "77 Fair Oaks Court",

  },

  {

    id: 9,

    firstName: "Christy",

    lastName: "Van Der Straaten",

    email: "cvanderstraaten8@dailymail.co.uk",

    companyName: "Linktype",

    phoneNumber: "460-169-0338",

    address: "94749 Mendota Circle",

  },

  {

    id: 10,

    firstName: "Jehanna",

    lastName: "Cleobury",

    email: "jcleobury9@huffingtonpost.com",

    companyName: "Flashpoint",

    phoneNumber: "396-811-4137",

    address: "3759 Oak Valley Park",

  },

];
 
function Greeting(props) {
        return <div>HI,{props.name}</div>
    }



export default function Home() {

  return (
<div><div className="grid grid-cols-3 gap-4">

{users.map((item, index) => {

  return (
<div className="card" key={index}>
<div>
<div>
<div className="names">
<h1 className={syne.className}>{item.firstName}</h1>
<h2 className={syne.className}>{item.lastName}</h2>
</div>
<h3 className={montserrat.className}>Designer</h3>
</div>
<div className={inter.className}>
<p>{item.phoneNumber}</p>
<p>{item.email}</p>
<p>{item.address}</p>
</div>
</div>
<div className="card-right">
<div className="logo"></div>
<h1 className={montserrat.className}>{item.companyName}</h1>
<h2 className={inter.className}>Tagline goes here</h2>
<div className="qr-code"></div>
</div> 
</div>

  );

})}
</div><Greeting name="Erhmee"/></div>
  );
}


