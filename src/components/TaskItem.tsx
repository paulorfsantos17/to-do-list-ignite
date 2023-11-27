import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

interface ITaskItemProps {
  id: string;
}

export function TaskItem({ id }: ITaskItemProps) {
  return (
    <div className={styles.contentItem}>
      <div className={styles.input}>
        <input
          type="checkbox"
          name=""
          id={id}
          onClick={() => console.log(`teste`)}
        />
        <label htmlFor={id}></label>
      </div>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
}
