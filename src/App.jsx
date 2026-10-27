import { PiMagnifyingGlass } from "react-icons/pi";
import PhotoCard from "./components/PhotoCard";
import SearchFilter from "./components/SearchFilter";
import { useCallback, useMemo, useState } from "react";
import { useFavouritePhotos } from "./hooks/useFavouritePhotos";
import { useFetchPhotos } from "./hooks/useFetchPhotos";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [search, setSearch] = useState("");
  const { photos, isError, isLoading } = useFetchPhotos();
  const { likedPhotos, toggleFavouritePhoto } = useFavouritePhotos();

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }, [photos, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
        Photo Gallery
      </h1>
      <SearchFilter search={search} setSearch={handleSearch} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}
      {!isLoading && !isError && (
        <>
          {filteredPhotos.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  isFavourite={likedPhotos.some((p) => p.id === photo.id)}
                  onToggleFavourite={toggleFavouritePhoto}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 px-4 py-16 text-center">
              <PiMagnifyingGlass
                size={32}
                className="mx-auto mb-3 text-gray-400"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                No photos found
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Try searching with a different author name.
              </p>
              <button
                onClick={() => setSearch("")}
                className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              >
                Clear search
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
