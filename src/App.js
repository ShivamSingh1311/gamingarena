import React from "react";
import Navbar from "./component/common/Navbar";
import Sidebar from "./component/common/Sidebar";
import Home from "./page/Home";
function App() {
  return (
    <div className="bg-[#CAF7E3]">
      <Navbar />

      <Sidebar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
