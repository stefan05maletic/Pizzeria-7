import { faPhone, faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../images/images"
import pastaPark from "../images/pastaPark.jpg"
import fitPiletina from "../images/fitPiletina.jpg"
import salataPark from "../images/salataPark.jpg"
import butkica from "../images/butkica.jpg"
import njoke from "../images/njoke.jpg"
import palacinkeSlag from "../images/palacinkeSlag.jpg"
import piletinaFungi from "../images/piletinaFungi.jpg"
import pastaBolonjezePark from "../images/pastaBolonjezePark.jpg"
import rafaeloPalacinke from "../images/rafaeloPalacinke.jpg"

export default function HeroSectionPark(){
    const images =[
        pastaPark,
        fitPiletina,
        salataPark,
        butkica,
        njoke,
        palacinkeSlag,
        piletinaFungi,
        pastaBolonjezePark,
        rafaeloPalacinke
    ]

    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Sedmica <span>Park</span></h1>
                <p className="info">
                    Idealno mesto za vaše proslave! Organizuj večeru po povoljnim cenama za određenu vrstu proslave, a mi ćemo je učiniti nezaboravnom! Pozovi i rezerviši svoje mesto što pre..
                </p>

                <div className="cta-buttons">
                    <a href="https://guest.kono.bar/m-5kc5fr/category" target="_blank" rel="noreferrer" className="btn btn-menu btn-primary">
                        <FontAwesomeIcon icon={faBookOpen} className="icon-gap" /> Pogledaj meni
                    </a>
                    <a href="tel:+381668373777" className="btn btn-call btn-secondary">
                        <FontAwesomeIcon icon={faPhone} className="icon-gap" /> Pozovi i poruči
                    </a>
                </div>
            </div>

            <div className="col gallery">
                {images.map((src, id) => (
                    <Image key={id} imgSrc={src} pt={"90%"}/>
                ))}        
            </div>
        </div>
    )
}