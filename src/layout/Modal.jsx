import React from "react";
// import { useState, useEffect, useRef } from 'react'
import "./modal.css";

const Modal = ({ title, content, onClose, onConfirm }) => {
  // const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onClose]);
  return (
    <div>
      <div className="p-a">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="closeBtn" onClick={onClose}>
          OK
        </button>
        {onConfirm && <button onClick={onConfirm}>PROFILE</button>}
      </div>
    </div>
  );
};

export default Modal;
