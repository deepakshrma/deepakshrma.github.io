function Modal({ children, onClose, className }) {
  return (
    <div className={`modal overlay ${className}`}>
      <i className="close bi bi-x-lg" onClick={onClose}></i>
      <div className="container">{children}</div>
    </div>
  );
}

export default Modal;
