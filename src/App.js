import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bragança" />

        <footer className="links">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/m%C3%A1rcia-castro-08088210b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Márcia Castro
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MarciaCastro09/exercise-react-week6"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://cocky-hoover-10cacd.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

