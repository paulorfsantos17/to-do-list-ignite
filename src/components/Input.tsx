import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: IInputProps) {
  return (
    <input
      type="text"
      className={styles.inputText}
      placeholder="Adicione uma nova tarefa"
      {...props}
    />
  );
}
