import React from "react";
import { Header } from "./components/header";
import { Body } from "./components/body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header userName="Nilanjan" />
      <Body buttonText="fetchNews" />
    </div>
  );
}

export default App;
