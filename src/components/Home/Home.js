import React from "react";

import Card from "components/UI/Card/Card";
import Button from "components/UI/Button/Button";
import classes from "components/Home/Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
