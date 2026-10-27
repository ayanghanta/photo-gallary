import { PiHeart, PiHeartFill } from "react-icons/pi";

function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <p className="truncate font-medium text-gray-800">{photo.author}</p>

        <button
          type="button"
          onClick={() => onToggleFavourite(photo)}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors cursor-pointer ${
            isFavourite
              ? "text-red-500"
              : "text-gray-500 hover:bg-red-50 hover:text-red-500"
          }`}
        >
          {isFavourite ? <PiHeartFill size={24} /> : <PiHeart size={24} />}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
