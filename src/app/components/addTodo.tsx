"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import style from "../styles/addTodo.module.css";

export default function AddTodo() {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [errorMessage, seterrorMessage] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === "") {
      seterrorMessage(true);
      return;
    }
    setInput("");
    window.alert(input + "を登録しました。");
    router.refresh();
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      seterrorMessage(false);
    }
    setInput(e.target.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.input} value={input} onChange={handleInput} />
      <button className={style.btn}>Register</button>
      {errorMessage ? (
        <p className={style.errorMsg}>※You have to write something</p>
      ) : null}
    </form>
  );
}
