import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import palacinkeCokoKrem from "../images/palacinke-coko-krem-plazma.jpg"
import palacinkeBeliKrem from "../images/palacinke-beli-krem-plazma.jpg"
import palacinkeSvarcvald from "../images/svarcvald-palacinke.jpg"
import palacinkeSeherezada from "../images/seherezada-palacinke.jpg"
import palacinkeDzem from "../images/palacinke-dzem.jpg"
import vafliCokoKrem from "../images/vafli-coko-krem.jpg"
import vafliBeliKrem from "../images/vafli-beli-krem.jpg"
import vafliSeherezada from "../images/vafli-seherezada.jpg"
import vafliSvarcvald from "../images/vafli-svarcvald.jpg"
import slatkaPica from "../images/slatka-pica.jpg"
import lenjaPita from "../images/lenja-pita.jpg"
import medenoSrce from "../images/medeno-srce.jpg"
import { Helmet } from "react-helmet"
export default function Deserti(){
    const desertiOffer =[
        {   name: "Palačinke sa čokoladnim kremom (plazma po izboru)",
            image: palacinkeCokoKrem,
            description: "Dve palačinke, čoko krem, plazma, toping.",
            price: "515.00 RSD",
        },
        {   name: "Palačinke sa belim kremom (plazma po izboru)",
            image: palacinkeBeliKrem,
            description: "Dve palačinke, mlečni beli krem, plazma.",
            price: "515.00 RSD",
        },
        {   name: "Švarcvald palačinke",
            image: palacinkeSvarcvald,
            description: "Dve palačinke, čokoladni krem, sos od višanja, plazma.",
            price: "585.00 RSD",
        },
        {   name: "Šeherezada palačinke",
            image: palacinkeSeherezada,
            description: "Dve palačinke, beli krem, sos od višanja, plazma",
            price: "585.00 RSD",
        },
        {   name: "Palačinke sa džemom od kajsija ili malina",
            image: palacinkeDzem,
            description: "Dve palačinke, džem od kajsija ili malina.",
            price: "495.00 RSD",
        },
        {   name: "Waffle čoko krem",
            image: vafliCokoKrem,
            description: "Waffle kolač, čokoladni krem, toping, plazma.",
            price: "505.00 RSD",
        },
        {   name: "Waffle beli krem",
            image: vafliBeliKrem,
            description: "Waffle kolač, mlečni beli krem, toping, plazma.",
            price: "505.00 RSD",
        },
        {   name: "Waffle švarcvald",
            image: vafliSvarcvald,
            description: "Waffle kolač, čokoladni krem, toping, plazma, sos od višanja.",
            price: "575.00 RSD",
        },
        {   name: "Waffle šeherezada",
            image: vafliSeherezada,
            description: "Waffle kolač, mlečni beli krem, toping, plazma, sos od malina.",
            price: "575.00 RSD",
        },
        {   name: "Slatka pica",
            image: slatkaPica,
            description: "Pica testo i premaz od crnog ili belog krema, plazme i  topinga.",
            price: "635.00 RSD",
        },
        {
            name:"Medeno srce (POSNO)",
            image: medenoSrce,
            description: "Kolač sa kajsijom, višnjom ili malinom.",
            price: "415.00 RSD",
        },
    ]
    return(
        <div>
            <Helmet>
                <title>Deserti</title>
                <meta
                name="description"
                content="Najbolje za kraj, zasladite se sa uzivanjem."
                />
            </Helmet>
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