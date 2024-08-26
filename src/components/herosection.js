import Image from "./images"
export default function HeroSection(){
    const images =[
        "../../public/img/jaja-kobasica.jpg",
        "../../public/img/tuna-salata.jpg",
        "../../public/img/file-slanina-sir.jpg",
        "../../public/img/lazanjite.jpg",
        "../../public/img/gulas.jpg",
        "../../public/img/pica7.jpg",
        "../../public/img/ustipci-sunka.jpg",
        "../../public/img/belo-sir.jpg",
        "../../public/img/seherezada-palacinke.jpg"
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
                {images.map((src, index) => (
                <Image key={index} imgSrc={src} pt={"90%"}/>
                ))}       
            </div>
        </div>
    )
}