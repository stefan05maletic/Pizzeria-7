import logo2 from "../images/cafeLogo.PNG"
export default function BasicInfoKafe() {
    const list =[
        "Nalazimo se na adresi Bulevar Kralja Petra I broj 7 u Novom Sadu.",
        "Naš brend Sedmica postoji još od 2012. godine, a naša kafeterija je prva otvorena od svih naših lokala.",
        "Ideja o imenu 'Sedmica' je nastala po samoj adresi na kojoj se lokal nalazi.",
        "Služimo dve vrste kafe - Dolce i Arabica.",
        "U ponudi imamo više ceđenih miks sokova, a neki od najpopularnijih su detox mix i marmaris.",
        "Probajte i naše nove proizvode za zdrav i ukusan doručak - ovsene kaše!"
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