import { faBicycle, faBowlFood, faFish, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Panels(){
    return(
        <>
        <div className="panel-table">
            <div className="panel-box">
            <FontAwesomeIcon icon={faHouse} className="panel-icon"/>
            <h3>Domaćinska usluga</h3>
            </div>
            <div className="panel-box">
            <FontAwesomeIcon icon={faBicycle} className="panel-icon"/>
            <h3>Besplatna dostava u kvartu</h3>
            </div>
            <div className="panel-box">
            <FontAwesomeIcon icon={faBowlFood} className="panel-icon"/>
            <h3>Velike porcije</h3>
            </div>
            <div className="panel-box">
            <FontAwesomeIcon icon={faFish} className="panel-icon"/>
            <h3>Posna hrana</h3>
            </div>
        </div>
        </>
    )
}