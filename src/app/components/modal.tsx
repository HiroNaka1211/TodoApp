import { ModalProps, TodoType } from "@/type";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "../styles/modal.module.css";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";

export default function Modal({ toggleModal, setIsOpenModal }: ModalProps) {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [errorMessage, seterrorMessage] = useState(false);

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (input === "") {
      seterrorMessage(true);
      return;
    }
    const todo: TodoType = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    const res = await addTodo(todo);
    if (res != undefined) {
      window.alert(input + "を登録しました。");
      setInput("");
      setIsOpenModal(false);
      router.refresh();
    } else {
      window.alert("登録に失敗しました");
    }
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      seterrorMessage(false);
    }
    setInput(e.target.value);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsMouseDown(true);
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (isMouseDown) {
      toggleModal(e);
    }
    setIsMouseDown(false);
  };

  return (
    <>
      <div
        className={style.overlay}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div className={style.modalComponent}>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              className={style.input}
              value={input}
              onChange={handleInput}
            />
            <div className={style.buttonContainer}>
              <button
                type="button"
                className={style.cancelBtn}
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button type="submit" className={style.submitBtn}>
                Add Todo
              </button>
            </div>
            {errorMessage ? (
              <p className={style.errorMsg}>※You have to write something</p>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
}
