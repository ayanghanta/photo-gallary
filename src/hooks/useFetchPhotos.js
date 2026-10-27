import { useState, useEffect } from "react";
import { API_URL, PHOTO_LIMIT } from "../utils/constants";

async function fetchPhoto() {
  const res = await fetch(`${API_URL}?limit=${PHOTO_LIMIT}`);

  if (!res.ok) throw new Error("Something went wrong!");

  return await res.json();
}

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getPhotos() {
      try {
        setIsLoading(true);
        setIsError(null);
        const data = await fetchPhoto();
        setPhotos(data);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, []);

  return { photos, isLoading, isError };
}
