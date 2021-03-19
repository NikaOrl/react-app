import { useCallback, useEffect, useState } from "react";

import filmsMock from "../mocks/films.json";
import { IFilm } from "../models/film.model";

// asynchronous data get function
export const fetchFilms = () => {
  return new Promise((resolve: (value: unknown) => void) =>
    setTimeout(() => resolve(filmsMock as IFilm[]), 1000)
  );
};

export const useAsync = (asyncFunction: () => any) => {
  const [value, setValue] = useState<any>([]);

  const execute = useCallback(() => {
    setValue([]);

    return asyncFunction()
      .then((response: any) => {
        setValue(response);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, [asyncFunction]);

  useEffect(() => {
    execute();
  }, [execute]);

  return value;
};
