import React, { createContext, useContext, useEffect, useReducer } from "react";
import { v1 as uuid } from "uuid";
import { findItemIndexById } from "../utils/findItemIndexById.";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { saveData } from "../api/api";
import Modal from "react-modal";
import { AddProjectModal } from "../components/AddProjectModal/AddProjectModal";

export type STATUS = "TO DO" | "IN PROGRESS" | "DONE";
export type REQUEST_LINKS = "users" | "projects" | "tasks";

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  tasks: Task[];
}

export interface GlobalState {
  projects: ProjectInterface[];
  modals: {
    isAddProjectModalOpen: boolean;
    isAddTaskModal: boolean;
    isEditProjectModal: boolean;
    isEditTaskModal: boolean;
  };
}
export const initialState: GlobalState = {
  projects: [
    {
      id: "list-one",
      title: "To Do",
      description: "This is the first project on the list",
      createdAt: new Date(Date.now()),
      tasks: [
        {
          id: "task-one",
          title: "Generate a app scaffold",
          description:
            "We must generate the scaffold of our App before contuning",
          status: "TO DO",
          createdAt: new Date(),
        },
      ],
    },
  ],
  modals: {
    isAddProjectModalOpen: false,
    isAddTaskModal: false,
    isEditTaskModal: false,
    isEditProjectModal: false,
  },
};

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  status: STATUS;
}
interface List {
  id: string;
  title: string;
  status: STATUS;
  tasks: Task[]; // II wonder if this is the same --> tasks : Array<Task>
}

interface GlobalStateContextProps {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}

const GlobalStateContext = createContext<GlobalStateContextProps>(
  {} as GlobalStateContextProps
);

export const GlobalStateProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(globalStateReduce, initialState);

  const onDragStart = () => {
    console.log("dragging");
  };
  const onDragEnd = (result: DropResult) => {
    // the only one that is required
    dispatch({ type: "MOVE_TASK", payload: { result: result } });
  };

  useEffect(() => {
    saveData(state);
  }, [state]);
  //
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <GlobalStateContext.Provider value={{ state, dispatch }}>
        {children}
        <AddProjectModal />
      </GlobalStateContext.Provider>
    </DragDropContext>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_PROJECT";
      payload: {
        title: string;
        description: string;
      };
    }
  | {
      type: "ADD_TASK";
      payload: {
        text: string;
        taskId: string;
        description: string;
        status: STATUS;
      };
    }
  | {
      type: "MOVE_TASK";
      payload: {
        result: DropResult;
      };
    }
  | {
      type: "SHOW_AddProjectModal";
    }
  | {
      type: "CLOSE_AddProjectModal";
    }
  | {
      type: "SHOW_EditProjectModal";
    }
  | {
      type: "CLOSE_EditProjectModal";
    }
  | {
      type: "SHOW_AddTaskModal";
    }
  | {
      type: "CLOSE_AddTaskModal";
    };

const globalStateReduce = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_PROJECT": {
      // We will send a request to the server asking it to create a new project
      // The server will send us back the information of the created project
      // We will then push this project that we received from the server in the
      // global state of the frontend

      // We must implement a simple animation while the server is creating the
      // Project. I'm thinking of a spinning circle in the submit button
      state.projects.push({
        id: "",
        title: action.payload.title,
        description: action.payload.description,
        createdAt: new Date(Date.now()),
        tasks: [],
      });
      return { ...state };
    }
    case "ADD_TASK": {
      const targetLaneIndex = findItemIndexById(
        state.projects,
        action.payload.taskId
      );
      state.projects[targetLaneIndex].tasks.push({
        id: uuid(),
        title: action.payload.text,
        description: action.payload.description,
        status: "DONE",
        createdAt: new Date(),
      });
      return { ...state };
    }
    case "MOVE_TASK": {
      const result: DropResult = action.payload.result;
      // If no destination has been provided, we just stop this function
      if (!result.destination || !result.source) return { ...state };

      // A droppable is a list that contains cards e.g : `To-Do list`, `In progress` list, `Done` lis

      // 1- Get the id of the orign droppable, the id of the destination droppable and the
      // id of the card that has been dragged (the draggable)
      const sourceDroppableId = result.source.droppableId;
      const destinationDroppableId = result.destination.droppableId;
      const sourceDroppable = state.projects.find(
        (list) => list.id === sourceDroppableId
      );
      const destinationDroppable = state.projects.find(
        (list) => list.id === destinationDroppableId
      );

      // Gotta look for a better way for this guy bellow
      if (!destinationDroppable || !sourceDroppable) return { ...state };

      const sourceIndex = result.source.index;
      const destinationIndex = result.destination.index;
      const draggedItem = sourceDroppable.tasks[sourceIndex];
      draggedItem.status = "DONE";

      //  2- remove the draggable within its origin droppable and add it in the
      //  destination droppable
      sourceDroppable.tasks.splice(sourceIndex, 1);
      destinationDroppable.tasks.splice(destinationIndex, 0, draggedItem);

      // 3- update the state of the app to reflect the changement

      return { ...state };
    }
    case "SHOW_AddProjectModal": {
      state.modals.isAddProjectModalOpen = true;
      return { ...state };
    }
    case "CLOSE_AddProjectModal": {
      state.modals.isAddProjectModalOpen = false;
      return { ...state };
    }
    case "SHOW_EditProjectModal": {
      state.modals.isAddProjectModalOpen = true;
      return { ...state };
    }
    case "CLOSE_EditProjectModal": {
      state.modals.isAddProjectModalOpen = false;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
