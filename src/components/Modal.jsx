import React from "react";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-card">
        <button className="custom-modal-close" onClick={onClose}>
          &times;
        </button>
        <h4 className="mb-4">{title}</h4>
        {children}
      </div>
    </div>
  );
}

export default Modal;
