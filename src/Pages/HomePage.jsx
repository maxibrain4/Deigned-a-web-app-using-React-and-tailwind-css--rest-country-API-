import { useState } from "react";
import Nav from "../components/Nav";
import CountryPage from "./CountryPage";

function HomePage({ country }) {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <CountryPage darkMode={darkMode} country={country} />
    </div>
  );
}

export default HomePage;
