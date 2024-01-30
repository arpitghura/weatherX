import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodayHighlight from "./components/TodayHighlight";

function App() {
  return (
    <div className="app">
      <Navbar />
      <TodayHighlight />
    </div>
  );
}

export default App;
