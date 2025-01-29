import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  padding: "50px",
  zIndex: "1000",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: "1000",
  background: "rgba(0, 0, 0, .7)",
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <h1>Pop-Up Modal</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
