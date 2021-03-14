import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StateLine, { SortValues } from "../../components/StateLine/StateLine";
import FilmsContainer from "../FilmsContainer/FilmsContainer";
import FilmsErrorBoundary from "../FilmsErrorBoundary/FilmsErrorBoundary";

const HomePage = () => {
  const [sort, setSort] = React.useState(SortValues.RELEASE_DATE);

  const handleSortChange = (sort: string) => {
    setSort(sort as SortValues);
  };

  const onAdd = () => {}; // TODO: add logic with redux to avoid quite stupid logic

  return (
    <>
      <Header handleAdd={onAdd} />
      <StateLine handleSortChange={handleSortChange} />
      <FilmsErrorBoundary>
        <FilmsContainer sort={sort}></FilmsContainer>
      </FilmsErrorBoundary>
      <Footer />
    </>
  );
};

export default HomePage;
