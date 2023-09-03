import React from "react";
import Navbar from "./component/common/Navbar";
import Sidebar from "./component/common/Sidebar";
import CardData from "./component/cards/CardData";
function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <CardData />
    </div>
  );
}

export default App;
