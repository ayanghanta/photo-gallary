import { PiMagnifyingGlass, PiX } from "react-icons/pi";

function SearchFilter({ search, setSearch }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50">
        <PiMagnifyingGlass size={22} className="shrink-0 text-gray-400" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search photos by author..."
          className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="shrink-0 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <PiX size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchFilter;
