import styled from "styled-components";
import { TaskType } from "../../components/dashboard";
import { useEffect, useState } from "react";
import { ChangeTask } from "../changeTask";

type TaskProps = TaskType & { index: number };

export const Task = ({ name, detail, link, index }: TaskProps) => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);
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
          is_done={isDone.toString()}
        >
          {name}
        </NameWrapper>
        <ChangeButton
          onClick={() => {
            setIsChange(!isChange);
          }}
        >
          修正
        </ChangeButton>
        <Button href={link}>提出</Button>
      </NoDetailTaskWrapper>
      {isOpen && <DetailWrapper>{detail}</DetailWrapper>}
      {isChange && <ChangeTask setIsOpen={setIsChange} changeIndex={index} />}
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

const NameWrapper = styled.div<{ is_done: string }>`
  background-color: white;
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  ${({ is_done }) =>
    is_done == "true" &&
    `
    text-decoration:line-through;
    background-color:gray;
  `}
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

const ChangeButton = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: #b8b8b8;
  color: white;
  text-decoration: none;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;
