import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";
import { ITaskItem } from "../App";

interface ITaskItemProps extends ITaskItem {
  onChangeStatusTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskItem({
  id,
  content,
  status,
  onChangeStatusTask,
  onDeleteTask,
}: ITaskItemProps) {
  const handleChangeStatusTask = () => {
    onChangeStatusTask(id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };
  return (
    <div className={styles.contentItem}>
      <div className={styles.input}>
        <input
          type="checkbox"
          name=""
          id={id}
          onClick={handleChangeStatusTask}
          checked={status === "success" ? true : false}
        />
        <label htmlFor={id}></label>
      </div>
      <p className={status === "success" ? styles.successTask : ""}>
        {content}
      </p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
