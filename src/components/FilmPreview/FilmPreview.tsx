import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ModalWindow from "../ModalWindow/ModalWindow";
import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
import EditMovieModal from "../EditMovieModal/EditMovieModal";

import "./FilmPreview.scss";
import MySVG from "-!svg-react-loader!../../assets/kebab-menu.svg";

export interface IFilm {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
}

export interface FilmPreviewProps {
  film: IFilm;
  onDelete: (id: number) => void;
  onEdit: (film: IFilm) => void;
}

export interface FilmPreviewState {
  film: IFilm;
  openEditModal: boolean;
  openDeleteModal: boolean;
  anchorEl: null | HTMLElement;
}

class FilmPreview extends React.Component<FilmPreviewProps, FilmPreviewState> {
  constructor(props: FilmPreviewProps) {
    super(props);
    this.state = {
      film: props.film,
      openEditModal: false,
      openDeleteModal: false,
      anchorEl: null
    };
  }

  componentDidUpdate(prevProps: FilmPreviewProps, prevState: FilmPreviewState) {
    if (JSON.stringify(this.props.film) !== JSON.stringify(prevProps.film)) {
      this.setState({ film: this.props.film });
    }
  }

  handleCloseEditModal = () => {
    this.setState({ openEditModal: false });
  };

  handleEdit = (film: IFilm) => {
    this.props.onEdit(film);
    this.handleCloseEditModal();
    this.handleMenuClose();
  };

  handleCloseDeleteModal = () => {
    this.setState({ openDeleteModal: false });
  };

  handleDelete = () => {
    this.props.onDelete(this.state.film.id);
    this.handleCloseDeleteModal();
    this.handleMenuClose();
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpenEditModal = () => {
    this.setState({ openEditModal: true });
  };

  handleOpenDeleteModal = () => {
    this.setState({ openDeleteModal: true });
  };

  render() {
    return (
      <div className="item-preview">
        <ModalWindow
          open={this.state.openEditModal}
          onClose={this.handleCloseEditModal}
        >
          <EditMovieModal film={this.state.film} onEdit={this.handleEdit} />
        </ModalWindow>
        <ModalWindow
          open={this.state.openDeleteModal}
          onClose={this.handleCloseDeleteModal}
        >
          <DeleteMovieModal onDelete={this.handleDelete} />
        </ModalWindow>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MySVG />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleOpenEditModal}>Edit</MenuItem>
          <MenuItem onClick={this.handleOpenDeleteModal}>Delete</MenuItem>
        </Menu>
        <img
          className="item-preview__poster"
          src={this.state.film.poster_path}
          alt={this.state.film.title}
        />
        <div className="item-preview__title">
          <div>
            <h3>{this.state.film.title}</h3>
          </div>
          <div>
            <span className="item-preview__release-date">
              {this.state.film.release_date}
            </span>
          </div>
        </div>
        <div className="item-preview__genres">
          {this.state.film.genres.join(" & ")}
        </div>
      </div>
    );
  }
}

export default FilmPreview;

// import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import "./FilmPreview.scss";
// import MySVG from "-!svg-react-loader!../../assets/kebab-menu.svg";
// import ModalWindow from "../ModalWindow/ModalWindow";
// import DeleteMovieModal from "../DeleteMovieModal/DeleteMovieModal";
// import EditMovieModal from "../EditMovieModal/EditMovieModal";

// export interface IFilm {
//   id: number;
//   title: string;
//   poster_path: string;
//   release_date: string;
//   genres: string[];
// }

// export interface Props {
//   id: number;
//   title: string;
//   poster_path: string;
//   release_date: string;
//   genres: string[];
//   onDelete: (id: string) => void;
// }

// const FilmPreview = (props: Props) => {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const [openEditModal, setOpenEditModal] = React.useState(false);

//   const handleOpenEditModal = () => {
//     setOpenEditModal(true);
//   };

//   const handleCloseEditModal = () => {
//     setOpenEditModal(false);
//   };

//   const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

//   const handleOpenDeleteModal = () => {
//     setOpenDeleteModal(true);
//   };

//   const handleCloseDeleteModal = () => {
//     setOpenDeleteModal(false);
//   };

//   const handleDelete = () => {
//     props.onDelete(film.id);
//   };

//   return (
//     <div className="item-preview">
//       <ModalWindow open={openEditModal} onClose={handleCloseEditModal}>
//         <EditMovieModal film={props} />
//       </ModalWindow>
//       <ModalWindow open={openDeleteModal} onClose={handleCloseDeleteModal}>
//         <DeleteMovieModal onDelete="handleDelete" />
//       </ModalWindow>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MySVG />
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//       >
//         <MenuItem onClick={handleOpenEditModal}>Edit</MenuItem>
//         <MenuItem onClick={handleOpenDeleteModal}>Delete</MenuItem>
//       </Menu>
//       <img
//         className="item-preview__poster"
//         src={props.poster_path}
//         alt={props.title}
//       />
//       <div className="item-preview__title">
//         <div>
//           <h3>{props.title}</h3>
//         </div>
//         <div>
//           <span className="item-preview__release-date">
//             {props.release_date}
//           </span>
//         </div>
//       </div>
//       <div className="item-preview__genres">{props.genres.join(" & ")}</div>
//     </div>
//   );
// };

// export default FilmPreview;
