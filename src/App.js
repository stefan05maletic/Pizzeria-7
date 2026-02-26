import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Pizzeria from "./pages/pizzeria";
import Park from "./pages/park";
import Kafeterija from "./pages/kafeterija";
import LandingPage from "./pages/landingPage";
import { Helmet } from "react-helmet";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  const getThemeClass = () => {
    switch (location.pathname) {
      case "/Pizzeria-7": return "pizzeria-theme";
      case "/park": return "park-theme";
      case "/kafeterija": return "kafe-theme";
      default: return "landing-page-theme";
    }
  };

  return (
    <div className={getThemeClass()}> 
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/Pizzeria-7" element={<Pizzeria />} />
        <Route path="/kafeterija" element={<Kafeterija />} />
        <Route path="/park" element={<Park />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Brand 7 | Ugostiteljstvo Novi Sad</title>
        <meta name='description' content="Pizzeria Sedmica, Sedmica Park i Sedmica Caffe - Vaša omiljena mesta u Novom Sadu." />
      </Helmet>
      <AppContent />
    </Router>
  );
}

export default App;