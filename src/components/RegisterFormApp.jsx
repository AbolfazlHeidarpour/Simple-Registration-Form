import {Container} from "@mui/material";
import classes from '../styles/registerForm.module.css';
import WelcomePage from "./WelcomePage";
import useSubmit from "../hooks/useSubmit";
import useTextFields from "../hooks/useTextFields";
import RegisterForm from "./RegisterForm";

export const RegisterFormApp = () => {
  const {
    onPasswordChange,
    onEmailChange,
    onNameChange,
    values
  } = useTextFields();
  const {
    inputPassword,
    inputEmail,
    inputName,
    onSubmit,
    onKeyUp,
    submit,
    valid,
  } = useSubmit(values);
  return (
    <Container
      className={classes.container}
      style={{display: 'flex'}}
    >
      {
        submit && valid ?
          <WelcomePage />
        :
          <RegisterForm
            onPasswordChange={onPasswordChange}
            inputPassword={inputPassword}
            onEmailChange={onEmailChange}
            onNameChange={onNameChange}
            inputEmail={inputEmail}
            inputName={inputName}
            onSubmit={onSubmit}
            onKeyUp={onKeyUp}
            values={values}
            submit={submit}
          />
      }
    </Container>
  );
}