import { faBicycle, faBowlFood, faFish, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import biraMoreti from "../images/birra-moretti.png" 
import cocaCola from "../images/coca-cola.png" 
import goppion from "../images/goppion.png" 
import lasko from "../images/lasko_mobile.png" 
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
        <div className="panel-title">
            <h3>Naši sponzori</h3>
        </div>
        <div className="panel-table">
            <div className="panel-box">
                <img src={biraMoreti} alt="Birra Moretti"/>
            </div>
            <div className="panel-box">
                <img src={goppion} alt="Goppion"/>
            </div>
            <div className="panel-box">
                <img src={lasko} alt="Laško"/>
            </div>
            <div className="panel-box">
                <img src={cocaCola} alt="CocaCola"/>
            </div>
        </div>
        </>
    )
}