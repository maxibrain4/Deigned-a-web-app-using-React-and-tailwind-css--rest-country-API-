import { useState } from "react";
import Nav from "./components/Nav";
import CountryPage from "./Pages/CountryPage";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Router>
        <Routes>
          <Route exact path="/" element={<CountryPage darkMode={darkMode} />} />
          <Route
            path="/country/:countryName"
            element={<CountryDetails darkMode={darkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
