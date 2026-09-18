function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
        className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
      />

      <button
        onClick={onSearch}
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;