import {useState} from "react";

export default function useTextFields() {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: ''
  });

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

  return {
    onPasswordChange,
    onEmailChange,
    onNameChange,
    values
  };
}