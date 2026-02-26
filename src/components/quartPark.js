import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function QuartPark() {
    return (
        <section className="section quart-section">
            <div className="map-container">
                <iframe title="quart-area" className="map-area" src="https://www.google.com/maps/d/embed?mid=1tnnVd7C0Ru2qYGQ5nSzJu7d0iz0fClM&ehbc=2E312F" 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>
            
            <div className="quart-description">
                <div className="description-header">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="marker-icon" />
                    <h3>Besplatna dostava u kvartu (Park)</h3>
                    <p className="time-info">Dostupno svakog dana: <strong>13:00 - 21:00h</strong></p>
                </div>

                <div className="quart-list-wrapper">
                    <ul className="list-col">
                        <li>Kraljević Marka 20-60</li>
                        <li>Bulevar Kralja Petra I (7-10)</li>
                        <li>Berislava Berića</li>
                        <li>Kisačka 28-64A</li>
                        <li>Branka Radičevića</li>
                        <li>Đorđa Zličića 1-11</li>
                        <li>Radoja Domanovića 1-17</li>
                        <li>Karađorđeva 1-49</li>
                        <li>Koste Šokice</li>
                        <li>Save Đisalova</li>
                        <li>Jovana Cvijića</li>
                    </ul>
                    <ul className="list-col">
                        <li>Dositejeva</li>
                        <li>Temerinska 1-57</li>
                        <li>Patrijarha Čarnojevića 1-23</li>
                        <li>Jug Bogdana 1-23</li>
                        <li>Bele Njive 1-11</li>
                        <li>Gundulićeva 1-10</li>
                        <li>Almaška 1-12</li>
                        <li>Tekelijina</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
