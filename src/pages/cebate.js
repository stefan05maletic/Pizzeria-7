import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import sunka from "../images/cebata-sunka.jpg"
import pohovanaPiletina from "../images/cebata-pohovana-piletina.jpg"
import prsuta from "../images/cebata-prsuta.jpg"
import slanina from "../images/cebata-slanina.jpg"
import grilovano from "../images/cebata-grilovano.jpg"
import peperoni from "../images/peperoni-cebata.jpg"
import tuna from "../images/cebata-tuna.jpg"
import giros from "../images/giros.jpg"
import index from "../images/index-cebata.jpg"
import rostilj from "../images/rostilj-cebata.jpg"
import cezar from "../images/cezar-cebata.jpg"
export default function Cebate(){
    const cebateOffer =[
        {   name: "Ćebata sa šunkom",
            image: sunka,
            description: "Šunka 80g, kajmak, zelena salata, paradajz.",
            price: "460.00 RSD",
        },
        {   name: "Ćebata sa pohovanom piletinpm",
            image: pohovanaPiletina,
            description: "Pohovan pileći file 150g, tzatziki sos, pavlaka, zelena salata.",
            price: "535.00 RSD",
        },
        {   name: "Ćebata sa pršutom",
            image: prsuta,
            description: "Pršuta 60g, kajmak, rukola, čeri paradajz, parmezan.",
            price: "615.00 RSD",
        },
        {   name: "Ćebata sa pečenom slaninom",
            image: slanina,
            description: "Pečena slanina 70g, šampinjoni, pavlaka, zelena salata, paradajz.",
            price: "575.00 RSD",
        },
        {   name: "Pepperoni ćebata",
            image: peperoni,
            description: "Pepperoni kobasica 80g, pavlaka, jaje, krastavac, dimljeni sir.",
            price: "520.00 RSD",
        },
        {   name: "Ćebata sa grilovanim povrćem (POSNO)",
            image: grilovano,
            description: "Tikvice, paprika, šampinjoni, marinada od belog luka, kukuruz, čeri paradajz, maslinovo ulje.",
            price: "485.00 RSD",
        },
        {   name: "Ćebata sa tunjevinom (POSNO)",
            image: tuna,
            description: "Tuna 80g, pelat, zelena salata, ljubičasti luk, paprika i kiseli krastavac.",
            price: "525.00 RSD",
        },
        {   name: "Giros ćebata",
            image: giros,
            description: "Batak 250g, pomfrit 170g, tzatziki sos, zelena salata, ljubičasti luk.",
            price: "635.00 RSD",
        },
        {   name: "Index ćebata",
            image: index,
            description: "Šunka, sir, šampinjoni, pavlaka, majonez, paradajz, zelena salata.",
            price: "540.00 RSD",
        },
        {   name: "Roštilj ćebata",
            image: rostilj,
            description: "Roštilj kobasica, senf, ljubičasti luk, zelena salata, pavlaka.",
            price: "635.00 RSD",
        },
        {   name: "Cezar ćebata",
            image: cezar,
            description: "Cezar dresing, grilovani pileći file 120g, slanina pančeta 50g, zelena salata, paradajz, parmezan.",
            price: "645.00 RSD",
        },
    ]
    return(
        <div>
            <h1 className="title-meniPg">Ćebate</h1>
            <div className="meni-container">
                {cebateOffer.map((parts,index)=>(
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