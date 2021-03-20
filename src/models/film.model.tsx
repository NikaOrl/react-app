export interface IFilm {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
  overview: string;
}

type FilmState = {
  films: IFilm[];
};

type FilmAction = {
  type: string;
  film: IFilm;
};

type DispatchType = (args: FilmAction) => FilmAction;
