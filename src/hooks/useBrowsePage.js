// hooks/useBrowsePage.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNowPlaying } from "./useNowPlaying";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} from "../utils/store/movieSlice";
import { usePopular } from "./usePopular";
import { useTrending } from "./useTrending";
import { useUpcoming } from "./useUpcoming";
import { useTopRated } from "./useTopRated";

export const useBrowsePage = () => {
  const dispatch = useDispatch();

  const {
    data: nowPlayingData,
    status: nowPlayingStatus,
    isLoading: isNowPlayingLoading,
  } = useNowPlaying();
  const {
    data: popularData,
    status: popularStatus,
    isLoading: isPopularLoading,
  } = usePopular();
  const {
    data: trendingData,
    status: trendingStatus,
    isLoading: isTrendingLoading,
  } = useTrending();
  const {
    data: upcomingData,
    status: upcomingStatus,
    isLoading: isUpcomingLoading,
  } = useUpcoming();
  const {
    data: topRatedData,
    status: topRatedStatus,
    isLoading: isTopRatedLoading,
  } = useTopRated();

  useEffect(() => {
    if (nowPlayingStatus === "success" && nowPlayingData.results) {
      dispatch(addNowPlayingMovies(nowPlayingData.results));
    } else if (nowPlayingStatus === "error") {
      console.error("Error fetching data");
    }
  }, [nowPlayingStatus]);

  useEffect(() => {
    if (popularStatus === "success" && popularData.results) {
      dispatch(addPopularMovies(popularData.results));
    } else if (popularStatus === "error") {
      console.error("Error fetching data");
    }
  }, [popularStatus]);

  useEffect(() => {
    if (trendingStatus === "success" && trendingData.results) {
      dispatch(addTrendingMovies(trendingData.results));
    } else if (trendingStatus === "error") {
      console.error("Error fetching data");
    }
  }, [trendingStatus]);

  useEffect(() => {
    if (upcomingStatus === "success" && upcomingData.results) {
      dispatch(addUpcomingMovies(upcomingData.results));
    } else if (upcomingStatus === "error") {
      console.error("Error fetching data");
    }
  }, [upcomingStatus]);

  useEffect(() => {
    if (topRatedStatus === "success" && topRatedData.results) {
      dispatch(addTopRatedMovies(topRatedData.results));
    } else if (topRatedStatus === "error") {
      console.error("Error fetching data");
    }
  }, [topRatedStatus]);

  return {
    isNowPlayingLoading,
    isPopularLoading,
    isTrendingLoading,
    isUpcomingLoading,
    isTopRatedLoading,
  };
};
