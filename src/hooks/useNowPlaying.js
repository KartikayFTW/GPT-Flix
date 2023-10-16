import { useQuery } from "@tanstack/react-query";
import { options } from "../utils/constants";

// Define the fetching function
const fetchNowPlaying = async () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing?&page=1";

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
};

// Define the custom hook
export const useNowPlaying = () => {
  return useQuery({ queryKey: ["nowPlaying"], queryFn: fetchNowPlaying });
};
