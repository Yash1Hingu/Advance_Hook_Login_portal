import React, { useState, useRef, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import LoginContext from '../store/login-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'EMAIL_ISVAILD') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'PASSWORD_ISVAILD') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}


const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const autuCtx = useContext(LoginContext);

  const emailInput = useRef();
  const passwordInput = useRef();

  const [emailState, dispatchEmail] = useReducer(emailReducer,
    {
      value: '',
      isValid: null
    }
  );
  const [passwordState, dispatchPassword] = useReducer(passwordReducer,
    {
      value: '',
      isValid: null
    }
  )

  const { isValid: emailIsvaild } = emailState;
  const { isValid: passwordIsvaild } = passwordState;

  useEffect(() => {
    const indetifier = setTimeout(() => {
      // console.log("Form Vaildating!")
      setFormIsValid(
        emailIsvaild && passwordIsvaild
      );
    }, 500);

    return () => {
      // console.log("CLEANUP");
      clearTimeout(indetifier);
    }
  }, [emailIsvaild, passwordIsvaild])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_ISVAILD' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_ISVAILD' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      autuCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsvaild) {
      emailInput.current.focus();
    } else {
      passwordInput.current.focus();
    }
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInput}
          label="E-Mail"
          isValid={emailState.isValid}
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInput}
          label="Password"
          isValid={passwordState.isValid}
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
