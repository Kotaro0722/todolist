import styled from "styled-components";
import { TaskType } from "../../components/dashboard";
import { useEffect, useState } from "react";

type TaskProps = TaskType;

export const Task = ({ name, detail, link }: TaskProps) => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <TaskWrapper>
      <NoDetailTaskWrapper>
        <Input
          type="checkbox"
          onChange={() => setIsDone(!isDone)}
          checked={isDone}
        />
        <NameWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {name}
        </NameWrapper>
        <Button href={link}>提出</Button>
        <Button href={link}>修正</Button>
      </NoDetailTaskWrapper>
      {isOpen && <DetailWrapper>{detail}</DetailWrapper>}
    </TaskWrapper>
  );
};

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const NoDetailTaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Input = styled.input`
  transform: scale(1.5);
`;

const NameWrapper = styled.div`
  background-color: white;
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const DetailWrapper = styled.div`
  background-color: white;
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  width: fit-content;
  border: 2px solid green;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: gray;
  color: white;
  text-decoration: none;
  border-radius: 10px;
`;
