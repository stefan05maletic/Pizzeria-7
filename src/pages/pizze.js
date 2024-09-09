import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import margarita from "../images/margarita.jpg"
import capriciosa from "../images/capriciosa.jpg"
import peperoni from "../images/peperoni-pica.jpg"
import pica7 from "../images/pica7.jpg"
import smokingGun from "../images/smoking-gun.jpg"
import gurmanska from "../images/gurmanska.jpg"
import chiken from "../images/chiken-pica.jpg"
import kari from "../images/kari-pica.jpg"
import prsuta from "../images/pica-prsuta.jpg"
import quatro from "../images/quatro-pica.jpg"
import tuna from "../images/tuna-pica.jpg"
import gljive from "../images/pica-gljive.jpg"
import pub from "../images/pub-pica.jpg"
import chickenPesto from "../images/chicken-pesto.jpg"
import vege from "../images/vege.jpg"
import extraHot from "../images/extra-hot.jpg"
import calzona from "../images/kalcona.jpg"

export default function Pizze(){
    const pizzeOffer =[
        {   name: "Margarita 32/50cm",
            image: margarita,
            description: "Pelat, parmezan, mocarela",
            price: "895.00/1470.00 RSD",
        },
        {   name: "Capriciosa 32/50cm",
            image: capriciosa,
            description: "Pelat, kombinacija sireva, šunka, šampinjoni, masline",
            price: "940.00/1550.00 RSD",
        },
        {   name: "Pepperoni classic 32/50cm",
            image: peperoni,
            description: "Pelat, kombinacija sireva, pepperoni kobasica.",
            price: "1010.00/1590.00 RSD",
        },
        {   name: "Sedmica 32/50cm",
            image: pica7,
            description: "Pelat, kombinacija sireva, slanina, blue cheese, crne masline, rukola i čeri paradajz.",
            price: "1150.00/1790.00 RSD",
        },
        {   name: "Smoking gun 32/50cm",
            image: smokingGun,
            description: "Pelat, kombinacija sireva, šunka, slanina, paprika, dimljeni sir.",
            price: "1050.00/1670.00 RSD",
        },
        {   name: "Gurmanska 32/50cm",
            image: gurmanska,
            description: "Pelat, piletina, kombinacija sireva, slanina, karamelizovani luk, šampinjoni, jaje, pepperoni kobasica.",
            price: "1120.00/1770.00 RSD",
        },
        {   name: "Chicken 32/50cm",
            image: chiken,
            description: "Beli pizza sos, sir, piletina, slanina, dimljeni sir, kukuruz šećerac i rukola.",
            price: "1130.00/1810.00 RSD",
        },
        {   name: "Curry 32/50cm",
            image: kari,
            description: "Beli pizza sos, sir, piletina, curry i chili sos, ljubičasti luk.",
            price: "1100.00/1770.00 RSD",
        },
        {   name: "Prosciutto 32/50cm",
            image: prsuta,
            description: "Pelat, kombinacija sireva, rukola, čeri paradajz, pršuta, masline, parmezan.",
            price: "1350.00/2170.00 RSD",
        },
        {   name: "Quattro formaggi 32/50cm",
            image: quatro,
            description: "Pelat, kombinacija sireva - kačkavalj, blue cheese, parmezan, dimljeni sir, bosiljak.",
            price: "1030.00/1670.00 RSD",
        },
        {   name: "Tuna 32/50cm (POSNO - opciono)",
            image: tuna,
            description: "Pelat, kombinacija sireva, tuna, ljubičasti luk, čeri paradajz, kukuruz, kiseli krastavci. Posna varijanta sadrži biljni sir.",
            price: "1050.00/1690.00 RSD",
        },
        {   name: "Pizza gljive 32/50cm (POSNO - opciono)",
            image: gljive,
            description: "Beli pizza sos, kombinacija sireva, začinjeni šampinjoni, peršun. Posna varijanta sadrži biljni sir.",
            price: "995.00/1570.00 RSD",
        },
        {   name: "Pub (pivska) 32/50cm",
            image: pub,
            description: "Beli pizza sos, kombinacija sireva, roštilj kobasica, ljubičasti luk, peršun.",
            price: "1150.00/1810.00 RSD",
        },
        {   name: "Chicken pesto 32/50cm",
            image: chickenPesto,
            description: "Kombinacija sireva, piletina, grilovana paprika, pesto sos.",
            price: "1120.00/1790.00 RSD",
        },
        {   name: "Vegetariana 32/50cm (POSNO - opciono)",
            image: vege,
            description: "Pelat, kombinacija sireva, tikvice, paprika, šampinjoni, kukuruz šećerac, crne masline, pesto sos, rukola, čeri paradajz. Posna varijanta sadrži biljni sir.",
            price: "1020.00/1580.00 RSD",
        },
        {   name: "Pepperoni extra hot 32/50cm",
            image: extraHot,
            description: "Pelat, kombinacija sireva, pepperoni kobasica, chili sos, feferoni.",
            price: "1030.00/1670.00 RSD",
        },
        {   name: "Calzona",
            image: calzona,
            description: "Beli pizza sos, kajmak, šunka, pršut, piletina, kombinacija sireva.",
            price: "1100.00 RSD",
        },
        

    ]
    return(
        <div>
            <h1 className="title-meniPg">Pizze</h1>
            <div className="meni-container">
                {pizzeOffer.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
            <div className="back-tag">
                <Link  to="/meni">Nazad</Link>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}