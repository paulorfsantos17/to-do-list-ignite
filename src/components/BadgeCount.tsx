import styles from "./BadgeCount.module.css";

interface IBadgeCountProps {
  type: "success" | "progress";
  title: string;
}

export function BadgeCount({ type, title }: IBadgeCountProps) {
  return (
    <div className={styles.badgeContent}>
      <p className={type === "success" ? styles.success : styles.progress}>
        {title}
      </p>
      <span>0</span>
    </div>
  );
}
