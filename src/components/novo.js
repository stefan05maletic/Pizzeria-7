import MeniSection from "../components/meni-section"
import pida from "../images/pida.jpg"
import hajduckiCevap from "../images/hajduckiCevap.jpg"
import krambl from "../images/krambl.jpg"
export default function Novo(){
    const novaPonuda = [
        {
            name: "Hajdučki ćevap",
            image: hajduckiCevap,
            description: "Ćevapi u preklopljenom pica testu sa kajmakom.",
            price: "1095.00 RSD",
        },
        {
            name: "Pide sa mesom i povrćem",
            image: pida,
            description: "Pica testo zapečeno sa mlevenim mesom i povrćem.",
            price: "1095.00 RSD",
        },
        {
            name:"Krambl od jabuke sa sosom od višanja (POSNO)",
            image: krambl,
            description: "Pita sa jabukama, preliv sos od višanja.",
            price: "395.00 RSD",
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