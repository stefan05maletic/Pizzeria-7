import { Link } from "react-router-dom"
import Images from "./images"
export default function MeniCard({meni}){ 
    return(
        <div className="meni-card">
            <Images imgSrc={meni.image} pt="65%"/>
            <div className="meni-card-info">
                <h2 className="meni-title">{meni.name}</h2>
                <p className="description">{meni.description}</p>
                <Link className="view-btn" to={meni.path}>Pogledajte više</Link>
            </div>
        </div>
    )
}