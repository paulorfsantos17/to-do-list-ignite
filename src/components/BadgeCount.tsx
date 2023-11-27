import styles from "./BadgeCount.module.css";

interface IBadgeCountProps {
  title: string;
  tasks: number;
  taskSuccess?: number;
  success?: boolean;
}

export function BadgeCount({
  title,
  tasks,
  taskSuccess = 0,
  success = false,
}: IBadgeCountProps) {
  return (
    <div className={styles.badgeContent}>
      <p className={success ? styles.success : styles.progress}>{title}</p>
      <span>{success ? `${taskSuccess} de ${tasks}` : tasks}</span>
    </div>
  );
}
