import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainComponent = () => {
  //   if (!mainMovie) return null;
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  console.log(nowPlayingMovies);
  const mainMovie = nowPlayingMovies && nowPlayingMovies[2];
  if (!mainMovie) return null;
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainComponent;
