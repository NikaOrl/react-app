import React from "react";
import Modal from "@material-ui/core/Modal";

import "./ModalWindow.scss";

interface Props {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const ModalWindow = (props: Props) => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className="modal">
        <button onClick={props.onClose} className="modal__close-button">
          &times;
        </button>
        {props.children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
