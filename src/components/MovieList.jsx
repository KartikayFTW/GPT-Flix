import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };
  useEffect(() => {
    const currentRef = scrollRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef?.current) {
      scrollRef?.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef?.current) {
      scrollRef?.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 relative">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      {showLeftButton && (
        <button
          className="absolute top-[60%] transform -translate-y-1/2 left-0 z-10 bg-black bg-opacity-50 rounded-full p-2 md:p-4"
          onClick={scrollLeft}
        >
          <MdChevronLeft className="text-white w-8 h-8 md:w-16 md:h-16" />
        </button>
      )}

      <div className="flex overflow-x-scroll scrollbar-hide" ref={scrollRef}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>

      {showRightButton && (
        <button
          className="absolute top-[60%] transform -translate-y-1/2 right-0 z-10 bg-black bg-opacity-50 rounded-full p-2 md:p-4"
          onClick={scrollRight}
        >
          <MdChevronRight className="text-white w-8 h-8 md:w-16 md:h-16" />
        </button>
      )}
    </div>
  );
};

export default MovieList;
