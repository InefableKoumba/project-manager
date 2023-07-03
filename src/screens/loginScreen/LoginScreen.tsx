import { useHistory } from "react-router";
import {
  LoginForm,
  LoginScreenContainer,
  PasswordInput,
  SubmitButton,
  UsernameInput,
} from "./styles";

export const LoginScreen = () => {
  const history = useHistory();
  return (
    <LoginScreenContainer>
      <LoginForm>
        <UsernameInput placeholder="Username" onChange={() => {}} />
        <PasswordInput placeholder="Password" onChange={() => {}} />
        <SubmitButton
          onClick={() => {
            history.push(`/projects`);
          }}
        >
          Submit
        </SubmitButton>
      </LoginForm>
    </LoginScreenContainer>
  );
};
