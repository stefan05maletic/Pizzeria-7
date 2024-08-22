import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Contact() {
    return (
        <div className="contact-container">
            <div className="map">
                <iframe title="location" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kraljevi%C4%87%20Marka%2023%20Novi%20Sad+(Pizzeria%207)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
            </div>
            <div className="contact-information">
                <h2>Kontaktirajte nas</h2>
                <p>Poručite na broj:</p>
                <p><FontAwesomeIcon icon={faPhone} className="icon"/> 3817771881</p>
                <p><FontAwesomeIcon icon={faPhone} className="icon"/> 3817771881</p>
                <h4>Radno vreme</h4>
                <p><FontAwesomeIcon icon={faClock} className="icon"/>Ponedeljak - Nedelja 07:00-23:00</p>
            </div>
        </div>
    )
}