import { Header } from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.css";
import Button from "./components/Button";
import { BadgeCount } from "./components/BadgeCount";
import { EmptyList } from "./components/EmptyList";
import { TaskItem } from "./components/TaskItem";
import { useState } from "react";

import { MouseEvent, FormEvent } from "react";

export interface ITaskItem {
  id: string;
  content: string;
  status: "progress" | "success";
}

export function App() {
  const [taskList, setTaskList] = useState<ITaskItem[]>([]);
  const [content, setContent] = useState<string>("");

  const handleCreateTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTaskItem: ITaskItem = {
      id: String(Math.floor(Math.random() * 1000)),
      content: content,
      status: "progress",
    };

    setTaskList((prev) => [...prev, newTaskItem]);
    setContent("");
  };

  const handleSetContentTaskOnChange = (e: FormEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };

  const changeStatusTask = (id: string) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.status === "success"
          ? (task.status = "progress")
          : (task.status = "success");
      }

      return task;
    });

    setTaskList(newTaskList);
  };

  const countSuccessTask = taskList.reduce((accTask, task) => {
    if (task.status === "success") {
      return accTask + 1;
    }
    return accTask;
  }, 0);

  const deleteTask = (id: string) => {
    const listTaskWithoutTaskByID = taskList.filter((task) => task.id !== id);
    setTaskList(listTaskWithoutTaskByID);
  };

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <form action="">
          <Input
            onChange={handleSetContentTaskOnChange}
            value={content}
            required
          />
          <Button
            onClick={handleCreateTask}
            disabled={content.length === 0 ? true : false}
            disabledButton={content.length === 0 ? true : false}
          />
        </form>
        <div className={styles.todoInfo}>
          <BadgeCount title="Tarefas criadas" tasks={taskList.length} />
          <BadgeCount
            title="Concluídas"
            tasks={taskList.length}
            taskSuccess={countSuccessTask}
            success
          />
        </div>

        {taskList.length === 0 && <EmptyList />}
        {taskList.length > 0 && (
          <>
            {taskList.map((task) => (
              <TaskItem
                id={task.id}
                content={task.content}
                status={task.status}
                onChangeStatusTask={changeStatusTask}
                onDeleteTask={deleteTask}
                key={task.id}
              />
            ))}
          </>
        )}
      </main>
    </div>
  );
}
