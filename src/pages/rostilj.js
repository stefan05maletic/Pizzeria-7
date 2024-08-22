import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Rostilj(){
    const rostiljOffer =[
        {   name: "Roštilj kobasica 200g",
            image: "../../public/img/rostilj-kobasica.jpg",
            description: "Kobasica 200g, pomfrit, karamelizovani luk, sezonska salata, senf, domaća lepinja.",
            price: "855.00 RSD",
        },
        {   name: "Belo meso sa sirom 250g",
            image: "../../public/img/belo-sir.jpg",
            description: "Pileći file 250g, sos od četiri vrste sira, pomfrit, sezonska salata, domaća lepinja.",
            price: "865.00 RSD",
        },
        {
            name: "Sicilijanska šnicla",
            image: "../../public/img/sicilijanska-snicla.jpg",
            description: "Pohovani pileći file, pelat, testenina u marinadi, kačkavalj, parmezan.",
            price: "965.00 RSD",
        },
        {   name: "Bečka pileća šnicla 250g",
            image: "../../public/img/becka.jpg",
            description: "Pileći file 250g, tzatziki sos pomfrit, sezonska salata, domaća lepinja.",
            price: "855.00 RSD",
        },
        {   name: "File sa slaninom i sirom 250g",
            image: "../../public/img/file-slanina-sir.jpg",
            description: "Pileći file 250g, pančeta slanina 50g, sir, kajmak, pomfrit, sezonska salata, domaća lepinja.",
            price: "1005.00 RSD",
        },
        {   name: "Piletina u sosu od gljiva",
            image: "../../public/img/piletina-gljive.jpg",
            description: "Pileći file 250g, sos sa šampinjonima, pomfrit, sezonska salata, domaća lepinja.",
            price: "855.00 RSD",
        },
        {   name: "Piletina sa kikirikijem",
            image: "../../public/img/piletina-kikiriki.jpg",
            description: "Pileći file 250g, sos od kikiriki putera, pomfrit, sezonska salata, domaća lepinja.",
            price: "855.00 RSD",
        },
        {   name: "Piletina u sosu od spanaća",
            image: "../../public/img/piletina-spanac.jpg",
            description: "Pileći file 250g, preliv od spanaća i parmezana, pomfrit, sezonska salata, domaća lepinja.",
            price: "855.00 RSD",
        },
        {   name: "Pileći file sa roštilja",
            image: "../../public/img/file-sa-rostilja.jpg",
            description: "Pileći file 250g, luk, pomfrit, sezonska salata, domaća lepinja.",
            price: "855.00 RSD",
        },
        {   name: "Curry piletina",
            image: "../../public/img/kari-piletina.jpg",
            description: "Pileći file 250g, curry sos, pomfrit, sezonska salata, domaća lepinja.",
            price: "865.00 RSD",
        },
        {   name: "Pileći batak 300g",
            image: "../../public/img/batak.jpg",
            description: "Batak 300g, luk, pomfrit, sezonska salata, domaća lepinja.",
            price: "855.00 RSD",
        },
        {   name: "Pohovani sir 200g",
            image: "../../public/img/pohovani-sir.jpg",
            description: "Pohovani kačkavalj, grilovano povrće, tzatziki sos, pomfrit, domaća lepinja.",
            price: "815.00 RSD",
        },
        {   name: "Pomfrit porcija 500g - POSNO",
            image: "../../public/img/pomfrit500g.jpg",
            description: "Pomfrit 500g, majonez",
            price: "400.00 RSD",
        },
        {   name: "Bačka čorba 0.5l",
            image: "../../public/img/corba.jpg",
            description: "Pileći file 130g, šargarepa, celer, kisela pavlaka, focaccia.",
            price: "535.00 RSD",
        },
        {   name: "Pasulj sa kobasicama",
            image: "../../public/img/pasulj.jpg",
            description: "Pasulj, roštilj kobasica, ljubičasti luk, sezonska salata, domaća lepinja.",
            price: "745.00 RSD",
        },
        {   name: "Juneći gulaš sa testeninom",
            image: "../../public/img/gulas.jpg",
            description: "Juneći gulaš, domaća testenina, sezonska salata, domaća lepinja.",
            price: "905.00 RSD",
        },
    ]
    return(
        <div>
            <h1 className="title-meniPg">Roštilj i tradicionalna jela</h1>
            <div className="meni-container">
                {rostiljOffer.map((parts,index)=>(
                    <MeniSection key={index} parts={parts}/>
                    ))}
            </div>
            <div className="back-tag">
                <a href="/meni">Nazad</a>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}