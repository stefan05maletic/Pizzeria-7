import { Link } from "react-router-dom"
import MeniSection from "../components/meni-section"
import Contact from "../components/contact"
export default function Pizze(){
    const pizzeOffer =[
        {   name: "Margarita 32/50cm",
            image: "img/margarita.jpg",
            description: "Pelat, parmezan, mocarela",
            price: "855.00/1470.00 RSD",
        },
        {   name: "Capriciosa 32/50cm",
            image: "img/capriciosa.jpg",
            description: "Pelat, kombinacija sireva, šunka, šampinjoni, masline",
            price: "890.00/1550.00 RSD",
        },
        {   name: "Pepperoni classic 32/50cm",
            image: "img/peperoni-pica.jpg",
            description: "Pelat, kombinacija sireva, pepperoni kobasica.",
            price: "920.00/1590.00 RSD",
        },
        {   name: "Sedmica 32/50cm",
            image: "img/pica7.jpg",
            description: "Pelat, kombinacija sireva, slanina, blue cheese, crne masline, rukola i čeri paradajz.",
            price: "1035.00/1790.00 RSD",
        },
        {   name: "Smoking gun 32/50cm",
            image: "img/smoking-gun.png",
            description: "Pelat, kombinacija sireva, šunka, slanina, paprika, dimljeni sir.",
            price: "975.00/1670.00 RSD",
        },
        {   name: "Gurmanska 32/50cm",
            image: "img/gurmanska.jpg",
            description: "Pelat, piletina, kombinacija sireva, slanina, karamelizovani luk, šampinjoni, jaje, pepperoni kobasica.",
            price: "1035.00/1770.00 RSD",
        },
        {   name: "Chicken 32/50cm",
            image: "img/chiken-pica.jpg",
            description: "Beli pizza sos, sir, piletina, slanina, dimljeni sir, kukuruz šećerac i rukola.",
            price: "1035.00/1810.00 RSD",
        },
        {   name: "Curry 32/50cm",
            image: "img/kari-pica.jpg",
            description: "Beli pizza sos, sir, piletina, curry i chili sos, ljubičasti luk.",
            price: "1005.00/1770.00 RSD",
        },
        {   name: "Prosciutto 32/50cm",
            image: "img/pica-pršuta.jpg",
            description: "Pelat, kombinacija sireva, rukola, čeri paradajz, pršuta, masline, parmezan.",
            price: "1255.00/2170.00 RSD",
        },
        {   name: "Quattro formaggi 32/50cm",
            image: "img/quatro-pica.jpg",
            description: "Pelat, kombinacija sireva - kačkavalj, blue cheese, parmezan, dimljeni sir, bosiljak.",
            price: "965.00/1670.00 RSD",
        },
        {   name: "Tuna 32/50cm (POSNO - opciono)",
            image: "img/tuna-pica.jpg",
            description: "Pelat, kombinacija sireva, tuna, ljubičasti luk, čeri paradajz, kukuruz, kiseli krastavci. Posna varijanta sadrži biljni sir.",
            price: "975.00/1690.00 RSD",
        },
        {   name: "Pizza gljive 32/50cm (POSNO - opciono)",
            image: "img/pica-gljive.jpg",
            description: "Beli pizza sos, kombinacija sireva, začinjeni šampinjoni, peršun. Posna varijanta sadrži biljni sir.",
            price: "905.00/1570.00 RSD",
        },
        {   name: "Pub (pivska) 32/50cm",
            image: "img/pub-pica.jpg",
            description: "Beli pizza sos, kombinacija sireva, roštilj kobasica, ljubičasti luk, peršun.",
            price: "1055.00/1810.00 RSD",
        },
        {   name: "Chicken pesto 32/50cm",
            image: "img/chicken-pesto.jpg",
            description: "Kombinacija sireva, piletina, grilovana paprika, pesto sos.",
            price: "1045.00/1790.00 RSD",
        },
        {   name: "Vegetariana 32/50cm (POSNO - opciono)",
            image: "img/vege.png",
            description: "Pelat, kombinacija sireva, tikvice, paprika, šampinjoni, kukuruz šećerac, crne masline, pesto sos, rukola, čeri paradajz. Posna varijanta sadrži biljni sir.",
            price: "940.00/1580.00 RSD",
        },
        {   name: "Pepperoni extra hot 32/50cm",
            image: "img/extra-hot.png",
            description: "Pelat, kombinacija sireva, pepperoni kobasica, chili sos, feferoni.",
            price: "965.00/1670.00 RSD",
        },
        {   name: "Calzona",
            image: "img/kalcona.jpg",
            description: "Beli pizza sos, kajmak, šunka, pršut, piletina, kombinacija sireva.",
            price: "1005.00 RSD",
        },
        

    ]
    return(
        <div>
            <h1 className="title-meniPg">Pizze</h1>
            <div className="meni-container">
                {pizzeOffer.map((parts,index)=>(
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