import MeniSection from "../components/meni-section"
import ustipciGrilovano from "../images/ustipci-grilovano.jpg"
import tuna from "../images/cebata-tuna.jpg"
import tunaSalata from "../images/tuna-salata.jpg"
import krambl from "../images/krambl.jpg"
import gljive from "../images/pica-gljive.jpg"
import vege from "../images/vege.jpg"

export default function Recomendation(){
    const recomendationOffer = [
        {
            name:"Uštipci sa grilovanim povrćem (POSNO - opciono)",
            image:ustipciGrilovano,
            description:"Uštipci 6kom, grilovano povrće, tzatziki sos, ajvar. Posna varijanta sadrži samo ajvar.",
            price:"480.00 RSD",
        },
        {   name: "Ćebata sa tunjevinom (POSNO)",
            image: tuna,
            description: "Tuna 80g, pelat, zelena salata, ljubičasti luk, paprika i kiseli krastavac.",
            price: "575.00 RSD",
        },
        {   name: "Tuna salata (POSNO)",
            image: tunaSalata,
            description: "Tunjevina 60g, krastavac, čeri paradajz, paprika, ljubčasti luk, crne masline, zelena salata, limun, kukuruz, fokaccia.",
            price: "810.00 RSD",
        },
        {
            name:"Krambl od jabuke sa sosom od višanja (POSNO)",
            image: krambl,
            description: "Pita sa jabukama, preliv sos od višanja.",
            price: "395.00 RSD",
        },  
        {   name: "Pizza gljive 32/50cm (POSNO - opciono)",
            image: gljive,
            description: "Beli pizza sos, kombinacija sireva, začinjeni šampinjoni, peršun. Posna varijanta sadrži pelat i biljni sir umesto belog pizza sosa.",
            price: "995.00/1570.00 RSD",
        },
        {   name: "Vegetariana 32/50cm (POSNO - opciono)",
            image: vege,
            description: "Pelat, kombinacija sireva, tikvice, paprika, šampinjoni, kukuruz šećerac, crne masline, pesto sos, rukola, čeri paradajz. Posna varijanta sadrži biljni sir.",
            price: "1020.00/1580.00 RSD",
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