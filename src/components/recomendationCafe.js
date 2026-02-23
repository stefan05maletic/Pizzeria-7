import MeniSection from "../components/meni-section"
import espreso from "../images/espresso.jpg"
import kapucino from "../images/kapucino.jpg"
import late from "../images/late.PNG"

export default function RecomendationCafe() {
    const recomendationOffer = [
        {
            name: "Espresso",
            image: espreso,
            description: "Espreso je ukusan koncentrovani oblik kafe koji se služi u malim količinama. Često je osnova za mnoge druge napitke od kafe, kao što su kapućino, late, amerikano kafa i makijato. Espreso je intenzivan i smeo, ali ipak ukusan, i iz tog razloga se obično služi u malim šoljama za espreso.",
        },
        {
            name: "Kapućino",
            image: kapucino,
            description: "Kapućino je savršena ravnoteža espresa, umućenog mleka i pene. Tajna ove kafe je u strukturi i ravnomernoj podeli elemenata na jednake trećine. Stručno napravljen kapućino treba da bude bogat, ali ne sme da bude kiseo, i mora da ima slatkast ukus od mleka. A budući da se mleko zapravo ne umeša u kafu, espreso zadržava jači ukus.",
        },
        {
            name: "Latte",
            image: late,
            description: "Late ili caffè latte je kafa sa mlekom koja ima svilenkasti sloj pene kao najvažnije svojstvo napitka. Pravi late se pravi od jedne ili dve doze espresa, umućenog mleka i, na kraju, tankog sloja mlečne pene na vrhu. Kombinacija tih elemenata daje balansiranu kafu sa mlekom prijatnog izgleda i glatke teksture.",
        },
    ]
    return (
        <div>
            <div className="meni-container meni-recomendation">
                {recomendationOffer.map((parts, index) => (
                    <MeniSection key={index} parts={parts} />
                ))}
            </div>
        </div>
    )
}