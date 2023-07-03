import { useHistory } from "react-router";
import {
  AddNewProjectBtn,
  ProjectsContainer,
  Project,
  ProjectActionButtons,
  ProjectDeleteButton,
  ProjectDescription,
  ProjectOpenButton,
  ProjectTitle,
  Layout,
} from "./styles";
import { useEffect, useState } from "react";
import {
  ProjectInterface,
  useGlobalState,
} from "../../context/AppStateContext";
import { loadData } from "../../api/api";

export function ProjectsScreen() {
  const [projects, setProjects] = useState<ProjectInterface[] | null>(null);
  const history = useHistory();
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    loadData("projects")
      .then((data) => setProjects(data))
      .catch((err) => console.log("Unable to fetch data"));
  }, []);

  if (!state.projects?.length)
    return (
      <div
        style={{
          paddingTop: "5rem",
          backgroundColor: "teal",
          width: "100%",
          textAlign: "center",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem",
          color: "#fff",
        }}
      >
        Ooops... No projects found <br />
        <br />
        <AddNewProjectBtn
          onClick={() => dispatch({ type: "SHOW_AddProjectModal" })}
        >
          New project
        </AddNewProjectBtn>
      </div>
    );
  return (
    <Layout>
      <div style={{ textAlign: "right", padding: "4rem 5rem 0 0" }}>
        <AddNewProjectBtn
          onClick={() => dispatch({ type: "SHOW_AddProjectModal" })}
        >
          New project
        </AddNewProjectBtn>
      </div>
      <ProjectsContainer>
        {state.projects.map((project) => (
          <Project>
            <ProjectTitle>E-commerce App</ProjectTitle>
            <ProjectDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              autem explicabo quaerat quidem nostrum perferendis quis accusamus
              vel ex! Impedit.
            </ProjectDescription>
            <ProjectActionButtons>
              <ProjectDeleteButton>Delete</ProjectDeleteButton>
              <ProjectOpenButton
                onClick={() => {
                  history.push("/projects/id");
                }}
              >
                Open
              </ProjectOpenButton>
            </ProjectActionButtons>
          </Project>
        ))}
      </ProjectsContainer>
    </Layout>
  );
}
