function Modal({ children, onClose }) {
  return (
    <div className="modal overlay">
      <i className="close bi bi-x-lg" onClick={onClose}></i>
      <div className="container">{children}</div>
    </div>
  );
}

export default Modal;
