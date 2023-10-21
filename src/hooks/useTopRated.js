import { useQuery } from "@tanstack/react-query";
import { options } from "../utils/constants";

// Define the fetching function
const fetchTopRated = async () => {
  const url = "https://api.themoviedb.org/3/movie/top_rated?&page=1";

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
};

// Define the custom hook
export const useTopRated = () => {
  return useQuery({ queryKey: ["topRated"], queryFn: fetchTopRated });
};
