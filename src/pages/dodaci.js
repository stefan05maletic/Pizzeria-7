import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import pomfrit from "../images/pomfrit-dodatak.jpg"
import ajvar from "../images/ajvar-dodatak.jpg"
import kajmak from "../images/kajmak-dodatak.jpg"
import kukuruz from "../images/kukuruz-dodatak.jpg"
import jaje from "../images/jaje-dodatak.jpg"
import focaccia from "../images/foccacia.jpg"
import feferoni from "../images/feferoni-dodatak.jpg"
import masline from "../images/masline-dodatak.jpg"
import rukola from "../images/rukola-dodatak.jpg"
import parmezan from "../images/parmezan-dodatak.jpg"
import grilovano from "../images/grilovano-povrce.jpg"
import prazni from "../images/prazni-ustipci-dodatak.jpg"
import prsuta from "../images/prsuta-dodatak.jpg"
import peperoni from "../images/peperoni-dodatak.jpg"
import slanina from "../images/slanina-dodatak.jpg"
import sezonska from "../images/sezonska-salata-dodatak.jpg"
import paradajzFeta from "../images/paradajz-feta-dodatak.jpg"
import paradajzLuk from "../images/paradajz-luk-dodatak.jpg"
import krem from "../images/krem-dodatak.jpg"
import preliv from "../images/preliv-dodatak.jpg"
import sir from "../images/tvrdi-sir-dodatak.jpg"
import kobasicaDodatak from "../images/kobasica-dodatak.jpg"
import { Helmet } from "react-helmet"


export default function Dodaci(){
    const dodaciOffer =[
        {   name: "Pomfrit 170g",
            image: pomfrit,
            price: "175.00 RSD",
        },
        {   name: "Ajvar 60g",
            image: ajvar,
            price: "120.00 RSD",
        },
        {   name: "Kajmak",
            image: kajmak,
            price: "150.00 RSD",
        },
        {   name: "Kukuruz šećerac",
            image: kukuruz,
            price: "100.00 RSD",
        },
        {   name: "Jaje",
            image: jaje,
            price: "90.00 RSD",
        },
        {   name: "Foccacia",
            image: focaccia,
            price: "125.00 RSD",
        },
        {   name: "Feferoni",
            image: feferoni,
            price: "95.00 RSD",
        },
        {   name: "Masline 40g",
            image: masline,
            price: "105.00 RSD",
        },
        {   name: "Parmezan 40g",
            image:parmezan,
            price: "145.00 RSD",
        },
        {   name: "Rukola",
            image: rukola,
            price: "125.00 RSD",
        },
        {   name: "Grilovano povrće",
            image: grilovano,
            price: "245.00 RSD",
        },
        {   name: "Prazni uštipci",
            image: prazni,
            price: "310.00 RSD",
        },
        {   name: "Suvi vrat 40g",
            image: prsuta,
            price: "275.00 RSD",
        },
        {   name: "Pepperoni kobasica 40g",
            image: peperoni,
            price: "145.00 RSD",
        },
        {   name: "Slanina 40g",
            image: slanina,
            price: "170.00 RSD",
        },
        {   name: "Sezonska salata",
            image: sezonska,
            price: "175.00 RSD",
        },
        {   name: "Paradajz salata sa fetom",
            image:paradajzFeta,
            price: "250.00 RSD",
        },
        {   name: "Paradajz salata sa lukom",
            image: paradajzLuk,
            price: "225.00 RSD",
        },
        {   name: "Krem",
            image: krem,
            price: "115.00 RSD",
        },
        {   name: "Preliv",
            image: preliv,
            price: "145.00 RSD",
        },
        {
            name: "Tvrdi sir",
            image: sir,
            price: "110.00 RSD",
        },
        {
            name: "Roštilj kobasica 100g",
            image: kobasicaDodatak,
            price:"245 RSD",
        }
    ]
    return(
        <div>
            <Helmet>
                <title>Dodaci</title>
                <meta
                name="description"
                content="Ukoliko smo nešto zaboravili kao sastojak, ispravite nas!"
                />
            </Helmet>
            <h1 className="title-meniPg">Dodaci</h1>
            <div className="meni-container">
                {dodaciOffer.map((parts,index)=>(
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