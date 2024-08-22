import { faSquare, faEnvelope, faLocationDot, faPhone  } from "@fortawesome/free-solid-svg-icons"
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
                <p><FontAwesomeIcon icon={faPhone} className="social-icon"/>06302100131</p>
                <p><FontAwesomeIcon icon={faLocationDot} className="social-icon" />Kraljević Marka 23 Novi Sad </p>
            </div>
            <div className="footer-section">
                <p className="title">Društvena mreže</p>
                <p><FontAwesomeIcon icon={faSquare} className="social-icon"/>Instagram - @pizzeriasedmica</p>
            </div>
        </div>
    )
}