import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../Button/Button";

import "./ErrorPage.scss";

const ErrorPage: React.FC = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div className="error-page">
      <div className="error-page__logo">NETFLIX ROULETTE</div>
      <div className="error-page__title">Page Not Found</div>
      <div className="error-page__img"></div>
      <div className="error-page__btn">
        <Button title="GO BACK TO HOME" theme="grey" onClick={handleClick} />
      </div>
    </div>
  );
};

export default ErrorPage;
