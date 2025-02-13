"use client";
import { useState } from "react";
import style from "../styles/addTodo.module.css";
import Modal from "./modal";

export default function AddTodo() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
    }
  };

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={toggleModal}>
        Add Todo
      </button>
      {isOpenModal && (
        <Modal toggleModal={toggleModal} setIsOpenModal={setIsOpenModal} />
      )}
    </div>
  );
}
