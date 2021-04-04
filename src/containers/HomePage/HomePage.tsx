import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StateLine from "../../components/StateLine/StateLine";
import FilmsContainer from "../FilmsContainer/FilmsContainer";
import FilmsErrorBoundary from "../FilmsErrorBoundary/FilmsErrorBoundary";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

const HomePage = () => {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/film/:id", "/search/:search"]}>
          <Header />
          <StateLine />
          <FilmsErrorBoundary>
            <FilmsContainer></FilmsContainer>
          </FilmsErrorBoundary>
        </Route>

        <Route path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default HomePage;
