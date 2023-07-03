import React from "react";
import { AddNewItem } from "../addTaskButton/AddNewItem";
import { STATUS, useGlobalState } from "../../context/AppStateContext";
import { Card } from "../task/Task";
import { ColumnContainer, ColumnHeader, ColumnTitle } from "./styles";
import { Draggable } from "react-beautiful-dnd";

interface ColumnProps {
  title: string;
  index: number;
  id: string;
  status: STATUS;
}

export const Column = ({ title, index, id, status }: ColumnProps) => {
  const { state, dispatch } = useGlobalState();
  return (
    <ColumnContainer>
      <ColumnHeader>
        <ColumnTitle status={status}>{title}</ColumnTitle>
      </ColumnHeader>
      {state.projects[index].tasks.map((task, i) => (
        <Draggable draggableId={task.id} index={i} key={task.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card
                title={task.title}
                description={task.description}
                key={task.id}
              ></Card>
            </div>
          )}
        </Draggable>
      ))}
      <AddNewItem
        onAdd={(title: string, description: string) => {
          if (title !== "")
            dispatch({
              type: "ADD_TASK",
              payload: {
                text: title,
                description: description,
                taskId: id,
                status: status,
              },
            });
        }}
        toggleButtonText="+Add another task"
      />
    </ColumnContainer>
  );
};
