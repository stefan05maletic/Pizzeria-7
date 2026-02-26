import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Proslave(){
    return(
        <div className="proslave-box">
                    <div className="proslave-text">
                        <h2><FontAwesomeIcon icon={faGlassCheers} /> Privatne Proslave</h2>
                        <p>Nudimo mogućnost organizacije privatnih proslava, ručkova i timbildinga u našem prelepom ambijentu.</p>
                        <p>Kapacitet: <strong>20-25 osoba</strong>.</p>
                    </div>
                    <div className="proslave-cta">
                        <a href="tel:+381668373777" className="btn">Rezerviši termin</a>
                    </div>
                </div>
    );
}