export default function QuartPark(){
    return(
        <div className="quart-section">
            <div className="map">
                <iframe title="quart-area" className="map-area" src="https://www.google.com/maps/d/embed?mid=1tnnVd7C0Ru2qYGQ5nSzJu7d0iz0fClM&ehbc=2E312F"></iframe>
            </div>
            <div className="quart-description">
                <h3>Ulice za koje je dostava besplatna u periodu 13-21h!</h3>
                <div className="quart-list">
                    <ul className="list1">
                        <li>Kraljević Marka 20-60</li>
                        <li>Bulevar Kralja Petra I (br. 7-10.)</li>
                        <li>Berislava Berića</li>
                        <li>Kisačka 28-64A</li>
                        <li>Branka Radičevič</li>
                        <li>Đorđa Zličića 1-11</li>
                        <li>Radoja Domanovića 1-17</li>
                        <li>Karađorđeva 1-49</li>
                        <li>Koste Šokice</li>
                        <li>Save Đisalova</li>
                        <li>Jovana Cvijića</li>
                    </ul>
                    <ul className="list2">
                        <li>Dositejeva</li>
                        <li>Temerinska 1-57</li>
                        <li>Patrijarha Čarnojevića 1-23</li>
                        <li>Jug Bogdana 1-23</li>
                        <li>Bele Njive 1-11</li>
                        <li>Gundulićeva 1-10</li>
                        <li>Almašla 1-12</li>
                        <li>Tekelijina</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}