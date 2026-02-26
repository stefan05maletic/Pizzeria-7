import { faBicycle, faBowlFood, faFish, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Panels() {
    return (
        <section className="section panel-wrapper">
            <h2 className="panel-title">Zašto izabrati nas?</h2>
            
            <div className="panel-table">
                <div className="panel-box">
                    <div className="icon-wrap">
                        <FontAwesomeIcon icon={faHouse} className="panel-icon" />
                    </div>
                    <h3>Domaćinska usluga</h3>
                </div>
                <div className="panel-box">
                    <div className="icon-wrap">
                        <FontAwesomeIcon icon={faBicycle} className="panel-icon" />
                    </div>
                    <h3>Besplatna dostava u kvartu</h3>
                </div>
                <div className="panel-box">
                    <div className="icon-wrap">
                        <FontAwesomeIcon icon={faBowlFood} className="panel-icon" />
                    </div>
                    <h3>Velike porcije</h3>
                </div>
                <div className="panel-box">
                    <div className="icon-wrap">
                        <FontAwesomeIcon icon={faFish} className="panel-icon" />
                    </div>
                    <h3>Posna hrana</h3>
                </div>
            </div>
        </section>
    )
}