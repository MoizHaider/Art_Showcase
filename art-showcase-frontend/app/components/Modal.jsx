"use client";
// components/Modal.js
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, isOpen, styles }) => {
  const [modalContainer, setModalContainer] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflowY = "unset";
      };
    } else {
    }
  }, [isOpen]);

  useEffect(() => {
    setModalContainer(document.querySelector(".modal-container"));
  }, []);
  if (!isOpen) return null;
  return (
    <>
      {modalContainer != null &&
        createPortal(
          <div className={`flex fixed top-0 left-0 w-screen h-screen justify-center items-center z-50 bg-[#141523] bg-opacity-50 ${styles}`}>
            {children}
          </div>,
          modalContainer
        )}
    </>
  );
};

export default Modal;
