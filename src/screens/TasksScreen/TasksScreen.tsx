import { Droppable } from "react-beautiful-dnd";
import { useGlobalState } from "../../context/AppStateContext";
import { Column } from "./../../components/taskList/Column";
import { TasksContainer, TasksScreenLayout } from "./styles";

export function TasksScreen() {
  const { state } = useGlobalState();

  return (
    <TasksScreenLayout>
      <TasksContainer>
        {state.projects.map((list, i) => {
          return (
            <Droppable droppableId={list.id} key={i}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Column
                    title={list.title}
                    key={list.id}
                    index={i}
                    id={list.id}
                    status="TO DO"
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </TasksContainer>
    </TasksScreenLayout>
  );
}
