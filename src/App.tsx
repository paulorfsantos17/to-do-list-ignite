import Header from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.css";
import Button from "./components/Button";
import { BadgeCount } from "./components/BadgeCount";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <form action="">
          <Input />
          <Button />
        </form>

        <div className={styles.todoInfo}>
          <BadgeCount />
          <BadgeCount />
        </div>
      </main>
    </div>
  );
}
