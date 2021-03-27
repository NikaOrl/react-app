import { AnyAction } from "redux";

export enum SortValues {
  RATING = "vote_average",
  RELEASE_DATE = "release_date"
}

export enum FilterValues {
  ALL = "",
  DOCUMENTARY = "DOCUMENTARY",
  COMEDY = "COMEDY",
  HORROR = "HORROR",
  CRIME = "CRIME"
}

export interface IFilmBase {
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
  overview: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  budget?: number;
  revenue?: number;
  runtime: number;
}

export interface IFilm extends IFilmBase {
  id: number;
}

export type FilmState = {
  loading: boolean;
  films: IFilm[];
  error?: any;
  sort: SortValues;
  filter: FilterValues;
};

export type DispatchType = (args: AnyAction) => AnyAction;
