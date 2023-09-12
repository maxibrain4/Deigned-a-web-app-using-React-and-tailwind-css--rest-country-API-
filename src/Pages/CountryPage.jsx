import CountryCard from "../components/CountryCard";
import Input from "../components/Input";
function CountryPage({ darkMode, country }) {
  return (
    <div className={`h-full ${darkMode ? "lighty" : "darky"}`}>
      <Input darkMode={darkMode} />
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:items-center">
        {country.map((country) => (
          <CountryCard darkMode={darkMode} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryPage;
