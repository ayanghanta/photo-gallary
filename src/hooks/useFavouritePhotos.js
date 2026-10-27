import { useEffect, useReducer } from "react";
import { LOCAL_STORE_KEY } from "../utils/constants";

function getInitialState() {
  try {
    const savedPhotos = localStorage.getItem(LOCAL_STORE_KEY);

    return {
      likedPhotos: savedPhotos ? JSON.parse(savedPhotos) : [],
    };
  } catch {
    return { likedPhotos: [] };
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "photo/toggleFavourites":
      return {
        ...state,
        likedPhotos: state.likedPhotos.some((p) => p.id === action.payload.id)
          ? state.likedPhotos.filter((p) => p.id !== action.payload.id)
          : [...state.likedPhotos, action.payload],
      };

    default:
      return state;
  }
}

export function useFavouritePhotos() {
  const [{ likedPhotos }, dispatch] = useReducer(
    reducer,
    undefined,
    getInitialState,
  );

  function toggleFavouritePhoto(photo) {
    if (!photo) return;

    dispatch({
      type: "photo/toggleFavourites",
      payload: photo,
    });
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(likedPhotos));
  }, [likedPhotos]);

  return { likedPhotos, toggleFavouritePhoto };
}
