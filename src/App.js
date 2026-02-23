import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer";

import Naslovna from "./pages/naslovna";
import Park from "./pages/park";
import Kafeterija from "./pages/kafeterija";
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
          <Route path="/kafeterija" element={<Kafeterija />} />
          <Route path="/park" element={<Park/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
export default App;
