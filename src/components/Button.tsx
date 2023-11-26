import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <button className={styles.button}>
      <PlusCircle size={16} />
      Criar
    </button>
  );
}
