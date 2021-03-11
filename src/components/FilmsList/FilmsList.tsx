import React from "react";

import FilmPreview, { IFilm } from "../FilmPreview/FilmPreview";
import { SortValues } from "../StateLine/StateLine";

import "./FilmsList.scss";

export interface FilmsListProps {
  films: IFilm[];
  sort: SortValues;
}

export interface FilmsListState {
  films: IFilm[];
}

class FilmsList extends React.Component<FilmsListProps, FilmsListState> {
  constructor(props: FilmsListProps) {
    super(props);
    this.state = { films: props.films };
  }

  componentDidUpdate(prevProps: FilmsListProps, prevState: FilmsListState) {
    if (prevProps.sort !== this.props.sort) {
      this.setState({
        films: this.sortFilms(this.state.films, this.props.sort)
      });
    }
  }

  sortFilms = (films: IFilm[], sort: SortValues) => {
    return films.sort((film1: IFilm, film2: IFilm) => {
      if (sort === SortValues.RELEASE_DATE) {
        return film1.release_date > film2.release_date ? -1 : 1;
      }
      return film1.title > film2.title ? -1 : 1;
    });
  };

  handleDelete = (id: number) => {
    const films = this.state.films.filter((film: IFilm) => film.id !== id);
    this.setState({ films });
  };

  handleEdit = (film: IFilm) => {
    const films = this.state.films.map((filmItem: IFilm) =>
      filmItem.id === film.id ? film : filmItem
    );
    this.setState({ films });
  };

  render() {
    return (
      <div className="films">
        <div className="films__count">
          {this.state.films.length} movies found
        </div>
        <div className="films__list">
          {this.state.films.map((movie: IFilm) => (
            <FilmPreview
              film={movie}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FilmsList;

// const FilmsList = (props: Props) => {
//   const handleDelete = () => {};

//   const handleEdit = () => {};

//   return (
//     <div className="films">
//       <div className="films__count">{props.films.length} movies found</div>
//       <div className="films__list">
//         {props.films.map((movie: IFilm) => (
//           <FilmPreview
//             film={movie}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//             key={movie.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilmsList;
