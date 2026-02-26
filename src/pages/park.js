import HeroSectionPark from "../components/herosectionPark";
import BasicInfoPark from "../components/basicinfoPark";
import Panels from "../components/panels";
import RecomendationPark from "../components/recomendationPark";
import QuartPark from "../components/quartPark";
import AmbientePark from "../components/ambientePark";
import Proslave from "../components/proslave";
import { Helmet } from "react-helmet";


export default function Park() {
    return (
        <>
            <Helmet><title>Sedmica | Park</title></Helmet>
            <AmbientePark />
            <div className="container main">
                <HeroSectionPark />
                <Proslave/>
                <BasicInfoPark />
                <RecomendationPark />
                <Panels />
            </div>
            <QuartPark />
        </>
    );
}