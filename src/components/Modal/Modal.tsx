import classes from './Modal.module.css';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
