import styles from "./EmptyList.module.css";
import clipboard from "../assets/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.content}>
      <img src={clipboard} />
      <div className={styles.contentText}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
