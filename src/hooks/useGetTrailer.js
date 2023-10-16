import { useQuery } from "@tanstack/react-query";
import { options } from "../utils/constants";

// Define the fetching function
const fetchGetTrailer = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
};

// Define the custom hook
export const useGetTrailer = (movieId) => {
  return useQuery({
    queryKey: ["getTrailer", movieId],
    queryFn: () => fetchGetTrailer(movieId),
  });
};
