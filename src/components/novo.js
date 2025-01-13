import MeniSection from "../components/meni-section"
import krambl from "../images/krambl.jpg"
import hajduckiCevap from "../images/hajduckiCevap.jpg"
import paradajzCorba from "../images/paradajzCorba.jpg"
export default function Novo(){
    const novaPonuda = [
        {
            name: "Hajdučki ćevap",
            image: hajduckiCevap,
            description: "Ćevapi u preklopljenom pica testu sa kajmakom.",
            price: "1105.00 RSD",
        },
        {   name: "Paradajz potaž 0.5l (POSNO - opciono)",
            image: paradajzCorba,
            description: "Paradajz pelat, šargarepa, luk, kukuruz, neutralna pavlaka, focaccia. Posna verzija ne sadrži pavlaku.",
            price: "415.00 RSD",
        },
        {   name:"Krambl od jabuke sa sosom od višanja (POSNO)",
            image: krambl,
            description: "Pita sa jabukama, preliv sos od višanja.",
            price: "405.00 RSD",
        },
    ]
    return(
        <div>
            <h1 className="title-meniPg">Novo u ponudi!</h1>
            <div className="meni-container meni-recomendation">
                {novaPonuda.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
        </div>
    )
}