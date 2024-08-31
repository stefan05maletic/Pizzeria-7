import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Dorucak(){
    const dorucakOffer =[
        {   name: "Doručak pizza šunka",
            image: "./img/dorucak-pica-sunka.jpg",
            description: "Pizza 25cm sa šunkom, jajima, sirom i šampinjonima.",
            price: "455.00 RSD",
        },
        {
            name:"Doručak pizza slaninica",
            image:"./img/dorucak-pica-slaninica.jpg",
            description:"Pizza 25cm sa pančetom, sirom, jajima, paradajzom i pavlakom.",
            price:"525.00 RSD",
        },
        {
            name:"Doručak pizza povrće",
            image:"./img/dorucak-pica-povrce.jpg",
            description:"Pizza 25cm sa tikvicama, paprikom, šampinjonima, čeri paradajzom, sirom i jajima.",
            price:"485.00 RSD",
        },
        {
            name:"Doručak pizza pršuta",
            image:"../../public/img/dorucak-pica-prsuta.jpg", 
            description:"Pizza 25cm sa pršutom, pelatom, sirom, jajetom, čeri paradajzom i marinadom od belog luka.",    
            price:"680.00 RSD",
        },
        {
            name:"Doručak pizza Novosadska",
            image:"../../public/img/dorucak-pica-novosadska.jpg", 
            description:"Pizza 25cm sadrži beli pizza sos, pepperoni kobasicu, piletinu, sir, kuvano jaje, kiseli krastavac i dimljeni sir.",
            price:"535.00 RSD",
        },
        {
            name:"Doručak pizza pepperoni",
            image:"../../public/img/dorucak-pica-peperoni.jpg",
            description:"Pizza 25cm sadrži pelat, sir, jaje i pepperoni kobasicu.",
            price:"545.00 RSD",
        },
        {
            name:"Jaja sa kobasicom",
            image:"../../public/img/jaja-kobasica.jpg",
            description:"Jaja na oko 3kom, kobasica 100g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"450.00 RSD",
        },
        {
            name:"Jaja sa slaninom",
            image:"../../public/img/jaja-slanina.jpg",
            description:"Jaja na oko 3kom, slanina 45g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"450.00 RSD",
        },
        {
            name:"Jaja sa pršutom",
            image:"../../public/img/jaja-prsuta.jpg",
            description:"Jaja na oko 3kom, pršuta 50g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"545.00 RSD",
        },
        {
            name:"Jaja sa pečenom šunkom",
            image:"../../public/img/jaja-sunka.jpg",
            description:"Jaja na oko 3kom, šunka 70g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"435.00 RSD",
        },
        {
            name:"Domaća kajgana",
            image:"../../public/img/domaca-kajgana.jpg",
            description:"Jaja 3kom, luk, slanina, sirni namaz, sezonska salata i domaća lepinja.",
            price:"435.00 RSD",
        },
        {
            name:"Kajgana spanać",
            image:"../../public/img/kajgana-spanac.jpg",
            description:"Jaja 3kom, spanać, feta sir, sirni namaz, sezonska salata i domaća lepinja.",
            price:"435.00 RSD",
        },
        {
            name:"Omlet sa šunkom i sirom",
            image:"../../public/img/omlet-sunka-sir.jpg",
            description:"Jaja 3kom, šunka 70g, sir, sirni namaz, sezonska salata i domaća lepinja.",
            price:"450.00 RSD",
        },
        {
            name:"Omlet sa pršutom",
            image:"../../public/img/omlet-prsuta.jpg",
            description:"Jaja 3kom, pršut 40g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"545.00 RSD",
        },
        {
            name:"Omlet sa grilovanim povrćem",
            image:"../../public/img/omlet-grilovano.jpg",
            description:"Jaja 3kom, tikvice, šampinjoni, paprika, sirni namaz, sezonska salata i domaća lepinja.",
            price:"435.00 RSD",
        },
        {
            name:"Omlet sa dimljenim sirom",
            image:"../../public/img/omlet-dimljeni-sir.jpg",
            description:"Jaja 3kom, dimljeni sir 70g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"480.00 RSD",
        },
        {
            name:"Omlet sa fetom i slaninom",
            image:"../../public/img/omlet-feta-slanina.jpg",
            description:"Jaja 3kom, slanina 40g, feta sir 30g, sirni namaz, sezonska salata i domaća lepinja.",
            price:"515.00 RSD",
        },
        {
            name:"Uštipci sa šunkom",
            image:"../../public/img/ustipci-sunka.jpg",
            description:"Uštipci 6kom, šunkarica 70g, kajmak, ajvar, jaje i paradajz.",
            price:"435.00 RSD",
        },
        {
            name:"Uštipci sa pršutom",
            image:"../../public/img/ustipci-prsuta.jpg",
            description:"Uštipci 6kom, pršut 70g, kajmak, ajvar, jaje i paradajz.",
            price:"625.00 RSD",
        },
        {
            name:"Uštipci sa grilovanim povrćem (POSNO - opciono)",
            image:"../../public/img/ustipci-grilovano.jpg",
            description:"Uštipci 6kom, grilovano povrće, tzatziki sos, ajvar. Posna varijanta sadrži samo sa ajvarom.",
            price:"435.00 RSD",
        },
        {
            name:"Namazani uštipci",
            image:"../../public/img/namazani-ustipci.jpg",
            description:"Uštipci 8kom, sirni namaz sa svežom crvenom paprikom pavlakom i susamom.",
            price:"420.00 RSD",
        },
        {
            name:"Slatki uštipci (POSNO - opciono)",
            image:"../../public/img/slatki-ustipci.jpg",
            description:"Uštipci 8kom, čokoladni krem, mlečni beli krem, džem od kajsije. Posna varijanta sadrži samo džem od kajsije.",
            price:"435.00 RSD",
        },
        {
            name:"Komplet lepinja (SEZONSKI)",
            image:"../../public/img/komplet-lepinja.jpg",
            description:"Domaća lepinja, kajmak, jaje, pretop. Može se poručiti samo u zimskom periodu.",
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