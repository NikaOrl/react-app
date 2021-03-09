import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StateLine from "../../components/StateLine/StateLine";
import FilmsContainer from "../FilmsContainer/FilmsContainer";
import FilmsErrorBoundary from "../FilmsErrorBoundary/FilmsErrorBoundary";

const HomePage = () => {
  return (
    <>
      <Header />
      <StateLine />
      <FilmsErrorBoundary>
        <FilmsContainer></FilmsContainer>
      </FilmsErrorBoundary>
      <Footer />
    </>
  );
};

export default HomePage;
