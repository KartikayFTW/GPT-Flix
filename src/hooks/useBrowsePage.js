// hooks/useBrowsePage.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNowPlaying } from "./useNowPlaying";
import { addNowPlayingMovies } from "../utils/store/movieSlice";

export const useBrowsePage = () => {
  const { data } = useNowPlaying();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addNowPlayingMovies(data.results));
    }
  }, [data, dispatch]);

  // Use useSelector to select the now playing movies data from your Redux store

  //   return { nowPlayingMovies }; // Return the selected data
};
