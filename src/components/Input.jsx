function Input() {
  return (
    <div className="flex flex-col items-left gap-3 container mx-auto   lg:flex lg:flex-row p-6  lg:justify-between">
      <div>
        <input
          type="text"
          className="p-2 w-[100%] outline-none lg:w-[400px]"
          placeholder="Search for a country"
        />
      </div>
      <div>
        <select name="" id="" className="p-2 outline-none">
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
