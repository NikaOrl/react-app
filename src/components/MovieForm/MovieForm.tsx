import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

import Button from "../Button/Button";
import { IFilm, IFilmBase } from "../../models/film.model";

import "./MovieForm.scss";

interface MovieFormProps {
  film?: IFilm;
  onSubmit: (film: IFilm | IFilmBase) => void;
}

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Documentary",
  "Horror",
  "Science Fiction"
];

const MovieForm: React.FC<MovieFormProps> = (props: MovieFormProps) => {
  const MovieFormSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    genres: Yup.array()
      .min(1, "Should be more than 0")
      .required("Required"),
    poster_path: Yup.string().required("Required"),
    overview: Yup.string().required("Required"),
    budget: Yup.number().min(0, "Should be bigger than 0"),
    revenue: Yup.number().min(0, "Should be bigger than 0"),
    runtime: Yup.number()
      .required("Required")
      .min(0, "Should be bigger than 0")
  });

  const getDefaultDate = () => {
    const date = new Date();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    return `${date.getFullYear()}-${month}-${date.getDate()}`;
  };

  const formik = useFormik({
    initialValues: {
      title: props.film?.title ? props.film.title : "",
      poster_path: props.film?.poster_path ? props.film.poster_path : "",
      release_date: props.film?.release_date
        ? props.film.release_date
        : getDefaultDate(),
      genres: props.film?.genres ? props.film.genres : [],
      overview: props.film?.overview ? props.film.overview : "",
      tagline: props.film?.tagline ? props.film.tagline : undefined,
      vote_average: props.film?.vote_average
        ? props.film.vote_average
        : undefined,
      vote_count: props.film?.vote_count ? props.film.vote_count : undefined,
      budget: props.film?.budget ? props.film.budget : props.film?.budget,
      revenue: props.film?.revenue ? props.film.revenue : undefined,
      runtime: props.film?.runtime ? props.film.runtime : 0
    },

    validationSchema: MovieFormSchema,

    onSubmit: (values: IFilmBase) => {
      props.onSubmit({
        id: props.film ? props.film.id : undefined,
        title: values.title,
        poster_path: values.poster_path,
        release_date: values.release_date,
        genres: values.genres,
        overview: values.overview,
        tagline: values.tagline,
        vote_average: values.vote_average,
        vote_count: values.vote_count,
        budget: values.budget,
        revenue: values.revenue,
        runtime: values.runtime
      });
    }
  });

  return (
    <div className="movie-form">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="title"
          label="TITLE"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          id="poster_path"
          label="POSTER URL"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.poster_path}
          error={
            formik.touched.poster_path && Boolean(formik.errors.poster_path)
          }
          helperText={formik.touched.poster_path && formik.errors.poster_path}
        />
        <TextField
          id="release_date"
          label="RELEASE DATE"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.release_date}
          variant="outlined"
          error={
            formik.touched.release_date && Boolean(formik.errors.release_date)
          }
          helperText={formik.touched.release_date && formik.errors.release_date}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="genres"
          label="GENRE"
          variant="outlined"
          value={formik.values.genres}
          error={formik.touched.genres && Boolean(formik.errors.genres)}
          helperText={formik.touched.genres && formik.errors.genres}
          select
          SelectProps={{
            multiple: true,
            renderValue: selected => (selected as string[]).join(", ")
          }}
          onChange={evt => {
            formik.setFieldValue("genres", evt.target.value);
          }}
        >
          {genres.map(option => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={formik.values.genres.indexOf(option) > -1} />
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="overview"
          label="OVERVIEW"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.overview}
          error={formik.touched.overview && Boolean(formik.errors.overview)}
          helperText={formik.touched.overview && formik.errors.overview}
        />
        <TextField
          id="tagline"
          label="TAGLINE"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.tagline}
          error={formik.touched.tagline && Boolean(formik.errors.tagline)}
          helperText={formik.touched.tagline && formik.errors.tagline}
        />
        <TextField
          id="vote-average"
          label="VOTE AVERAGE"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.vote_average}
          error={
            formik.touched.vote_average && Boolean(formik.errors.vote_average)
          }
          helperText={formik.touched.vote_average && formik.errors.vote_average}
          type="number"
        />
        <TextField
          id="vote-count"
          label="VOTE COUNT"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.vote_count}
          error={formik.touched.vote_count && Boolean(formik.errors.vote_count)}
          helperText={formik.touched.vote_count && formik.errors.vote_count}
          type="number"
        />
        <TextField
          id="budget"
          label="BUDGET"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.budget}
          error={formik.touched.budget && Boolean(formik.errors.budget)}
          helperText={formik.touched.budget && formik.errors.budget}
          type="number"
        />
        <TextField
          id="revenue"
          label="REVENUE"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.revenue}
          error={formik.touched.revenue && Boolean(formik.errors.revenue)}
          helperText={formik.touched.revenue && formik.errors.revenue}
          type="number"
        />
        <TextField
          id="runtime"
          label="RUNTIME"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.runtime}
          error={formik.touched.runtime && Boolean(formik.errors.runtime)}
          helperText={formik.touched.runtime && formik.errors.runtime}
          type="number"
        />
        <div className="movie-form__buttons-container">
          <Button
            title="RESET"
            type="reset"
            onClick={formik.resetForm}
            theme="grey"
          />
          <Button title="SUBMIT" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
