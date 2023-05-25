import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import LoginContext from '../store/login-context';

const Home = (props) => {
  const autoCtx = useContext(LoginContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={autoCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
