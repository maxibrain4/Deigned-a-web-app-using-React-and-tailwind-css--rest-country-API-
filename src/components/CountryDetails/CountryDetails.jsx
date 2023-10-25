import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const BASE_URL = `https://restcountries.com/v3.1`;

function CountryDetails({ darkMode }) {
  const [country, setCountry] = useState([]);
  // const [isLoading, setIsLoading] =
  const [error, setError] = useState("");
  const { countryName } = useParams();
  const getCountryByName = async () => {
    try {
      const res = await fetch(`${BASE_URL}/name/${countryName}`);
      if (!res.ok) throw new Error("Could not found");
      const data = await res.json();
      setCountry(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const formatLanguages = (country) => {
    return Object.values(country.languages).join(", ");
  };

  const formatCurrencies = (country) => {
    const currencies = country.currencies;
    const result = [];
    for (let key in currencies) {
      if (currencies.hasOwnProperty(key)) {
        let nestedObj = currencies[key];
        if (nestedObj.hasOwnProperty("name")) {
          result.push(nestedObj.name);
        }
      }
    }
    return result.join(", ");
  };
  useEffect(() => {
    getCountryByName();
  }, [countryName]);
  return (
    <div className={`w-full h-screen ${darkMode ? "lighty" : "darky"}`}>
      <div
        className={` w-[90%] mx-auto pt-16 md:container md:mx-auto ${
          darkMode ? "lighty" : "darky"
        }`}
      >
        <button className="px-8 py-2 shadow-lg">
          <Link to="/">Back</Link>
        </button>
        {country.map((country, index) => (
          <div className=" flex flex-col p-2 md:flex-row  md:space-x-40 md:h-[300px]">
            <div className="">
              <img
                src={country.flags.png}
                alt=""
                className="w-[100%] md:h-full"
              />
            </div>
            <div className="2nd box">
              <h1 className="font-bold text-2xl md:py-6">
                {country.name.common}
              </h1>
              <div className="countrydetails flex flex-col md:flex-row md: md:space-x-40">
                <div className="mt-6 md:mt-0 ">
                  <h5>
                    <b>Native Name : </b>
                    {country.name.common}
                  </h5>
                  <h5>
                    <b>Population : </b>
                    {country.population.toLocaleString()}
                  </h5>
                  <h5>
                    <b>Region : </b>
                    {country.region}
                  </h5>
                  <h5>
                    <b>Sub Region:</b> {country.subregion}
                  </h5>
                  <h5>
                    <b>Capital :</b> {country.capital}
                  </h5>
                </div>
                <div className="mt-6 md:mt-0">
                  <h5>
                    <b>Top Level Domain :</b> {country.tld}
                  </h5>
                  <h5>
                    <b>Currencies :</b> {formatCurrencies(country)}
                  </h5>
                  <h5>
                    <b>Language:</b>
                    {formatLanguages(country)}
                  </h5>
                </div>
              </div>
              <div className="borders flex md:flex-row  md:mt-6">
                <p className="font-bold">Border Countries:</p>
                {country.borders.map((smallborder) => (
                  <div className="borderblocks flex flex-row space-x-2 md:space-x-2">
                    <div className="mx-2">{smallborder}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryDetails;
