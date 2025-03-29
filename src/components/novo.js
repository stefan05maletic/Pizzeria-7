import MeniSection from "../components/meni-section"
import hajduckiCevap from "../images/hajduckiCevap.jpg"
import lenjaPita from "../images/lenja-pita.jpg"
import medenoSrce from "../images/medeno-srce.jpg"
export default function Novo(){
    const novaPonuda = [
        {
            name: "Hajdučki ćevap",
            image: hajduckiCevap,
            description: "Ćevapi u preklopljenom pica testu sa kajmakom.",
            price: "1105.00 RSD",
        },
        {   name:"Medeno srce (POSNO)",
            image: medenoSrce,
            description: "Kolač sa kajsijom, višnjom ili malinom.",
            price: "405.00 RSD",
        },
        {   name: "Lenja pita sa jabukama i višnjom",
            image: lenjaPita,
            description: "Pita sa jabukama, višnjom i šećerom u prahu.",
            price: "405.00 RSD",
        },
    ]
    return(
        <div>
            <h3 className="title-meniPg">Novo u ponudi!</h3>
            <div className="meni-container meni-recomendation">
                {novaPonuda.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
        </div>
    )
}