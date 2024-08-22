import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Dodaci(){
    const dodaciOffer =[
        {   name: "Pomfrit 170g",
            image: "../../public/img/pomfrit-dodatak.jpg",
            price: "155.00 RSD",
        },
        {   name: "Ajvar 60g",
            image: "../../public/img/ajvar-dodatak.jpg",
            price: "110.00 RSD",
        },
        {   name: "Kajmak",
            image: "../../public/img/kajmak-dodatak.jpg",
            price: "130.00 RSD",
        },
        {   name: "Kukuruz šećerac",
            image: "../../public/img/kukuruz-dodatak.jpg",
            price: "90.00 RSD",
        },
        {   name: "Jaje",
            image: "../../public/img/jaje-dodatak.jpg",
            price: "80.00 RSD",
        },
        {   name: "Foccacia",
            image: "../../public/img/foccacia.jpg",
            price: "115.00 RSD",
        },
        {   name: "Feferoni",
            image: "../../public/img/feferoni-dodatak.jpg",
            price: "85.00 RSD",
        },
        {   name: "Masline 40g",
            image: "../../public/img/masline-dodatak.jpg",
            price: "95.00 RSD",
        },
        {   name: "Parmezan 40g",
            image: "../../public/img/parmezan-dodatak.jpg",
            price: "130.00 RSD",
        },
        {   name: "Rukola",
            image: "../../public/img/rukola-dodatak.jpg",
            price: "115.00 RSD",
        },
        {   name: "Grilovano povrće",
            image: "../../public/img/grilovano-povrce.jpg",
            price: "225.00 RSD",
        },
        {   name: "Prazni uštipci",
            image: "../../public/img/prazni-ustipci-dodatak.jpg",
            price: "280.00 RSD",
        },
        {   name: "Pršut 40g",
            image: "../../public/img/prsuta-dodatak.jpg",
            price: "250.00 RSD",
        },
        {   name: "Pepperoni kobasica 40g",
            image: "../../public/img/peperoni-dodatak.jpg",
            price: "135.00 RSD",
        },
        {   name: "Slanina 40g",
            image: "../../public/img/slanina-dodatak.jpg",
            price: "165.00 RSD",
        },
        {   name: "Sezonska salata",
            image: "../../public/img/sezonska-salata-dodatak.jpg",
            price: "155.00 RSD",
        },
        {   name: "Paradajz salata sa fetom",
            image: "../../public/img/paradajz-feta-dodatak.jpg",
            price: "225.00 RSD",
        },
        {   name: "Paradajz salata sa lukom",
            image: "../../public/img/paradajz-luk-dodatak.jpg",
            price: "195.00 RSD",
        },
        {   name: "Krem",
            image: "../../public/img/krem-dodatak.jpg",
            price: "90.00 RSD",
        },
        {   name: "Preliv",
            image: "../../public/img/preliv-dodatak.jpg",
            price: "130.00 RSD",
        },
        {
            name: "Tvrdi sir",
            image: "../../public/img/tvrdi-sir-dodatak.jpg",
            price: "90.00 RSD",
        },
    ]
    return(
        <div>
            <h1 className="title-meniPg">Dodaci</h1>
            <div className="meni-container">
                {dodaciOffer.map((parts,index)=>(
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