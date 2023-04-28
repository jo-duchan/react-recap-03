import React, { useContext } from "react";

import Card from "components/UI/Card/Card";
import Button from "components/UI/Button/Button";
import classes from "components/Home/Home.module.css";
import AuthContext from "store/auth-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
