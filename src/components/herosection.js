import Image from "./images"
export default function HeroSection(){
    const images =[
        "/img/jaja-kobasica.jpg",
        "/img/tuna-salata.jpg",
        "/img/file-slanina-sir.jpg",
        "/img/lazanjite.jpg",
        "/img/gulas.jpg",
        "/img/pica7.jpg",
        "/img/ustipci-sunka.jpg",
        "/img/belo-sir.jpg",
        "/img/seherezada-palacinke.jpg"
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