import { useGetTrailer } from "../hooks/useGetTrailer";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";

const useVideoBackground = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const { data } = useGetTrailer(movieId);
  const filterData = data?.results.filter((video) => video.type === "Trailer");
  const trailer = filterData?.length ? filterData[0] : data?.results[0];
  dispatch(addTrailerVideo(trailer));

  return {
    trailerVideo,
  };
};

export default useVideoBackground;
