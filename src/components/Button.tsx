import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabledButton: boolean;
}

export default function Button({ disabledButton, ...props }: ButtonProps) {
  return (
    <button
      className={disabledButton ? styles.buttonDisable : styles.button}
      {...props}>
      <PlusCircle size={16} />
      Criar
    </button>
  );
}
