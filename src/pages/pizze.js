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
import vege from "../images/vege.jpg"
import extraHot from "../images/extra-hot.jpg"
import calzona from "../images/kalcona.jpg"
import picaBianca from "../images/bianca-pica.jpg"
import pida from "../images/pida.jpg"
import { Helmet } from "react-helmet"
export default function Pizze(){
    const pizzeOffer =[
        {   name: "Margarita 32/50cm",
            image: margarita,
            description: "Pelat, parmezan, kombinacija sireva.",
            price: "905.00/1490.00 RSD",
        },
        {   name: "Capriciosa 32/50cm",
            image: capriciosa,
            description: "Pelat, kombinacija sireva, šunka, šampinjoni, masline.",
            price: "945.00/1570.00 RSD",
        },
        {   name: "Pepperoni classic 32/50cm",
            image: peperoni,
            description: "Pelat, kombinacija sireva, pepperoni kobasica.",
            price: "1015.00/1610.00 RSD",
        },
        {   name: "Sedmica 32/50cm",
            image: pica7,
            description: "Pelat, kombinacija sireva, slanina, blue cheese, rukola i čeri paradajz.",
            price: "1155.00/1810.00 RSD",
        },
        {   name: "Smoking gun 32/50cm",
            image: smokingGun,
            description: "Pelat, kombinacija sireva, šunka, slanina, paprika, dimljeni sir.",
            price: "1055.00/1675.00 RSD",
        },
        {   name: "Gurmanska 32/50cm",
            image: gurmanska,
            description: "Pelat, piletina, kombinacija sireva, slanina, karamelizovani luk, šampinjoni, jaje, pepperoni kobasica.",
            price: "1125.00/1790.00 RSD",
        },
        {   name: "Chicken 32/50cm",
            image: chiken,
            description: "Beli pizza sos, sir, piletina, slanina, dimljeni sir, kukuruz šećerac i rukola.",
            price: "1135.00/1820.00 RSD",
        },
        {   name: "Curry 32/50cm",
            image: kari,
            description: "Beli pizza sos, sir, piletina, curry i chili sos, ljubičasti luk.",
            price: "1105.00/1790.00 RSD",
        },
        {   name: "Prosciutto 32/50cm",
            image: prsuta,
            description: "Pelat, kombinacija sireva, rukola, čeri paradajz, pršuta, masline, parmezan.",
            price: "1355.00/2190.00 RSD",
        },
        {   name: "Quattro formaggi 32/50cm",
            image: quatro,
            description: "Pelat, kombinacija sireva - kačkavalj, blue cheese, parmezan, dimljeni sir, bosiljak.",
            price: "1035.00/1690.00 RSD",
        },
        {   name: "Tuna 32/50cm (POSNO - opciono)",
            image: tuna,
            description: "Pelat, kombinacija sireva, tuna, ljubičasti luk, čeri paradajz, kukuruz, kiseli krastavci. Posna varijanta sadrži biljni sir.",
            price: "1055.00/1710.00 RSD",
        },
        {   name: "Pizza gljive 32/50cm (POSNO - opciono)",
            image: gljive,
            description: "Beli pizza sos, kombinacija sireva, začinjeni šampinjoni, peršun. Posna varijanta sadrži pelat i biljni sir umesto belog pizza sosa.",
            price: "1005.00/1590.00 RSD",
        },
        {   name: "Vegetariana 32/50cm (POSNO - opciono)",
            image: vege,
            description: "Pelat, kombinacija sireva, tikvice, paprika, šampinjoni, kukuruz šećerac, crne masline, pesto sos, rukola, čeri paradajz. Posna varijanta sadrži biljni sir.",
            price: "1025.00/1600.00 RSD",
        },
        {   name: "Pepperoni extra hot 32/50cm",
            image: extraHot,
            description: "Pelat, kombinacija sireva, pepperoni kobasica, chili sos, feferoni.",
            price: "1035.00/1690.00 RSD",
        },
        {   name: "Calzona",
            image: calzona,
            description: "Beli pizza sos, kajmak, šunka, pršut, piletina, kombinacija sireva, parmezan.",
            price: "1105.00 RSD",
        },
        {   name: "Pica Bianca 32/50cm",
            image: picaBianca,
            description: "Beli pizza sos, kombinacija sireva, gorgonzola, slanina, krem od spanaća, susam, rukola.",
            price: "1155.00/1810.00 RSD",
        },
        {
            name: "Pide sa mesom i povrćem",
            image: pida,
            description: "Pica testo zapečeno sa mlevenim mesom i povrćem.",
            price: "1105.00 RSD",
        },
    ]
    return(
        <div>
            <Helmet>
                <title>Pizze</title>
                <meta
                name="description"
                content="Razne vrste pica, od klasičnih, do onih za prave gurmane."
                />
            </Helmet>
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