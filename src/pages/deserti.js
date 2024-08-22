import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Deserti(){
    const desertiOffer =[
        {   name: "Palačinke sa čokoladnim kremom (plazma po izboru)",
            image: "../../public/img/palacinke-coko-krem-plazma.jpg",
            description: "Dve palačinke, čoko krem, plazma, toping.",
            price: "450.00 RSD",
        },
        {   name: "Palačinke sa belim kremom (plazma po izboru)",
            image: "../../public/img/palacinke-beli-krem-plazma.jpg",
            description: "Dve palačinke, mlečni beli krem, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Švarcvald palačinke",
            image: "../../public/img/svarcvald-palacinke.jpg",
            description: "Dve palačinke, čokoladni krem, sos od višanja, plazma.",
            price: "510.00 RSD",
        },
        {   name: "Šeherezada palačinke",
            image: "../../public/img/seherezada-palacinke.jpg",
            description: "Dve palačinke, beli krem, sos od višanja, plazma",
            price: "510.00 RSD",
        },
        {   name: "Palačinke sa džemom od kajsija",
            image: "../../public/img/palacinke-dzem.jpg",
            description: "Dve palačinke, džem od kajsija.",
            price: "435.00 RSD",
        },
        {   name: "Slatki zalogaj (mašnice) - (POSNO - opciono)",
            image: "../../public/img/masnice.jpg",
            description: "Prženo testo sa slatkim dodacima, posna varijanta sadrži samo džem od kajsije.",
            price: "510.00 RSD",
        },
        {   name: "Pizza švarcvald",
            image: "../../public/img/svarcvald-pica.jpg",
            description: "Čokoladni krem, sos od višanja 60g, mlevena plazma, toping.",
            price: "635.00 RSD",
        },
        {   name: "Pizza šeherezada",
            image: "../../public/img/seherezada-pica.jpg",
            description: "Beli krem, sos od malina 60g, mlevena plazma.",
            price: "635.00 RSD",
        },
        {   name: "Waffle čoko krem",
            image: "../../public/img/vafli-coko-krem.jpg",
            description: "Waffle kolač, čokoladni krem, toping, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Waffle beli krem",
            image: "../../public/img/vafli-beli-krem.jpg",
            description: "Waffle kolač, mlečni beli krem, toping, plazma.",
            price: "450.00 RSD",
        },
        {   name: "Waffle švarcvald",
            image: "../../public/img/vafli-svarcvald.jpg",
            description: "Waffle kolač, čokoladni krem, toping, plazma, sos od višanja.",
            price: "510.00 RSD",
        },
        {   name: "Waffle šeherezada",
            image: "../../public/img/vafli-seherezada.jpg",
            description: "Waffle kolač, mlečni beli krem, toping, plazma, sos od malina.",
            price: "510.00 RSD",
        },
        {   name: "Waffle kajsija",
            image: "../../public/img/vafli-kajsija.jpg",
            description: "Waffle kolač, džem od kajsija.",
            price: "450.00 RSD",
        },
        {   name: "Plazma urmašice",
            image: "../../public/img/urmasice.jpg",
            description: "",
            price: "255.00 RSD",
        },
        {   name: "Čoko sufle",
            image: "../../public/img/sufle.jpg",
            description: "Sufle sa lešnik kremom i prelivom od maline.",
            price: "310.00 RSD",
        },
        {   name: "Mafin malina/čoko krem",
            image: "../../public/img/mafini.jpg",
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
                <a href="/meni">Nazad</a>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}