import Modal from "react-modal";
import { useGlobalState } from "../../context/AppStateContext";
import { AddProjectForm } from "../addProjectForm/AddProjectForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
  },
};

Modal.defaultStyles.overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

export function AddProjectModal() {
  const { state, dispatch } = useGlobalState();
  return (
    <Modal
      isOpen={state.modals.isAddProjectModalOpen}
      onRequestClose={() => dispatch({ type: "CLOSE_AddProjectModal" })}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <AddProjectForm />
    </Modal>
  );
}
