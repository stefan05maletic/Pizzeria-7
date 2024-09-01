import { faSquare, faEnvelope, faLocationDot, faPhone, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-section">
                <p className="title">PizzeriaSedmica.com</p>
                <p> &copy;| 2024 | </p>
            </div>
            <div className="footer-section">
                <p className="title">Kontaktirajte nas</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="social-icon"/> pizzeria7@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} className="social-icon"/>+381 21 303 2043</p>
                <p><FontAwesomeIcon icon={faPhone} className="social-icon"/>+381 66 817 1717</p>
                <p><FontAwesomeIcon icon={faLocationDot} className="social-icon" />Kraljević Marka 23 Novi Sad </p>
                <p><FontAwesomeIcon icon={faClock} className="social-icon"/>Ponedeljak - Nedelja 07:00-23:00</p>
            </div>
            <div className="footer-section">
                <p className="title">Društvena mreže</p>
                <p><FontAwesomeIcon icon={faSquare} className="social-icon"/>Instagram - @pizzeriasedmica</p>
            </div>
        </div>
    )
}