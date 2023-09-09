import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Sidebar from "./component/common/Sidebar";
import Home from "./page/Home";
import Game from "./page/Game";
import Cart from "./page/Cart";
function App() {
  return (
    <Router>
      <div className="bg-[#F6F1E9]">
        <Navbar />

        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Game/:gameID" element={<Game />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
