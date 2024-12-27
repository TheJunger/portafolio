import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UpLeft } from "./UpLeft";
import "./UpLeft.css";
import { UpRight } from "./UpRight";
import "./UpRight.css";
import { DownLeft } from "./DownLeft";
import "./DownLeft.css";
import "./MainProyect.css";
import "./Proyects.css";
import "./DownRight.css";
import { DownRight } from "./DownRight";
import { SeeMoreDL } from "./SeeMoreDL";
import {CogimientolandMain} from './Proyectos/Cogimientoland_VII/cogimientolandvii/src/App'
import {CogimientolandV} from './Proyectos/Cogimientoland_VI/App'
import { Bolsones } from './Proyectos/Contador_Bolsitas/src/App'
import { GestorInventario } from './Proyectos/Gestor_Inventario/src/App'

function App() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container">
                  <div className="maincontent">
                    <UpLeft />
                    <UpRight />
                    <DownLeft />
                    <DownRight />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/proyectos" element={<SeeMoreDL />} />
          <Route path="/proyectos/cogimientoland-vii" element={<CogimientolandMain />} />
          <Route path="/proyectos/cogimientoland-vi" element={<CogimientolandV />} />
          <Route path="/proyectos/contador-bolsitas" element={<Bolsones />} />
          <Route path="/proyectos/gestor-inventario/*" element={<GestorInventario />} />
        </Routes>
      </Router>
    );
  }

export default App;
