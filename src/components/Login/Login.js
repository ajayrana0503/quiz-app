import React, { useEffect, useState } from 'react';

import Card from '../UILogin/Card/Card';
import classes from './Login.module.css';
import Button from '../UILogin/Button/Button';
import ErrorModal from '../UI/ErrorModal';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState();

  const userdetails = JSON.parse(localStorage.getItem('users'));

  useEffect(()=>{
    const timeIdentifier=setTimeout(() => {
      console.log("--checking validity---")
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

   return()=>{
    console.log("clean up triggered");
      clearTimeout(timeIdentifier);
   };
  },[enteredEmail,enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    Object.keys(userdetails || {}).forEach(function(key, index) {
      if(!(enteredEmail===userdetails[key].email && enteredPassword===userdetails[key].password)){
        setError({
          title: "Email or Password is incorrect",
          message: "Please Enter a valid input",
      });
        }
    });
    props.onLogin(enteredEmail, enteredPassword);
  };

  const errorHandler = () => {
    setError(null);
}

  

  return (
    <div>
       {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
    </div>
  );
};

export default Login;
