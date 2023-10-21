import React from "react";
import Header from "../../components/Header";
import { useBrowsePage } from "../../hooks/useBrowsePage";
import MainComponent from "../../components/MainComponent";
import SecondaryComponent from "../../components/SecondaryComponent";

const Browse = () => {
  const {
    isNowPlayingLoading,
    isPopularLoading,
    isTrendingLoading,
    isUpcomingLoading,
    isTopRatedLoading,
  } = useBrowsePage();

  if (
    isNowPlayingLoading ||
    isPopularLoading ||
    isTrendingLoading ||
    isUpcomingLoading ||
    isTopRatedLoading
  )
    return <h1>Loading</h1>;

  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
