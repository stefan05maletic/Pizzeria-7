import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Salate(){
    const salateOffer =[
        {   name: "Cezar salata",
            image: "../../public/img/cezar-salata.jpg",
            description: "Piletina 100g, slanina 50g, miks zelenih salata, čeri paradajz, dresing, krutoni, parmezan.",
            price: "855.00 RSD",
        },
        {   name: "Tuna salata (POSNO)",
            image: "../../public/img/tuna-salata.jpg",
            description: "Tunjevina 60g, krastavac, čeri paradajz, paprika, ljubčasti luk, crne masline, zelena salata, limun, kukuruz, fokaccia.",
            price: "755.00 RSD",
        },
        {   name: "Grčka salata - (POSNO - opciono)",
            image: "../../public/img/grcka-salata.jpg",
            description: "Feta sir, krastavci, čeri paradajz, paprika, masline, ljubčasti luk, origano, focaccia. Posna varijanta ne sadrži feta sir.",
            price: "655.00 RSD",
        },
        {   name: "Salata sedmica",
            image: "../../public/img/salata7.jpg",
            description: "Piletina, dimljeni sir, sezonski miks, čeri paradajz, krastavac, paprika, soja sos, beli luk, susam, focaccia.",
            price: "815.00 RSD",
        },
        {   name: "Mediteranska salata sa lignjama",
            image: "../../public/img/salata-lignje.jpg",
            description: "Ajsberg, zelena salata, kukuruz, čeri paradajz, masline, cezar dresing, lignje, focaccia.",
            price: "1065.00 RSD",
        },
        {   name: "Salata morski plodovi",
            image: "../../public/img/salata-morski-plodovi.jpg",
            description: "Ajsberg, zelena salata, kukuruz, čeri paradajz, masline, cezar dresing, morski plodovi, focaccia.",
            price: "1065.00 RSD",
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
                <a href="/meni">Nazad</a>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}