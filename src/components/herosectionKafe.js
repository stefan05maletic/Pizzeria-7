import Image from "../images/images"
import kasa from "../images/kaša.jpg"
import koktel2 from "../images/koktel2.jpg"
import koktel from "../images/koktel.jpg"
import bira from "../images/bira.PNG"
import wafle from "../images/wafle.PNG"
import late from "../images/late.PNG"
import koktel3 from "../images/koktel3.PNG"
import cedjena from "../images/cedjena.PNG"
import kapucino from "../images/kapucino.jpg"
export default function HeroSectionKafe(){
    const images =[
        kasa,
        koktel2,
        koktel,
        bira,
        wafle,
        late,
        koktel3,
        cedjena,
        kapucino
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Sedmica <span>Caffe</span></h1>
                <p className="info">
                    Idealno mesto za vašu prvu jutarnju kafu! Mesto gde započinju prave priče uz najkvalitetnije i najsvežije napitke.. Raznolika ponuda ceđenih sokova, osvežavajućih koktela, ili kvalitetne kafe. Poseti nas i uveri se!
                </p>
            </div>
            <div className="col gallery">
                {images.map((src, id) => (
                <Image key={id} imgSrc={src} pt={"90%"}/>
                ))}       
            </div>
        </div>
    )
}