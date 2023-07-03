import { useState } from "react";
import { useGlobalState } from "../../context/AppStateContext";
import {
  FormContainer,
  ProjectDescriptionInput,
  ProjectSubmitButton,
  ProjectTitleInput,
} from "./styles";

export function AddProjectForm() {
  const { dispatch } = useGlobalState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <FormContainer>
      <h3>Add a new Project</h3>
      <ProjectTitleInput
        value={title}
        placeholder="The title of the project"
        onChange={(e) => setTitle(e.target.value)}
      />
      <ProjectDescriptionInput
        onChange={(e) => setDescription(e.target.value)}
        rows={10}
        value={description}
        placeholder="The description of the project"
      />
      <ProjectSubmitButton
        onClick={() =>
          dispatch({
            type: "ADD_PROJECT",
            payload: {
              title,
              description,
            },
          })
        }
      >
        Create
      </ProjectSubmitButton>
    </FormContainer>
  );
}
