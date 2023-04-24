import {Box, Button, Stack, Typography} from "@mui/material";
import classes from "../styles/registerForm.module.css";
import {RiUserAddFill} from "react-icons/ri";
import RegisterFormGroup from "./RegisterFormGroup";

const RegisterForm = (
  {
    onPasswordChange,
    onEmailChange,
    inputPassword,
    onNameChange,
    inputEmail,
    inputName,
    onSubmit,
    onKeyUp,
    values,
    submit
  }) => (
  <Stack className={classes.formContainer}>
    <Typography variant='h4' className={classes.title}>
      <RiUserAddFill color='dodgerblue' fontSize={48}/>
      Registration
    </Typography>
    <Box
      className={classes.form}
      onSubmit={onSubmit}
      onKeyUp={onKeyUp}
      component='form'
    >
      <RegisterFormGroup
        onPasswordChange={onPasswordChange}
        onEmailChange={onEmailChange}
        inputPassword={inputPassword}
        onNameChange={onNameChange}
        inputEmail={inputEmail}
        inputName={inputName}
        submit={submit}
        values={values}
      />
      <Button variant='contained' onClick={onSubmit} fullWidth>
        Register
      </Button>
    </Box>
  </Stack>
);

export default RegisterForm;