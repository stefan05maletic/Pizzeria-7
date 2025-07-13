import MeniSection from "../components/meni-section"
import hajduckiCevap from "../images/hajduckiCevap.jpg"
import ustipciPrsuta from "../images/ustipci-prsuta.jpg"
import medenoSrce from "../images/medeno-srce.jpg"
export default function Novo(){
    const novaPonuda = [
        {
            name: "Hajdučki ćevap",
            image: hajduckiCevap,
            description: "Ćevapi u preklopljenom pica testu sa kajmakom.",
            price: "1135.00 RSD",
        },
        {   name:"Medeno srce (POSNO)",
            image: medenoSrce,
            description: "Kolač sa kajsijom, višnjom ili malinom.",
            price: "415.00 RSD",
        },
        {   name: "Uštipci sa pršutom",
            image: ustipciPrsuta,
            description: "6 uštipaka, pršuta, kajmak, ajvar, kuvano jaje, paradajz.",
            price: "720.00 RSD",
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