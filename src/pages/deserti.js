import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Deserti(){
    const desertiOffer =[
        {   name: "Palačinke sa čokoladnim kremom (plazma po izboru)",
            image: "img/palacinke-coko-krem-plazma.jpg",
            description: "Dve palačinke, čoko krem, plazma, toping.",
            price: "450.00 RSD",
        },
        {   name: "Palačinke sa belim kremom (plazma po izboru)",
            image: "img/palacinke-beli-krem-plazma.jpg",
            description: "Dve palačinke, mlečni beli krem, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Švarcvald palačinke",
            image: "img/svarcvald-palacinke.jpg",
            description: "Dve palačinke, čokoladni krem, sos od višanja, plazma.",
            price: "510.00 RSD",
        },
        {   name: "Šeherezada palačinke",
            image: "img/seherezada-palacinke.jpg",
            description: "Dve palačinke, beli krem, sos od višanja, plazma",
            price: "510.00 RSD",
        },
        {   name: "Palačinke sa džemom od kajsija",
            image: "img/palacinke-dzem.jpg",
            description: "Dve palačinke, džem od kajsija.",
            price: "435.00 RSD",
        },
        {   name: "Slatki zalogaj (mašnice) - (POSNO - opciono)",
            image: "img/masnice.jpg",
            description: "Prženo testo sa slatkim dodacima, posna varijanta sadrži samo džem od kajsije.",
            price: "510.00 RSD",
        },
        {   name: "Pizza švarcvald",
            image: "img/svarcvald-pica.jpg",
            description: "Čokoladni krem, sos od višanja 60g, mlevena plazma, toping.",
            price: "635.00 RSD",
        },
        {   name: "Pizza šeherezada",
            image: "img/seherezada-pica.jpg",
            description: "Beli krem, sos od malina 60g, mlevena plazma.",
            price: "635.00 RSD",
        },
        {   name: "Waffle čoko krem",
            image: "img/vafli-coko-krem.jpg",
            description: "Waffle kolač, čokoladni krem, toping, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Waffle beli krem",
            image: "img/vafli-beli-krem.jpg",
            description: "Waffle kolač, mlečni beli krem, toping, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Waffle švarcvald",
            image: "img/vafli-svarcvald.jpg",
            description: "Waffle kolač, čokoladni krem, toping, plazma, sos od višanja.",
            price: "510.00 RSD",
        },
        {   name: "Waffle šeherezada",
            image: "img/vafli-seherezada.jpg",
            description: "Waffle kolač, mlečni beli krem, toping, plazma, sos od malina.",
            price: "510.00 RSD",
        },
        {   name: "Waffle kajsija",
            image: "img/vafli-kajsija.jpg",
            description: "Waffle kolač, džem od kajsija.",
            price: "450.00 RSD",
        },
        {   name: "Plazma urmašice",
            image: "img/urmasice.jpg",
            description: "",
            price: "255.00 RSD",
        },
        {   name: "Čoko sufle",
            image: "img/sufle.jpg",
            description: "Sufle sa lešnik kremom i prelivom od maline.",
            price: "310.00 RSD",
        },
        {   name: "Mafin malina/čoko krem",
            image: "img/mafini.jpg",
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