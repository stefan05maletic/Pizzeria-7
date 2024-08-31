import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Cebate(){
    const cebateOffer =[
        {   name: "Ćebata sa šunkom",
            image: "img/cebata-sunka.jpg",
            description: "Šunka 80g, kajmak, zelena salata, paradajz.",
            price: "460.00 RSD",
        },
        {   name: "Ćebata sa pohovanom piletinpm",
            image: "img/cebata-pohovana-piletina.jpg",
            description: "Pohovan pileći file 150g, tzatziki sos, pavlaka, zelena salata.",
            price: "535.00 RSD",
        },
        {   name: "Ćebata sa pršutom",
            image: "img/cebata-prsuta.jpg",
            description: "Pršuta 60g, kajmak, rukola, čeri paradajz, parmezan.",
            price: "615.00 RSD",
        },
        {   name: "Ćebata sa pečenom slaninom",
            image: "img/cebata-slanina.jpg",
            description: "Pečena slanina 70g, šampinjoni, pavlaka, zelena salata, paradajz.",
            price: "575.00 RSD",
        },
        {   name: "Pepperoni ćebata",
            image: "img/peperoni-cebata.jpg",
            description: "Pepperoni kobasica 80g, pavlaka, jaje, krastavac, dimljeni sir.",
            price: "520.00 RSD",
        },
        {   name: "Ćebata sa grilovanim povrćem (POSNO)",
            image: "img/cebata-grilovano.jpg",
            description: "Tikvice, paprika, šampinjoni, marinada od belog luka, kukuruz, čeri paradajz, maslinovo ulje.",
            price: "485.00 RSD",
        },
        {   name: "Ćebata sa tunjevinom (POSNO)",
            image: "img/cebata-tuna.jpg",
            description: "Tuna 80g, pelat, zelena salata, ljubičasti luk, paprika i kiseli krastavac.",
            price: "525.00 RSD",
        },
        {   name: "Giros ćebata",
            image: "img/giros.jpg",
            description: "Batak 250g, pomfrit 170g, tzatziki sos, zelena salata, ljubičasti luk.",
            price: "635.00 RSD",
        },
        {   name: "Index ćebata",
            image: "img/index-cebata.jpg",
            description: "Šunka, sir, šampinjoni, pavlaka, majonez, paradajz, zelena salata.",
            price: "540.00 RSD",
        },
        {   name: "Roštilj ćebata",
            image: "img/rostilj-cebata.jpg",
            description: "Roštilj kobasica, senf, ljubičasti luk, zelena salata, pavlaka.",
            price: "635.00 RSD",
        },
        {   name: "Cezar ćebata",
            image: "img/cezar-cebata.jpg",
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