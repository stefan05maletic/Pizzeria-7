import { Link } from "react-router-dom"
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
                <Link to="https://guest.kono.bar/m-5kc5fr/category" className="btn" >Pogledaj meni</Link>
            </div>
            <div className="col gallery">
                {images.map((src, id) => (
                <Image key={id} imgSrc={src} pt={"90%"}/>
                ))}       
            </div>
        </div>
    )
}