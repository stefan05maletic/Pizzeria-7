import HeroSection from "../components/herosection";
import BasicInfo from "../components/basicinfo";
import Panels from "../components/panels";
import Background from "../components/background";
import Recomendation from "../components/recomendation";
import Quart from "../components/quart";
export default function Naslovna(){
    return (
        <div>
            <Background/>
            <div className="container main">
                <HeroSection/>
                <BasicInfo/>
                <Recomendation/>
                <Panels/>
            </div>
            <Quart/>
        </div>
    )
}