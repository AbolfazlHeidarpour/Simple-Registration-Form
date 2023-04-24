import {useEffect, useRef, useState} from "react";

export default function useSubmit(values) {
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

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

  return {
    inputPassword,
    inputEmail,
    inputName,
    onSubmit,
    onKeyUp,
    submit,
    valid,
  };
}