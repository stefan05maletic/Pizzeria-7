import HeroSectionPark from "../components/herosectionPark";
import BasicInfoPark from "../components/basicinfoPark";
import Panels from "../components/panels";
import RecomendationPark from "../components/recomendationPark";
import QuartPark from "../components/quartPark";
import AmbientePark from "../components/ambientePark";
export default function Park(){
    return (
        <div>
            <AmbientePark/>
            <div className="container main">
                <HeroSectionPark/>
                <BasicInfoPark/>
                <RecomendationPark/>
                <Panels/>
            </div>
            <QuartPark/>
        </div>
    )
}