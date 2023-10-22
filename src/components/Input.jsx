import { useState } from "react";

function Input({ darkMode, onSearch, onSelect }) {
  const [input, setInput] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  function selectHandler(e) {
    const regionName = e.target.value;
    onSelect(regionName);
  }
  return (
    <div className="flex flex-col items-left gap-3 container mx-auto   lg:flex lg:flex-row p-6  lg:justify-between">
      <div>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            className={`p-2 w-[100%] outline-none lg:w-[400px] ${
              darkMode ? "light" : "dark"
            }`}
            placeholder="Search for a country"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <select
          className={`p-2 outline-none ${darkMode ? "light" : "dark"}`}
          onChange={selectHandler}
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
