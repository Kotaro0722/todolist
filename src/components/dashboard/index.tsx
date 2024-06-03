import { useState } from "react";
import { DashboardLayout } from "./layout";

export type TaskType = {
  name: string;
  detail: string;
  link: string;
};

export const Dashboard = () => {
  const tasks: TaskType[] = [
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
  ];
  return <DashboardLayout tasks={tasks} />;
};
