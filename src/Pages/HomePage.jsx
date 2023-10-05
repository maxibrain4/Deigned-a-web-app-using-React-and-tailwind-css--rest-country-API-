import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import CountryPage from "./CountryPage";

function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <CountryPage darkMode={darkMode} />
    </div>
  );
}

export default HomePage;
