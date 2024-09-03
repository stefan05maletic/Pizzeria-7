import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import palacinkeCokoKrem from "../images/palacinke-coko-krem-plazma.jpg"
import palacinkeBeliKrem from "../images/palacinke-beli-krem-plazma.jpg"
import palacinkeSvarcvald from "../images/svarcvald-palacinke.jpg"
import palacinkeSeherezada from "../images/seherezada-palacinke.jpg"
import palacinkeDzem from "../images/palacinke-dzem.jpg"
import masnice from "../images/masnice.jpg"
import svarcvaldPica from "../images/svarcvald-pica.jpg"
import seherezadaPica from "../images/seherezada-pica.jpg"
import vafliCokoKrem from "../images/vafli-coko-krem.jpg"
import vafliBeliKrem from "../images/vafli-beli-krem.jpg"
import vafliSeherezada from "../images/vafli-seherezada.jpg"
import vafliSvarcvald from "../images/vafli-svarcvald.jpg"
import urmasice from "../images/urmasice.jpg"
import sufle from "../images/sufle.jpg"
import mafini from "../images/mafini.jpg"
export default function Deserti(){
    const desertiOffer =[
        {   name: "Palačinke sa čokoladnim kremom (plazma po izboru)",
            image: palacinkeCokoKrem,
            description: "Dve palačinke, čoko krem, plazma, toping.",
            price: "450.00 RSD",
        },
        {   name: "Palačinke sa belim kremom (plazma po izboru)",
            image: palacinkeBeliKrem,
            description: "Dve palačinke, mlečni beli krem, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Švarcvald palačinke",
            image: palacinkeSvarcvald,
            description: "Dve palačinke, čokoladni krem, sos od višanja, plazma.",
            price: "510.00 RSD",
        },
        {   name: "Šeherezada palačinke",
            image: palacinkeSeherezada,
            description: "Dve palačinke, beli krem, sos od višanja, plazma",
            price: "510.00 RSD",
        },
        {   name: "Palačinke sa džemom od kajsija",
            image: palacinkeDzem,
            description: "Dve palačinke, džem od kajsija.",
            price: "435.00 RSD",
        },
        {   name: "Slatki zalogaj (mašnice) - (POSNO - opciono)",
            image: masnice,
            description: "Prženo testo sa slatkim dodacima, posna varijanta sadrži samo džem od kajsije.",
            price: "510.00 RSD",
        },
        {   name: "Pizza švarcvald",
            image: svarcvaldPica,
            description: "Čokoladni krem, sos od višanja 60g, mlevena plazma, toping.",
            price: "635.00 RSD",
        },
        {   name: "Pizza šeherezada",
            image: seherezadaPica,
            description: "Beli krem, sos od malina 60g, mlevena plazma.",
            price: "635.00 RSD",
        },
        {   name: "Waffle čoko krem",
            image: vafliCokoKrem,
            description: "Waffle kolač, čokoladni krem, toping, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Waffle beli krem",
            image: vafliBeliKrem,
            description: "Waffle kolač, mlečni beli krem, toping, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Waffle švarcvald",
            image: vafliSvarcvald,
            description: "Waffle kolač, čokoladni krem, toping, plazma, sos od višanja.",
            price: "510.00 RSD",
        },
        {   name: "Waffle šeherezada",
            image: vafliSeherezada,
            description: "Waffle kolač, mlečni beli krem, toping, plazma, sos od malina.",
            price: "510.00 RSD",
        },
        {   name: "Plazma urmašice",
            image: urmasice,
            description: "",
            price: "255.00 RSD",
        },
        {   name: "Čoko sufle",
            image: sufle,
            description: "Sufle sa lešnik kremom i prelivom od maline.",
            price: "310.00 RSD",
        },
        {   name: "Mafin malina/čoko krem",
            image: mafini,
            description: "Dva mafina sa malinom ili čokoladnim kremom.",
            price: "295.00 RSD",
        },
        
    ]
    return(
        <div>
            <h1 className="title-meniPg">Deserti</h1>
            <div className="meni-container">
                {desertiOffer.map((parts,index)=>(
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