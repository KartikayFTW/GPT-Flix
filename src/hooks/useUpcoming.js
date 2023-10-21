import { useQuery } from "@tanstack/react-query";
import { options } from "../utils/constants";

// Define the fetching function
const fetchUpcoming = async () => {
  const url = "https://api.themoviedb.org/3/movie/upcoming?&page=1";

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
};

// Define the custom hook
export const useUpcoming = () => {
  return useQuery({ queryKey: ["upComing"], queryFn: fetchUpcoming });
};
