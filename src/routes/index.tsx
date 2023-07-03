import { Route, Switch } from "react-router-dom";
import { LoginScreen } from "../screens/loginScreen/LoginScreen";
import { ProjectsScreen } from "../screens/projectsScreen/ProjectsScreen";
import { TasksScreen } from "../screens/TasksScreen/TasksScreen";

export const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={LoginScreen} />
      <Route path="/projects" exact={true} component={ProjectsScreen} />
      <Route path="/projects/:id" exact={true} component={TasksScreen} />
    </Switch>
  );
};
