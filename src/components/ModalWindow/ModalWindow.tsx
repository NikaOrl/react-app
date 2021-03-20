import React from "react";
import Modal from "@material-ui/core/Modal";

import "./ModalWindow.scss";

interface ModalWindowProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const ModalWindow: React.FC<ModalWindowProps> = (props: ModalWindowProps) => {
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
