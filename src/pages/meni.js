import MeniCard from "../components/meni-card"
import Contact from "../components/contact"
export default function Meni(){
    const offer =[
        {   name: "Doručak",
            image: "img/dorucak.png", 
            description: "Jaja na oko, omlet, doručak pice, kajgane, uštipci..",
            path: "/dorucak",
        },
        {
            name:"Ćebate",
            image:"img/cebata.png",
            description:"Razne vrste sendviča, poznatijih pod italijanskim nazivom 'Ciabatta'",
            path:"/cebate",
        },
        {
            name:"Pizze",
            image:"img/pizza.png",
            description:"Razne vrste pica, od klasičnih, do onih za prave gurmane",
            path:"/pizze",
        },
        {
            name:"Paste",
            image:"img/pasta.png", 
            description:"Poznato italijansko jelo sa domaćim taljatelama, predstavlja pravi izbor za ukusan ručak!",    
            path:"/paste",
        },
        {
            name:"Obrok salate",
            image:"img/salata.png", 
            description:"Ukoliko ste ipak za nešto zdraviji obrok, onda su naše salate pravi izbor za vas",
            path:"/salate",
        },
        {
            name:"Roštilj i tradicionalna jela",
            image:"img/rostilj.png",
            description:"Pileći specijaliteti sa raznim vrstama preliva",
            path:"/rostilj",
        },
        {
            name:"Deserti",
            image:"img/desert.png",
            description:"Najbolje za kraj, zasladite se sa uzivanjem",
            path:"/deserti",
        },
        {
            name:"Dodaci",
            image:"img/dodaci.png",   
            description:"Ukoliko smo nešto zaboravili kao sastojak, ispravite nas!",
            path: "/dodaci",
        }
    ]
    return(
        <div>
            <h1 className="title-meniPg">Pogledajte naš meni</h1>
            <div className="meni-container">
                {offer.map((meni,index)=>(
                    <MeniCard key={index} meni={meni}/>
                ))}
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
}