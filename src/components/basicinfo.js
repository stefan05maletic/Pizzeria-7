import logo2 from "../images/logo2.png"

export default function BasicInfo() {
    const list = [
        "Nalazimo se na adresi Kraljević Marka 23, Novi Sad",
        "Brend poverenja koji traje od 2012. godine",
        "Domaće testenine, roštilj, obrok salate i još mnogo toga",
        "Prepoznatljivi smo po najobilnijim porcijama u gradu",
        "Uživajte i u našem posnom meniju",
        "Brza dostava na vašu adresu",
        "Radno vreme: 07-23h, svakog dana (Pon-Ned)"
    ]

    return (
        <div className="section basicInfo">
            <div className="col img">
                <img src={logo2} alt="Pizzeria 7 Logo" />
            </div>
            <div className="col typography">
                <h2 className="title">Ko smo mi?</h2>
                {list.map((item, index) => (
                    <p className="information-item" key={index}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}