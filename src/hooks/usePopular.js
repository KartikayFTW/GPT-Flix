import { useQuery } from "@tanstack/react-query";
import { options } from "../utils/constants";

// Define the fetching function
const fetchPopular = async () => {
  const url = "https://api.themoviedb.org/3/movie/popular?&page=2";

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
};

// Define the custom hook
export const usePopular = () => {
  return useQuery({ queryKey: ["popular"], queryFn: fetchPopular });
};
