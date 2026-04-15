/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RoofTrusses from "./pages/RoofTrusses";
import FloorTrusses from "./pages/FloorTrusses";
import WallPanels from "./pages/WallPanels";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roof-trusses" element={<RoofTrusses />} />
          <Route path="/floor-trusses" element={<FloorTrusses />} />
          <Route path="/wall-panels" element={<WallPanels />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}
