import AmbienteKafe from "../components/ambienteKafe";
import HeroSectionKafe from "../components/herosectionKafe";
import BasicInfoKafe from "../components/basicinfoKafe";
import RecomendationCafe from "../components/recomendationCafe";
export default function Kafeterija(){
    return (
        <div>
            <AmbienteKafe/>
            <div className="container main">
                <HeroSectionKafe/>
                <BasicInfoKafe/>
                <RecomendationCafe/>
            </div>
        </div>
    )
}