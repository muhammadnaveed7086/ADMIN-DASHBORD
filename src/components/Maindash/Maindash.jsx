import React from "react";
import "./Maindash.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import { Tab } from "bootstrap";
function Maindash() {
  return (
    <div className="Maindash">
      <h1 className="dashheading">Dashboard</h1>
      <Cards />
      
        <Table />
     
    </div>
  );
}

export default Maindash;
