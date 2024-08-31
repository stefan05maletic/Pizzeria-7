import Image from "../images/images"
export default function HeroSection(){
    const images =[
        "require('../images/jaja-kobasica.jpg').default",
        "require('../images/tuna-salata.jpg').default",
        "img/file-slanina-sir.jpg",
        "img/lazanjite.jpg",
        "img/gulas.jpg",
        "img/pica7.jpg",
        "img/ustipci-sunka.jpg",
        "img/belo-sir.jpg",
        "img/seherezada-palacinke.jpg"
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Pizzeria <span>7</span></h1>
                <p className="info">
                    Brand since 2012.<br></br>
                    Najbolji doručak, i najbolja pica u gradu! Ne propusti priliku, dođi što pre i uveri se u naš kvalitet.. Veliki izbor različitih pica, fantastičnih jela sa roštilja i nezaboravne paste sa domaćim taljatelama. Odaberi idealan obrok za sebe i poruči što pre!
                </p>
                <a href="/meni" className="btn" >Pogledaj meni</a>
            </div>
            <div className="col gallery">
                {images.map((src, id) => (
                <Image key={id} imgSrc={src} pt={"90%"}/>
                ))}       
            </div>
        </div>
    )
}