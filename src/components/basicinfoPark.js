import logo2 from "../images/parkLogo.jpg"
export default function BasicInfoPark() {
    const list =[
        "Nalazimo se na adresi Kisačka 39. u Novom Sadu",
        "Naš brend Sedmica postoji još od 2012. godine, a restoran je otvoren 2024. godine.",
        "Butkica predstavlja osnovni proizvod u sastojcima naših obroka, a pored nje nudimo širok izbor domaće testenine, njoka, pilećih specijaliteta, obrok salata kao i pica sendviča..",
        "Naš lokal je najpoznatiji po obilnim porcijama, kvalitetnim sastojcima i kompletnim obrocima",
        "U našem meniju se mogu naći i posni obroci, slatki dezerti, kao i sjajni kokteli!",
        "Vršimo i dostavu, ukoliko se nalazite u blizini, ona je besplatna!",
        "Radno vreme je 07-23h, Pon-Ned"
    ]
    return(
    <div className="section basicInfo">
        <div className="col img">
            <img src={logo2} alt="Logo"/>     
        </div>
        <div className="col typography">
            <h2 className="title">Ko smo mi?</h2>
            {list.map((item, index) => (
                <p className="information-item" key={index}>{item}</p>
            ))}
        </div>
    </div>
    )
}