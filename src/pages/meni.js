import MeniCard from "../components/meni-card"
import Contact from "../components/contact"
import dorucak from "../images/dorucak.png"
import cebata from "../images/cebata.png"
import pizza from "../images/pizza.png"
import pasta from "../images/pasta.png"
import rostilj from "../images/rostilj.png"
import deserti from "../images/desert.png"
import dodaci from "../images/dodaci.png"
import salata from "../images/salata.png"
import { Helmet } from "react-helmet"
export default function Meni(){
    const offer =[
        {   name: "Doručak",
            image: dorucak, 
            description: "Jaja na oko, omlet, doručak pice, kajgane, uštipci..",
            path: "/dorucak",
        },
        {
            name:"Ćebate",
            image:cebata,
            description:"Razne vrste sendviča, poznatijih pod italijanskim nazivom 'Ciabatta'",
            path:"/cebate",
        },
        {
            name:"Pizze",
            image:pizza,
            description:"Razne vrste pica, od klasičnih, do onih za prave gurmane",
            path:"/pizze",
        },
        {
            name:"Paste",
            image:pasta, 
            description:"Poznato italijansko jelo sa domaćim taljatelama, predstavlja pravi izbor za ukusan ručak!",    
            path:"/paste",
        },
        {
            name:"Obrok salate",
            image:salata, 
            description:"Ukoliko ste ipak za nešto zdraviji obrok, onda su naše salate pravi izbor za vas",
            path:"/salate",
        },
        {
            name:"Roštilj i tradicionalna jela",
            image:rostilj,
            description:"Pileći specijaliteti sa raznim vrstama preliva",
            path:"/rostilj",
        },
        {
            name:"Deserti",
            image:deserti,
            description:"Najbolje za kraj, zasladite se sa uzivanjem",
            path:"/deserti",
        },
        {
            name:"Dodaci",
            image:dodaci,   
            description:"Ukoliko smo nešto zaboravili kao sastojak, ispravite nas!",
            path: "/dodaci",
        }
    ]
    return(
        <div>
            <Helmet>
                <title>Meni</title>
                <meta
                name="description"
                content="Odaberite pravi obrok za vas!"
                />
            </Helmet>
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