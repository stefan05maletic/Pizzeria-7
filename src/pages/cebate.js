import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import sunka from "../images/cebata-sunka.jpg"
import pohovanaPiletina from "../images/cebata-pohovana-piletina.jpg"
import prsuta from "../images/cebata-prsuta.jpg"
import slanina from "../images/cebata-slanina.jpg"
import grilovano from "../images/cebata-grilovano.jpg"
import tuna from "../images/cebata-tuna.jpg"
import giros from "../images/giros.jpg"
import index from "../images/index-cebata.jpg"
import cezar from "../images/cezar-cebata.jpg"
import cepkana from "../images/cepkana-junetina.jpg"
import { Helmet } from "react-helmet"
export default function Cebate(){
    const cebateOffer =[
        {   name: "Ćebata sa šunkom",
            image: sunka,
            description: "Šunka 80g, kajmak, zelena salata, paradajz.",
            price: "505.00 RSD",
        },
        {   name: "Ćebata sa pohovanom piletinom",
            image: pohovanaPiletina,
            description: "Pohovan pileći file 150g, tzatziki sos, pavlaka, zelena salata.",
            price: "605.00 RSD",
        },
        {   name: "Ćebata suvi vrat i kajmak",
            image: prsuta,
            description: "Suvi vrat 60g, kajmak, rukola, čeri paradajz, parmezan.",
            price: "660.00 RSD",
        },
        {   name: "Ćebata sa pečenom slaninom",
            image: slanina,
            description: "Pečena slanina 70g, šampinjoni, pavlaka, zelena salata, paradajz.",
            price: "635.00 RSD",
        },
        {   name: "Ćebata sa grilovanim povrćem (POSNO)",
            image: grilovano,
            description: "Tikvice, paprika, šampinjoni, marinada od belog luka, kukuruz, čeri paradajz, maslinovo ulje.",
            price: "535.00 RSD",
        },
        {   name: "Ćebata sa tunjevinom (POSNO)",
            image: tuna,
            description: "Tuna 80g, pelat, zelena salata, ljubičasti luk, paprika i kiseli krastavac.",
            price: "580.00 RSD",
        },
        {   name: "Giros ćebata",
            image: giros,
            description: "Batak 200g, pomfrit 170g, tzatziki sos, zelena salata, ljubičasti luk.",
            price: "660.00 RSD",
        },
        {   name: "Index ćebata",
            image: index,
            description: "Šunka, sir, šampinjoni, pavlaka, majonez, paradajz, zelena salata.",
            price: "595.00 RSD",
        },
        {   name: "Cezar ćebata",
            image: cezar,
            description: "Cezar dresing, grilovani pileći file 120g, slanina pančeta 50g, zelena salata, paradajz, parmezan.",
            price: "660.00 RSD",
        },
        {   name: "Ćebata sa cepkanom junetinom",
            image: cepkana,
            description: "Začinjena blago pikantna cepkana junetina, sir, luk.",
            price: "765.00 RSD",
        },
    ]
    return(
        <div>
            <Helmet>
                <title>Ćebate</title>
                <meta
                name="description"
                content="Razne vrste sendviča, poznatijih pod italijanskim nazivom 'Ciabatta'"
                />
            </Helmet>
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