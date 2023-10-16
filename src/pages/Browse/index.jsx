import React from "react";
import Header from "../../components/Header";
import { useBrowsePage } from "../../hooks/useBrowsePage";
import MainComponent from "../../components/MainComponent";
import SecondaryComponent from "../../components/SecondaryComponent";

const Browse = () => {
  // const { nowPlayingMovies } = useBrowsePage();
  useBrowsePage();

  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
