import React from "react";
import useVideoBackground from "../hooks/useVideoBackground";

const VideoBackground = ({ movieId }) => {
  const { trailerVideo } = useVideoBackground(movieId);

  return (
    <div>
      <iframe
        a
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?mute=1&autoplay=1&controls=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
