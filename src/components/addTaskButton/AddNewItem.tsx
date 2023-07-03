import { useState } from "react";
import { AddItemButton, AddTaskButtonContainer } from "./styles";
import { NewItemForm } from "../addTaskForm/AddTaskForm";

interface AddNewItemProps {
  onAdd(title: string, description: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = ({ onAdd, toggleButtonText }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(title, description) => {
          onAdd(title, description);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddTaskButtonContainer>
      <AddItemButton onClick={() => setShowForm(true)}>
        {toggleButtonText}
      </AddItemButton>
    </AddTaskButtonContainer>
  );
};
