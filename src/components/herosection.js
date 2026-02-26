import { faPhone, faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../images/images"
import jajaKobasica from "../images/jaja-kobasica.jpg"
import tunaSalata from "../images/tuna-salata.jpg"
import fileSlaninaSir from "../images/file-slanina-sir.jpg"
import lazanjite from "../images/lazanjite.jpg"
import gulas from "../images/gulas.jpg"
import pica7 from "../images/pica7.jpg"
import ustipciSunka from "../images/ustipci-sunka.jpg"
import beloSir from "../images/belo-sir.jpg"
import seherezadaPalacinke from "../images/seherezada-palacinke.jpg"

export default function HeroSection(){
    const images =[
        jajaKobasica,
        tunaSalata,
        fileSlaninaSir,
        lazanjite,
        gulas,
        pica7,
        ustipciSunka,
        beloSir,
        seherezadaPalacinke
    ]

    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Pizzeria <span>7</span></h1>
                <p className="info">
                    <strong>Brand since 2012.</strong><br />
                    Najbolji doručak i najbolja pica u gradu! Ne propusti priliku, dođi što pre i uveri se u naš kvalitet. Veliki izbor različitih pica, fantastičnih jela sa roštilja i nezaboravne paste sa domaćim taljatelama. Odaberi idealan obrok za sebe i poruči odmah!
                </p>
                
                <div className="cta-buttons ">
                    <a href="https://guest.kono.bar/m-93g9it" target="_blank" rel="noreferrer" className="btn btn-menu btn-primary">
                        <FontAwesomeIcon icon={faBookOpen} className="icon-gap" /> Pogledaj meni
                    </a>
                    <a href="tel:+381668171717" className="btn btn-call btn-secondary">
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