export default function BasicInfo() {
    const list =[
        "Nalazimo se na adresi Kraljević Marka 23 u Novom Sadu",
        "Pizzerija postoji još od 2012. godine",
        "Osim pizza, nudimo širok izbor domaće testenine, pilećih specijaliteta, obrok salata..",
        "Naš lokal je najpoznatiji po obilnim porcijama",
        "U našem meniju se mogu naći i posni obroci",
        "Vršimo i dostavu",
        "Radno vreme je 07-23h, Pon-Ned"
    ]
    return(
    <div className="section basicInfo">
        <div className="col img">
            <img src="../../public/img/logo2.png" alt=""/>     
        </div>
        <div className="col typography">
            <h1 className="title">Ko smo mi?</h1>
            {list.map((item, index) => (
                <p className="information-item" key={index}>{item}</p>
            ))}
        </div>
    </div>
    )
}