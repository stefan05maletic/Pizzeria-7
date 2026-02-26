import { faLocationDot, faPhone, faClock } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-section brand-section">
                    <h2 className="footer-logo"> Novi Sad<span>7</span></h2>
                    <p className="tagline">Najbolji doručak i pica u gradu!</p>
                    <p className="copy">&copy; 2024 BrandSedmica.com</p>
                </div>
                <div className="footer-section location-section">
                    <h3 className="section-title">Pizzeria Sedmica</h3>
                    <div className="contact-info">
                        <p><FontAwesomeIcon icon={faPhone} className="icon"/><a href="tel:+381213032043">021 303 2043</a></p>
                        <p><FontAwesomeIcon icon={faPhone} className="icon"/><a href="tel:+381668171717">066 817 1717</a></p>
                        <p><FontAwesomeIcon icon={faLocationDot} className="icon" />Kraljević Marka 23, NS</p>
                        <p><FontAwesomeIcon icon={faClock} className="icon" />07:00 - 23:00</p>
                        <p><FontAwesomeIcon icon={faInstagram} className="icon" /><a href="https://www.instagram.com/pizzeriasedmica/" target="_blank" rel="noopener noreferrer">@pizzeriasedmica</a></p>
                    </div>
                </div>
                <div className="footer-section location-section">
                    <h3 className="section-title">Sedmica Park</h3>
                    <div className="contact-info">
                        <p><FontAwesomeIcon icon={faPhone} className="icon"/><a href="tel:+381213039623">021 303 9623</a></p>
                        <p><FontAwesomeIcon icon={faPhone} className="icon"/><a href="tel:+381668373777">066 837 3777</a></p>
                        <p><FontAwesomeIcon icon={faLocationDot} className="icon" />Kisačka 39, Novi Sad</p>
                        <p><FontAwesomeIcon icon={faClock} className="icon" />07:00 - 23:00</p>
                        <p><FontAwesomeIcon icon={faInstagram} className="icon" /><a href="https://www.instagram.com/sedmicapark/" target="_blank" rel="noopener noreferrer">@sedmicapark</a></p>
                    </div>
                </div>

            </div>
        </footer>
    )
}