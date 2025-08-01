import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import rostiljKobasica from "../images/rostilj-kobasica.jpg"
import beloSir from "../images/belo-sir.jpg"
import sicilijana from "../images/sicilijanska-snicla.jpg"
import becka from "../images/becka.jpg"
import fileSlaninaSir from "../images/file-slanina-sir.jpg"
import piletinaGljive from "../images/piletina-gljive.jpg"
import piletinaKikiriki from "../images/piletina-kikiriki.jpg"
import piletinaSpanac from "../images/piletina-spanac.jpg"
import fileSaRostilja from "../images/file-sa-rostilja.jpg"
import batak from "../images/batak.jpg"
import pohovaniSir from "../images/pohovani-sir.jpg"
import pomfrit from "../images/pomfrit500g.jpg"
import corba from "../images/corba.jpg"
import pasulj from "../images/pasulj.jpg"
import gulas from "../images/gulas.jpg"
import cevapi from "../images/cevapi.jpg"
import brziVoz from "../images/brzi-voz.jpg"
import hajduckiCevap from "../images/hajduckiCevap.jpg"
import paradajzCorba from "../images/paradajzCorba.jpg"
import { Helmet } from "react-helmet"
export default function Rostilj(){
    const rostiljOffer =[
        {   name: "Roštilj kobasica 200g",
            image: rostiljKobasica,
            description: "Kobasica 200g, pomfrit, luk, sezonska salata, senf, domaća lepinja.",
            price: "955.00 RSD",
        },
        {   name: "Belo meso sa sirom 250g",
            image: beloSir,
            description: "Pileći file 250g, sos od četiri vrste sira, pomfrit, sezonska salata, domaća lepinja.",
            price: "965.00 RSD",
        },
        {
            name: "Sicilijanska šnicla",
            image: sicilijana,
            description: "Pohovani pileći file, pelat, testenina u marinadi, kačkavalj, parmezan.",
            price: "1085.00 RSD",
        },
        {   name: "Bečka pileća šnicla 250g",
            image: becka,
            description: "Pileći file 250g, tzatziki sos pomfrit, sezonska salata, domaća lepinja.",
            price: "955.00 RSD",
        },
        {   name: "File sa slaninom i sirom 250g",
            image: fileSlaninaSir,
            description: "Pileći file 250g, pančeta slanina 50g, sir, kajmak, pomfrit, sezonska salata, domaća lepinja.",
            price: "1130.00 RSD",
        },
        {   name: "Piletina u sosu od gljiva",
            image: piletinaGljive,
            description: "Pileći file 250g, sos sa šampinjonima, pomfrit, sezonska salata, domaća lepinja.",
            price: "965.00 RSD",
        },
        {   name: "Piletina sa kikirikijem",
            image: piletinaKikiriki,
            description: "Pileći file 250g, sos od kikiriki putera, pomfrit, sezonska salata, domaća lepinja.",
            price: "965.00 RSD",
        },
        {   name: "Piletina u sosu od spanaća",
            image: piletinaSpanac,
            description: "Pileći file 250g, preliv od spanaća, pomfrit, sezonska salata, domaća lepinja.",
            price: "965.00 RSD",
        },
        {   name: "Pileći file sa roštilja",
            image: fileSaRostilja,
            description: "Pileći file 250g, luk, pomfrit, sezonska salata, domaća lepinja.",
            price: "935.00 RSD",
        },
        {   name: "Pileći batak 300g",
            image: batak,
            description: "Batak 300g, luk, pomfrit, sezonska salata, domaća lepinja.",
            price: "955.00 RSD",
        },
        {   name: "Pohovani sir 200g",
            image: pohovaniSir,
            description: "Pohovani kačkavalj, grilovano povrće, tzatziki sos, pomfrit, domaća lepinja.",
            price: "925.00 RSD",
        },
        {   name: "Pomfrit porcija 500g - POSNO",
            image: pomfrit,
            description: "Pomfrit 500g, majonez",
            price: "455.00 RSD",
        },
        {   name: "Bačka čorba 0.5l",
            image: corba,
            description: "Pileći file 130g, šargarepa, celer, kisela pavlaka, focaccia.",
            price: "595.00 RSD",
        },
        {   name: "Paradajz potaž 0.5l (POSNO - opciono)",
            image: paradajzCorba,
            description: "Paradajz pelat, šargarepa, luk, kukuruz, neutralna pavlaka, focaccia. Posna verzija ne sadrži pavlaku.",
            price: "430.00 RSD",
        },
        {   name: "Pasulj sa kobasicama",
            image: pasulj,
            description: "Pasulj, roštilj kobasica, ljubičasti luk, sezonska salata, domaća lepinja.",
            price: "835.00 RSD",
        },
        {   name: "Juneći gulaš sa testeninom",
            image: gulas,
            description: "Juneći gulaš, domaća testenina, sezonska salata, domaća lepinja.",
            price: "1015.00 RSD",
        },
        {   name: "7-ca ćevapi",
            image: cevapi,
            description: "250g ćevapa, pomfrit, luk, kajmak, domaća lepinja.",
            price: "1075.00 RSD",
        },
        {   name: "7-ca brzi voz",
            image: brziVoz,
            description: "Mix ćevapa, kobasice i pečene slanine, pomfrit, kajmak, luk i domaća lepinja.",
            price: "1225.00 RSD",
        },
        {
            name: "Hajdučki ćevap",
            image: hajduckiCevap,
            description: "Ćevapi u preklopljenom pica testu sa kajmakom.",
            price: "1135.00 RSD",
        },
    ]
    return(
        <div>
            <Helmet>
                <title>Roštilj</title>
                <meta
                name="description"
                content="Pileći specijaliteti sa raznim vrstama preliva."
                />
            </Helmet>
            <h1 className="title-meniPg">Roštilj i tradicionalna jela</h1>
            <div className="meni-container">
                {rostiljOffer.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
            <div className="back-tag">
                <Link  to="/meni">Nazad</Link>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}