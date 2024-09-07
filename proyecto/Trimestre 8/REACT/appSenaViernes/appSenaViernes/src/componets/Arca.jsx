import { Routes, Route } from "react-router-dom";

import Barra from "./common/Barra";
import Inicio from "./common/Inicio";
import Menu from "./common/Menu";
import Sugerencias from "./common/Sugerencias";
import Mapa from "./common/Mapa";
import Footer from "./common/Footer";

export default function Arca() {
  return (
    <>
      <Barra />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="menu" element={<Menu />} />
        <Route path="mapa" element={<Mapa />} />
        <Route path="sugerencias" element={<Sugerencias />} />
      </Routes>
      <Footer />
    </>
  );
}
