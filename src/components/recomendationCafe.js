import MeniSection from "../components/meni-section"; 
import espreso from "../images/espresso.jpg";
import kapucino from "../images/kapucino.jpg";
import late from "../images/late.PNG";

export default function RecomendationCafe() {
    const recomendationOffer = [
        {
            name: "Espresso",
            image: espreso,
            description: "Espreso je ukusan koncentrovani oblik kafe koji se služi u malim količinama. Intenzivan i smeo, savršena osnova za vaš dan.",
        },
        {
            name: "Kapućino",
            image: kapucino,
            description: "Savršena ravnoteža espresa, umućenog mleka i bogate pene. Stručno napravljen da bude bogat i slatkast.",
        },
        {
            name: "Latte",
            image: late,
            description: "Kafa sa mlekom koja ima svilenkasti sloj pene. Balansiran ukus sa glatkom teksturom za lagano uživanje.",
        },
    ]

    return (
        <section className="section cafe-recom-wrapper">
            <h2 className="section-title-center">Preporuka Kafeterije</h2>
            <div className="cafe-grid">
                {recomendationOffer.map((parts, index) => (
                    <div className="cafe-card-wrap" key={index}>
                        <MeniSection parts={parts} />
                    </div>
                ))}
            </div>
        </section>
    )
}