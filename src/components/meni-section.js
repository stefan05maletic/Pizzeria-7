import Images from "../images/images"
export default function PartOfMeni({parts}){
    return(
        <div className="meni-card">
            <Images imgSrc={parts.image} pt="65%" wd="100%"/>
            <div className="meni-card-info">
                <h4 className="meni-title">{parts.name}</h4>
                <p className="description">{parts.description}</p>
                <p className="meni-price">{parts.price}</p>
            </div>
        </div>
    )
}