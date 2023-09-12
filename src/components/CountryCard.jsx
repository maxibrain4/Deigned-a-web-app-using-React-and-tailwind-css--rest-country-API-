function CountryCard({ darkMode, country }) {
  return (
    <div className="container mx-auto py-6 lg:p-6">
      <div className=" w-[95%] mx-auto shadow-sm lg:w-[40] lg:mx-0">
        <div>
          <img
            src={country.flags.png}
            alt=""
            className="w-[100%] lg:h-[200px]"
          />
        </div>
        <div className={`p-2 ${darkMode ? "light" : "dark"}`}>
          <p className="font-bold text-xl py-3">{country.name.common}</p>
          <p>
            <b>Population:</b>
            {country.population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b>
            {country.region}
          </p>
          <p>
            <b>Capital:</b>
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
