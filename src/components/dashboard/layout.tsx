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
      <AddNewTaskWrapper>
        <Button>課題を追加</Button>
      </AddNewTaskWrapper>
    </Wrapper>
  );
};

const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
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

const AddNewTaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Button = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: silver;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
`;
