import React, { ChangeEvent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import Button from "../Button/Button";
import { IFilm, IFilmBase } from "../../models/film.model";

import "./MovieForm.scss";

interface MovieFormProps {
  film?: IFilm;
  onSubmit: (film: IFilm | IFilmBase) => void;
}

const genres = [
  {
    value: "Crime",
    label: "Crime"
  },
  {
    value: "Documentary",
    label: "Documentary"
  },
  {
    value: "Horror",
    label: "Horror"
  },
  {
    value: "Comedy",
    label: "Comedy"
  }
];

const MovieForm: React.FC<MovieFormProps> = (props: MovieFormProps) => {
  const [title, setTitle] = React.useState(props.film ? props.film.title : "");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState<string>(() => {
    if (!props.film) {
      const date = new Date();
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      return `${date.getFullYear()}-${month}-${date.getDate()}`;
    }
    return props.film.release_date;
  });

  const handleDateChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSelectedDate(event.target.value);
  };

  const [url, setUrl] = React.useState(
    props.film ? props.film.poster_path : ""
  );

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const [genre, setGenre] = React.useState(
    props.film ? props.film.genres.join(",") : ""
  );

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const [overview, setOverview] = React.useState(
    props.film ? props.film.overview : ""
  );

  const handleOverviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverview(event.target.value);
  };

  const [runtime, setRuntime] = React.useState(0);

  const handleRuntimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRuntime(+event.target.value);
  };

  const handleSubmit = () => {
    props.onSubmit({
      id: props.film ? props.film.id : undefined,
      title: title,
      genres: [genre],
      poster_path: url,
      release_date: selectedDate,
      overview: overview,
      runtime: runtime
    });
  };

  const handleReset = () => {
    const date = new Date();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const currentDate = `${date.getFullYear()}-${month}-${date.getDate()}`;
    setSelectedDate(currentDate);
    setUrl("");
    setGenre("");
    setOverview("");
    setRuntime(0);
  };

  return (
    <div className="movie-form">
      <TextField
        id="outlined-basic"
        label="TITLE"
        variant="outlined"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        id="date"
        label="RELEASE DATE"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="outlined-basic"
        label="MOVIE URL"
        variant="outlined"
        value={url}
        onChange={handleUrlChange}
      />
      <TextField
        id="outlined-basic"
        label="GENRE"
        variant="outlined"
        value={genre}
        onChange={handleGenreChange}
        select
      >
        {genres.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-basic"
        label="OVERVIEW"
        variant="outlined"
        value={overview}
        onChange={handleOverviewChange}
      />
      <TextField
        id="outlined-basic"
        label="RUNTIME"
        variant="outlined"
        value={runtime}
        onChange={handleRuntimeChange}
        type="number"
      />
      <div className="movie-form__buttons-container">
        <Button title="RESET" theme="grey" onClick={handleReset} />
        <Button title="SUBMIT" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default MovieForm;
