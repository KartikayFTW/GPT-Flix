import { useQuery } from "@tanstack/react-query";
import { options } from "../utils/constants";

// Define the fetching function
const fetchTrending = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?";

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
};

// Define the custom hook
export const useTrending = () => {
  return useQuery({ queryKey: ["trending"], queryFn: fetchTrending });
};
