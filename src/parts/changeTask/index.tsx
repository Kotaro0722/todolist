import { useContext, useRef } from "react";
import styled from "styled-components";
import { TaskContext } from "../../components/dashboard";

type ChangeTaskProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const ChangeTask = ({ setIsOpen }: ChangeTaskProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const detailRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("TaskList must be used within a TaskProvider");
  }
  const { setTasks } = context;

  const handleOnButtonClick = () => {
    setIsOpen(false);
    const newName = nameRef.current?.value || "";
    const newDetail = detailRef.current?.value || "";
    const newLink = linkRef.current?.value || "";

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        name: newName,
        detail: newDetail,
        link: newLink,
      },
    ]);

    if (nameRef.current) nameRef.current.value = "";
    if (detailRef.current) detailRef.current.value = "";
    if (linkRef.current) linkRef.current.value = "";
  };

  return (
    <ChangeTaskWrapper>
      <LabelAndInputWrapper>
        <Label>タイトル</Label>
        <Input type="text" ref={nameRef} />
      </LabelAndInputWrapper>
      <LabelAndInputWrapper>
        <Label>詳細</Label>
        <Input type="text" ref={detailRef} />
      </LabelAndInputWrapper>
      <LabelAndInputWrapper>
        <Label>提出URL</Label>
        <Input type="text" ref={linkRef} />
      </LabelAndInputWrapper>
      <Button onClick={handleOnButtonClick}>課題を修正</Button>
    </ChangeTaskWrapper>
  );
};

const ChangeTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const LabelAndInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Label = styled.div`
  width: 64px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: #575757;
  color: white;
  text-decoration: none;
  border-radius: 10px;
`;

const Input = styled.input`
  font-size: 24px;
  background-color: #f7f7f7;
  border: 1px solid black;
  border-radius: 10px;
  padding-right: 5px;
  padding-left: 5px;
`;

const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: gray;
  color: white;
  text-decoration: none;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;
