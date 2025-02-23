import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact" 
import karbonare from "../images/karbonare.jpg"
import bologneze from "../images/bologneze.jpg"
import quatro from "../images/quatro-pasta.jpg"
import piletinaSuseni from "../images/pasta-piletina-suseni.jpg"
import prsuta from "../images/pasta-prsuta.jpg"
import povrce from "../images/pasta-povrce.jpg"
import tuna from "../images/tuna-pasta.jpg"
import gorgonzola from "../images/piletina-gorgonzola.jpg"
import tikviceSir from "../images/pasta-tikvice-sir.jpg"
import genoveze from "../images/genoveze.jpg"
import lignje from "../images/pasta-lignje.jpg"
import lazanjite from "../images/lazanjite.jpg"
import { Helmet } from "react-helmet"
export default function Paste(){
    const pasteOffer =[
        {   name: "Carbonare 450g",
            image: karbonare,
            description: "Domaće tagliatelle, carbonare sos, slanina.",
            price: "845.00 RSD",
        },
        {   name: "Bologneze 450g",
            image: bologneze,
            description: "Domaće tagliatelle, bologneze sos sa junetinom.",
            price: "845.00 RSD",
        },
        {   name: "Quattro formagi 430g",
            image: quatro,
            description: "Domaće tagliatelle, sos od četiri vrste sira.",
            price: "875.00 RSD",
        },
        {   name: "Pasta u sosu od piletine i sušenog paradajza 470g",
            image: piletinaSuseni,
            description: "Domaće tagliatelle, pileći file 150g, sušeni paradajz.",
            price: "995.00 RSD",
        },
        {   name: "Pasta suvi vrat 470g",
            image: prsuta,
            description: "Domaće tagliatelle, suvi vrat 50g, dimljeni sir.",
            price: "1105.00 RSD",
        },
        {   name: "Pasta sa povrćem 450g (POSNO - opciono)",
            image: povrce,
            description: "Domaće tagliatelle, šampinjoni, tikvice, paprika, pesto sos, marinada, maslinovo ulje. Posna varijanta ne sadrži pesto sos.",
            price: "855.00 RSD",
        },
        {   name: "Pikant tuna pasta 450g - (POSNO)",
            image: tuna,
            description: "Domaće tagliatelle, tuna, pelat, beli luk, ljubičasti luk, chili sos, masline.",
            price: "875.00 RSD",
        },
        {   name: "Zapečena pasta piletina-gorgonzola",
            image: gorgonzola,
            description: "Domaće tagliatelle, piletina 150g, gorgonzola, tvrdi sir.",
            price: "1195.00 RSD",
        },
        {   name: "Zapečena pasta tikvice-sir",
            image: tikviceSir,
            description: "Domaće tagliatelle, tikvice, šampinjoni, kačkavalj, feta. ",
            price: "935.00 RSD",
        },
        {   name: "Genovese 450g",
            image: genoveze,
            description: "Domaće tagliatelle, piletina, tikvice, neutralna pavlaka, pesto sos, začini. ",
            price: "1025.00 RSD",
        },
        {   name: "Zapečena lazanjita",
            image: lazanjite,
            description: "Domaće tagliatelle, lazanjita sos od junetine, začini, kombinacija sireva.",
            price: "965.00 RSD",
        },
        {   name: "Pasta Nera sa lignjama 450g (POSNO)",
            image: lignje,
            description: "Domaće tagliatelle sa sipinim mastilom, lignje 150g, vino, marinada od belog luka, limun, začini.",
            price: "1135.00 RSD",
        },   
    ]
    return(
        <div>
            <Helmet>
                <title>Paste</title>
                <meta
                name="description"
                content="Poznato italijansko jelo sa domaćim taljatelama, predstavlja pravi izbor za ukusan ručak!"
                />
            </Helmet>
            <h1 className="title-meniPg">Paste</h1>
            <div className="meni-container">
                {pasteOffer.map((parts,index)=>(
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