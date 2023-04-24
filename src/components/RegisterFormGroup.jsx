import {FormGroup, TextField} from "@mui/material";
import classes from "../styles/registerForm.module.css";

const RegisterFormGroup = (
  {
    onPasswordChange,
    onEmailChange,
    inputPassword,
    onNameChange,
    inputEmail,
    inputName,
    submit,
    values
  }) => (
  <FormGroup className={classes.formGroup}>
    <TextField
      helperText={(submit && !values.userName) && 'Please enter your name'}
      error={submit && !values.userName}
      placeholder='Enter your name'
      className={classes.textField}
      value={values.userName}
      onChange={onNameChange}
      inputRef={inputName}
      size='small'
    />
    <TextField
      helperText={(submit && !values.email) && 'Please enter your email'}
      placeholder='Enter your email'
      error={submit && !values.email}
      className={classes.textField}
      onChange={onEmailChange}
      inputRef={inputEmail}
      value={values.email}
      type='email'
      size='small'
    />
    <TextField
      helperText={(submit && !values.password) && 'Please enter your password'}
      placeholder='Enter your password'
      error={submit && !values.password}
      className={classes.textField}
      onChange={onPasswordChange}
      inputRef={inputPassword}
      value={values.password}
      type='password'
      size='small'
    />
  </FormGroup>
);

export default RegisterFormGroup;