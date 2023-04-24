import {Stack, Button, Typography, Container, FormGroup, TextField, Box, Alert, Snackbar} from "@mui/material";
import classes from '../styles/registerForm.module.css';
import {RiUserAddFill} from 'react-icons/ri';
import {useEffect, useRef, useState} from "react";

export const RegisterForm = () => {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: ''
  });
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const onNameChange = e => {
    const {target: {value}} = e;

    setValues(prev => ({
      ...prev,
      userName: value
    }));
  };

  const onEmailChange = e => {
    const {target: {value}} = e;

    setValues(prev => ({
      ...prev,
      email: value
    }));
  };

  const onPasswordChange = e => {
    const {target: {value}} = e;

    setValues(prev => ({
      ...prev,
      password: value
    }));
  };

  const onSubmit = e => {
    const {userName, password, email} = values;
    e.preventDefault();

    if (!userName)
      inputName.current.focus();
    else if (!email)
      inputEmail.current.focus();
    else if (!password)
      inputPassword.current.focus();

    if (userName && password && email)
      setValid(true);

    setSubmit(true);
  };

  const onKeyUp = e => {
    const {key} = e;

    if (key === 'Enter')
      onSubmit(e);
  };

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const [alertOpen, setAlert] = useState(true);

  const onClose = () => setAlert(false);

  return (
    <Container className={classes.container} style={{display: 'flex'}}>
      {
        submit && valid ? (
          <>
            <Snackbar autoHideDuration={5000} open={alertOpen} onClose={onClose}>
              <Alert variant='filled' severity='success' onClose={onClose}>
                Registration was successful!
              </Alert>
            </Snackbar>
            <Typography variant='h3'>Welcome {values.userName}</Typography>
          </>
        ) : (
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
              <Button
                variant='contained'
                onClick={onSubmit}
                fullWidth
              >
                Register
              </Button>
            </Box>
          </Stack>
        )
      }
    </Container>
  );
}