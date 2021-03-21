import { AnyAction } from "redux";
import { FilterValues, SortValues } from "../components/StateLine/StateLine";

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
