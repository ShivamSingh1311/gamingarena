import React from "react";
import Navbar from "./component/common/Navbar";
import Sidebar from "./component/common/Sidebar";
import CardData from "./component/cards/CardData";
function App() {
  return (
    <div className="bg-[#CAF7E3]">
      <Navbar />

      <Sidebar />
      <div>
        <CardData />
      </div>
    </div>
  );
}

export default App;
