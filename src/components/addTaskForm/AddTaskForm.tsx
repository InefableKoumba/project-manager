import React, { useState } from "react";
import {
  NewItemButton,
  NewItemFormContainer,
  NewItemDescriptionInput,
  NewItemTitleInput,
} from "./styles";

interface NewItemFormProps {
  onAdd(title: string, description: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <NewItemFormContainer>
      <NewItemTitleInput
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Task title"
        autoFocus={true}
      ></NewItemTitleInput>
      <NewItemDescriptionInput
        value={description}
        placeholder="Task description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <NewItemButton onClick={() => onAdd(title, description)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};
