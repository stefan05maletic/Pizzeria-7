import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Quart() {
    return (
        <section className="section quart-section">
            <div className="map-container"> 
                <iframe title="quart-area" className="map-area" src="https://www.google.com/maps/d/embed?mid=1otXiLEjjqHJcfn_-KHRGdzSpLqpkyTA&hl=en&ehbc=2E312F"
                allowFullScreen="" 
                loading="lazy"></iframe>
            </div>
            
            <div className="quart-description">
                <div className="description-header">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="marker-icon" />
                    <h3>Besplatna dostava u kvartu</h3>
                    <p className="time-info">Dostupno svakog dana: <strong>12:00 - 23:00h</strong></p>
                </div>

                <div className="quart-list-wrapper">
                    <ul className="list-col">
                        <li>Arhimandrita Jovana Rajića</li>
                        <li>Bulevar Kralja Petra I (1-26)</li>
                        <li>Bulevar Oslobođenja (1-65)</li>
                        <li>Berislava Berić</li>
                        <li>Braće Jovandić</li>
                        <li>Dimitrija Avramović</li>
                        <li>Dostojevskog</li>
                        <li>Dositejeva</li>
                        <li>Đorđa Markovića Kodera</li>
                        <li>Đurđa Brankovića</li>
                        <li>Felegi Tivadara</li>
                        <li>Hilandarska</li>
                    </ul>
                    <ul className="list-col">
                        <li>Jovana Subotića</li>
                        <li>Karađorđeva (1-26)</li>
                        <li>Kraljević Marka</li>
                        <li>Kisačka (1-66)</li>
                        <li>Lukijana Mušickog</li>
                        <li>Masarikova</li>
                        <li>Save Ljubojeva</li>
                        <li>Save Kovačevića</li>
                        <li>Slovačka</li>
                        <li>Vojvode Šupljikca</li>
                        <li>Vuka Karadžića</li>
                        <li>Zmaj Ognjena Vuka</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
