import React from "react";
import "./App.scss";
import PatientInformationBlock from "../PatientInformationBlock/PatientInformationBlock";
import PatientTabBlock from "../PatientTabBlock/PatientTabBlock";

function App() {
  return (
    <div className="app">
      <PatientInformationBlock />
      <PatientTabBlock />
    </div>
  );
}

export default App;
