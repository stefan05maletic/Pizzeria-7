import MeniSection from "../components/meni-section"
import butkica from "../images/butkica.jpg"
import njoke from "../images/njoke.jpg"
import picaPrsutaPark from "../images/picaPrsutaPark.jpg"
import cevapiPodKapom from "../images/cevapiPodKapom.jpg"
import kolacMak from "../images/kolacMak.PNG"
import przenicePrsuta from "../images/przenicePrsuta.PNG"

export default function RecomendationPark() {
    const recomendationOffer = [
        {
            name: "Butka na sprat",
            image: butkica,
            description: "Aromatizovan krompir, ren dresing, dimljeni sos, butka, hleb.",
        },
        {
            name: "Alfredo",
            image: njoke,
            description: "Njoke, piletina, bešamel, beli luk, bosiljak, začini.",
        },
        {
            name: "Pica Pršuta",
            image: picaPrsutaPark,
            description: "Pelat, sir, pršuta, rukola, cherry, parmezan",
        },
        {
            name: "Ćevapi pod kapom",
            image: cevapiPodKapom,
            description: "Ćevapi 250g, kajmak umak sa sitom, urnebes, tucana, luk, hleb",
        },
        {
            name: "Mak plazma tortica",
            image: kolacMak,
            description: "Kolač od plazme i maka.",
        },
        {
            name: "Prženice pršuta i kajmak",
            image: przenicePrsuta,
            description: "Przenice pršuta, paradajz, jaje, kajmak, ajvar.",
        },
    ]
    return (
        <div>
            <h3 className="title-meniPg">Preporuka</h3>
            <div className="meni-container meni-recomendation">
                {recomendationOffer.map((parts, index) => (
                    <MeniSection key={index} parts={parts} />
                ))}
            </div>
        </div>
    )
}