import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import cezar from "../images/cezar-salata.jpg"
import tunaSalata from "../images/tuna-salata.jpg"
import grcka from "../images/grcka-salata.jpg"
import salata7 from "../images/salata7.jpg"
import mediteranskaLignje from "../images/salata-lignje.jpg"
import mediteranskaMorskiPlodovi from "../images/salata-morski-plodovi.jpg"
export default function Salate(){
    const salateOffer =[
        {   name: "Cezar salata",
            image: cezar,
            description: "Piletina 100g, slanina 50g, miks zelenih salata, čeri paradajz, dresing, krutoni, parmezan.",
            price: "930.00 RSD",
        },
        {   name: "Tuna salata (POSNO)",
            image: tunaSalata,
            description: "Tunjevina 60g, krastavac, čeri paradajz, paprika, ljubčasti luk, crne masline, zelena salata, limun, kukuruz, fokaccia.",
            price: "810.00 RSD",
        },
        {   name: "Grčka salata - (POSNO - opciono)",
            image: grcka,
            description: "Feta sir, krastavci, čeri paradajz, paprika, masline, ljubčasti luk, origano, focaccia. Posna varijanta ne sadrži feta sir.",
            price: "710.00 RSD",
        },
        {   name: "Salata sedmica",
            image: salata7,
            description: "Piletina, dimljeni sir, sezonski miks, čeri paradajz, krastavac, paprika, soja sos, beli luk, susam, focaccia.",
            price: "895.00 RSD",
        },
        {   name: "Mediteranska salata sa lignjama",
            image: mediteranskaLignje,
            description: "Ajsberg, zelena salata, kukuruz, čeri paradajz, masline, cezar dresing, lignje, focaccia.",
            price: "1165.00 RSD",
        },
        {   name: "Salata morski plodovi",
            image: mediteranskaMorskiPlodovi,
            description: "Ajsberg, zelena salata, kukuruz, čeri paradajz, masline, cezar dresing, morski plodovi, focaccia.",
            price: "1165.00 RSD",
        },
    ]
    return(
        <div>
            <h1 className="title-meniPg">Obrok salate</h1>
            <div className="meni-container">
                {salateOffer.map((parts,index)=>(
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