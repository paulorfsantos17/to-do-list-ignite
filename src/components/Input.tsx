import styles from "./Input.module.css";

export function Input() {
  return (
    <input
      type="text"
      className={styles.inputText}
      placeholder="Adicione uma nova tarefa"
    />
  );
}
