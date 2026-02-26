import AmbienteKafe from "../components/ambienteKafe";
import HeroSectionKafe from "../components/herosectionKafe";
import BasicInfoKafe from "../components/basicinfoKafe";
import RecomendationCafe from "../components/recomendationCafe";
import BlueMountainSection from "../components/blueMountainSection";
import { Helmet } from "react-helmet";

export default function Kafeterija() {
    return (
        <>
            <Helmet><title>Sedmica | Kafeterija</title></Helmet>
            <AmbienteKafe />
            <div className="container main">
                <HeroSectionKafe />
                <BlueMountainSection/>
                <BasicInfoKafe />
                <RecomendationCafe />
            </div>
        </>
    );
}