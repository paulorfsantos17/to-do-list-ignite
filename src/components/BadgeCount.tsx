import styles from "./BadgeCount.module.css";

export function BadgeCount() {
  return (
    <div className={styles.badgeContent}>
      <p>Tarefas criadas</p>
      <span>0</span>
    </div>
  );
}
