import { faSquare, faLocationDot, faPhone, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-section">
                <p className="title">PizzeriaSedmica.com</p>
                <p> &copy;| 2024 | </p>
            </div>
            <div className="footer-section">
                <p className="title">PizzeriaSedmica</p>
                <p><FontAwesomeIcon icon={faPhone} className="social-icon"/><a href="tel:+021 303 2043">+021 303 2043</a></p>
                <p><FontAwesomeIcon icon={faPhone} className="social-icon"/><a href="tel:+381 21 303 2043">+381 66 817 1717</a></p>
                <p><FontAwesomeIcon icon={faLocationDot} className="social-icon" />Kraljević Marka 23 Novi Sad </p>
                <p><FontAwesomeIcon icon={faClock} className="social-icon"/>Ponedeljak - Nedelja 07:00-23:00</p>
                <p><FontAwesomeIcon icon={faSquare} className="social-icon"/>Instagram -  <a href="https://www.instagram.com/pizzeriasedmica/" target="_blank" rel="noopener noreferrer">@pizzeriasedmica</a></p>
            </div>
            <div className="footer-section">
                <p className="title">Park</p>
                <p><FontAwesomeIcon icon={faPhone} className="social-icon"/><a href="tel:+021 303 9623">+021 303 9623</a></p>
                <p><FontAwesomeIcon icon={faPhone} className="social-icon"/><a href="tel:+381 66 837 3777">+381 66 837 3777</a></p>
                <p><FontAwesomeIcon icon={faLocationDot} className="social-icon" />Kisačka 39 Novi Sad </p>
                <p><FontAwesomeIcon icon={faClock} className="social-icon"/>Ponedeljak - Nedelja 07:00-23:00</p>
                <p><FontAwesomeIcon icon={faSquare} className="social-icon"/>Instagram - <a href="https://www.instagram.com/sedmicapark/" target="_blank" rel="noopener noreferrer">@sedmicapark</a></p>
            </div>
        </div>
    )
}