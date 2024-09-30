import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
import sunka from "../images/dorucak-pica-sunka.jpg"
import slaninica from "../images/dorucak-pica-slaninica.jpg"
import povrce from "../images/dorucak-pica-povrce.jpg"
import prsuta from "../images/dorucak-pica-prsuta.jpg"
import peperoni from "../images/dorucak-pica-peperoni.jpg"
import novosadska from "../images/dorucak-pica-novosadska.jpg"
import kobasica from "../images/jaja-kobasica.jpg"
import slanina from "../images/jaja-slanina.jpg"
import jajaPrsuta from "../images/jaja-prsuta.jpg"
import pecenaSunka from "../images/jaja-sunka.jpg" 
import domaca from "../images/domaca-kajgana.jpg" 
import spanac from "../images/kajgana-spanac.jpg" 
import sunkaSir from "../images/omlet-sunka-sir.jpg" 
import omletPrsuta from "../images/omlet-prsuta.jpg" 
import grilovano from "../images/omlet-grilovano.jpg" 
import fetaSlanina from "../images/omlet-feta-slanina.jpg" 
import ustipciSunka from "../images/ustipci-sunka.jpg"
import ustipciPrsuta from "../images/ustipci-prsuta.jpg"
import ustipciGrilovano from "../images/ustipci-grilovano.jpg"
import ustipciSlatki from "../images/slatki-ustipci.jpg"
import kompletLepinja from "../images/komplet-lepinja.jpg"

export default function Dorucak(){
    const dorucakOffer =[
        {   name: "Doručak pizza šunka",
            image: sunka,
            description: "Pizza 25cm sa šunkom, jajima, sirom i šampinjonima.",
            price: "495.00 RSD",
        },
        {
            name:"Doručak pizza slaninica",
            image:slaninica,
            description:"Pizza 25cm sa pančetom, sirom, jajima, paradajzom i pavlakom.",
            price:"575.00 RSD",
        },
        {
            name:"Doručak pizza povrće",
            image:povrce,
            description:"Pizza 25cm sa tikvicama, paprikom, šampinjonima, čeri paradajzom, sirom i jajima.",
            price:"530.00 RSD",
        },
        {
            name:"Doručak pizza pršuta",
            image:prsuta, 
            description:"Pizza 25cm sa pršutom, pelatom, sirom, jajetom, čeri paradajzom i marinadom od belog luka.",    
            price:"750.00 RSD",
        },
        {
            name:"Doručak pizza Novosadska",
            image: novosadska, 
            description:"Pizza 25cm sadrži beli pizza sos, pepperoni kobasicu, piletinu, sir, kuvano jaje, kiseli krastavac i dimljeni sir.",
            price:"590.00 RSD",
        },
        {
            name:"Doručak pizza pepperoni",
            image: peperoni,
            description:"Pizza 25cm sadrži pelat, sir, jaje i pepperoni kobasicu.",
            price:"595.00 RSD",
        },
        {
            name:"Jaja sa kobasicom",
            image:kobasica,
            description:"Jaja na oko 3kom, kobasica 100g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"495.00 RSD",
        },
        {
            name:"Jaja sa slaninom",
            image:slanina,
            description:"Jaja na oko 3kom, slanina 45g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"495.00 RSD",
        },
        {
            name:"Jaja sa pršutom",
            image:jajaPrsuta,
            description:"Jaja na oko 3kom, pršuta 50g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"595.00 RSD",
        },
        {
            name:"Jaja sa pečenom šunkom",
            image:pecenaSunka,
            description:"Jaja na oko 3kom, šunka 70g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"480.00 RSD",
        },
        {
            name:"Domaća kajgana",
            image:domaca,
            description:"Jaja 3kom, luk, slanina, sirni namaz, sezonska salata i domaća lepinja.",
            price:"480.00 RSD",
        },
        {
            name:"Kajgana spanać",
            image:spanac,
            description:"Jaja 3kom, spanać, feta sir, sirni namaz, sezonska salata i domaća lepinja.",
            price:"480.00 RSD",
        },
        {
            name:"Omlet sa šunkom i sirom",
            image:sunkaSir,
            description:"Jaja 3kom, šunka 70g, sir, sirni namaz, sezonska salata i domaća lepinja.",
            price:"495.00 RSD",
        },
        {
            name:"Omlet sa pršutom",
            image:omletPrsuta,
            description:"Jaja 3kom, pršut 40g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"595.00 RSD",
        },
        {
            name:"Omlet sa grilovanim povrćem",
            image:grilovano,
            description:"Jaja 3kom, tikvice, šampinjoni, paprika, sirni namaz, sezonska salata i domaća lepinja.",
            price:"480.00 RSD",
        },
        {
            name:"Omlet sa fetom i slaninom",
            image:fetaSlanina,
            description:"Jaja 3kom, slanina 40g, feta sir 30g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"565.00 RSD",
        },
        {
            name:"Uštipci sa šunkom",
            image:ustipciSunka,
            description:"Uštipci 6kom, šunkarica 70g, kajmak, ajvar, jaje i paradajz.",
            price:"480.00 RSD",
        },
        {
            name:"Uštipci sa pršutom",
            image:ustipciPrsuta,
            description:"Uštipci 6kom, pršut 70g, kajmak, ajvar, jaje i paradajz.",
            price:"655.00 RSD",
        },
        {
            name:"Uštipci sa namazom",
            description:"Uštipci 8kom, 2 dodatka po izboru (feta, kajmak, ajvar, slatki dodatak).",
            price:"465.00 RSD",
        },
        {
            name:"Uštipci sa grilovanim povrćem (POSNO - opciono)",
            image:ustipciGrilovano,
            description:"Uštipci 6kom, grilovano povrće, tzatziki sos, ajvar. Posna varijanta sadrži samo sa ajvarom.",
            price:"480.00 RSD",
        },
        {
            name:"Slatki uštipci (POSNO - opciono)",
            image:ustipciSlatki,
            description:"Uštipci 8kom, čokoladni krem, mlečni beli krem, džem od kajsije. Posna varijanta sadrži samo džem od kajsije.",
            price:"495.00 RSD",
        },
        {
            name:"Komplet lepinja (SEZONSKI)",
            image:kompletLepinja,
            description:" Somun, kajmak, jaje, pretop. Može se poručiti samo u zimskom periodu.",
            price:"450.00 RSD",
        },
    ]
    return(
        <div>
            <h1 className="title-meniPg">Doručak</h1>
            <div className="meni-container">
                {dorucakOffer.map((parts,index)=>(
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