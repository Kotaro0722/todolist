import styled from "styled-components";
import { TaskType } from ".";
import { Task } from "../../parts/dashboard";

type DashboardLayoutProps = {
  tasks: TaskType[];
};

export const DashboardLayout = ({ tasks }: DashboardLayoutProps) => {
  return (
    <Wrapper>
      <Title>課題一覧</Title>
      <TasksWrapper>
        {tasks.map((task, index) => {
          return (
            <Task
              name={task.name}
              detail={task.detail}
              link={task.link}
              key={index}
            />
          );
        })}
      </TasksWrapper>
    </Wrapper>
  );
};

const Title = styled.header`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 40px;
`;

const Wrapper = styled.div`
  background-color: #282c34;
  width: 100vw;
  height: 100vh;
`;

const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
