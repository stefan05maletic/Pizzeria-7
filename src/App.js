import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer";

import Naslovna from "./pages/naslovna";
import Meni from "./pages/meni";
import Dorucak from "./pages/dorucak";
import Cebate from "./pages/cebate";
import Pizze from "./pages/pizze";
import Paste from "./pages/paste";
import Salate from "./pages/salate";
import Rostilj from "./pages/rostilj";
import Deserti from "./pages/deserti";
import Dodaci from "./pages/dodaci";
import {Helmet} from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Pizzeria Sedmica</title>
        <meta 
        name='description'
        content="Najbolji doručak i najbolja pica u gradu! Velike porcije, profesionalna i brza usluga!"
        />
        <meta 
        name='keywords'
        content='Pizzeria Sedmica, Sedmica, Pizzeria 7, Picerija Sedmica, Pica, Novi Sad, 7'
        />
      </Helmet>
      <Navbar />
      <div>
        <Routes>
          <Route index element={<Naslovna/>}/>
          <Route path="/Pizzeria-7" element={<Naslovna />} />
          <Route path="/meni" element={<Meni />} />
          <Route path="/dorucak" element={<Dorucak />} />
          <Route path="/cebate" element={<Cebate />} />
          <Route path="/pizze" element={<Pizze />} />
          <Route path="/paste" element={<Paste />} />
          <Route path="/salate" element={<Salate />} />
          <Route path="/rostilj" element={<Rostilj />} />
          <Route path="/deserti" element={<Deserti />} />
          <Route path="/dodaci" element={<Dodaci />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
export default App;
