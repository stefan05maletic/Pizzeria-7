import MeniSection from "../components/meni-section"
import ustipciPrsuta from "../images/ustipci-prsuta.jpg"
import sicilijana from "../images/sicilijanska-snicla.jpg"
import genoveze from "../images/genoveze.jpg"
import cezarCebata from "../images/cezar-cebata.jpg"
import smokingGun from "../images/smoking-gun.jpg"
import salata7 from "../images/salata7.jpg"
export default function Recomendation(){
    const recomendationOffer = [
        {
            name:"Uštipci sa pršutom",
            image: ustipciPrsuta,
            description:"Uštipci 6kom, pršut 70g, kajmak, ajvar, jaje i paradajz.",
            price:"625.00 RSD",
        },
        {
            name: "Sicilijanska šnicla",
            image: sicilijana,
            description: "Pohovani pileći file, pelat, testenina u marinadi, kačkavalj, parmezan.",
            price: "965.00 RSD",
        },
        {   name: "Genovese 450g",
            image: genoveze,
            description: "Domaće tagliatelle, piletina, tikvice, neutralna pavlaka, pesto sos, začini. ",
            price: "930.00 RSD",
        },
        {   name: "Cezar ćebata",
            image: cezarCebata,
            description: "Cezar dresing, grilovani pileći file 120g, slanina pančeta 50g, zelena salata, paradajz, parmezan.",
            price: "645.00 RSD",
        },
        {   name: "Smoking gun 32/50cm",
            image: smokingGun,
            description: "Pelat, kombinacija sireva, šunka, slanina, paprika, dimljeni sir.",
            price: "975.00/1670.00 RSD",
        },
        {   name: "Salata sedmica",
            image: salata7,
            description: "Piletina, dimljeni sir, sezonski miks, čeri paradajz, krastavac, paprika, soja sos, beli luk, susam, focaccia.",
            price: "815.00 RSD",
        },

    ]
    return(
        <div>
            <h1 className="title-meniPg">Preporuka</h1>
            <div className="meni-container meni-recomendation">
                {recomendationOffer.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
        </div>
    )
}