import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Layout } from "./styles";
import { MainRouter } from "./routes";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Topbar />
      <Layout>
        <Sidebar />
        <MainRouter />
      </Layout>
    </>
  );
}

export default App;
