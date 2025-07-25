import MeniSection from "../components/meni-section"
import ustipciPrsuta from "../images/ustipci-prsuta.jpg"
import domaca from "../images/domaca-kajgana.jpg" 
import cepkana from "../images/cepkana-junetina.jpg"
import genoveze from "../images/genoveze.jpg"
import smokingGun from "../images/smoking-gun.jpg"
import sicilijana from "../images/sicilijanska-snicla.jpg"

export default function Recomendation(){
    const recomendationOffer = [
    {
        name:"Uštipci pršuta",
        image:ustipciPrsuta,
        description:"Uštipci 6kom, pršuta 70g, kajmak, ajvar, jaje i paradajz.",
        price:"720.00 RSD",
    },
    {
        name:"Domaća kajgana",
        image:domaca,
        description:"Jaja 3kom, luk, slanina, sirni namaz, sezonska salata i domaća lepinja.",
        price:"495.00 RSD",
    },
    {  
        name: "Ćebata sa cepkanom junetinom",
        image: cepkana,
        description: "Začinjena blago pikantna cepkana junetina, sir, luk.",
        price: "785.00 RSD",
     },
    {  
        name: "Genovese 450g",
        image: genoveze,
        description: "Domaće tagliatelle, piletina, tikvice, neutralna pavlaka, pesto sos, začini. ",
        price: "1035.00 RSD",
    },
    {   
        name: "Smoking gun 32/50cm",
        image: smokingGun,
        description: "Pelat, kombinacija sireva, šunka, slanina, paprika, dimljeni sir.",
        price: "1075.00/1725.00 RSD",
    },
    {
        name: "Sicilijanska šnicla",
        image: sicilijana,
        description: "Pohovani pileći file, pelat, testenina u marinadi, kačkavalj, parmezan.",
        price: "1085.00 RSD",
    },
    ]
    return(
        <div>
            <h3 className="title-meniPg">Preporuka</h3>
            <div className="meni-container meni-recomendation">
                {recomendationOffer.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
        </div>
    )
}