import { Dispatch, SetStateAction, createContext, useState } from "react";
import { DashboardLayout } from "./layout";

export type TaskType = {
  name: string;
  detail: string;
  link: string;
};

type TaskContextType = {
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const Dashboard = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      name: "自然言語処理",
      detail: "耳コピ",
      link: "https://sola.sus.ac.jp/mod/assign/view.php?id=92756",
    },
    {
      name: "データベース論",
      detail: "図書館貸し出しシステム",
      link: "https://sola.sus.ac.jp/mod/assign/view.php?id=92756",
    },
  ]);
  return (
    <TaskContext.Provider value={{ setTasks }}>
      <DashboardLayout tasks={tasks} />
    </TaskContext.Provider>
  );
};
