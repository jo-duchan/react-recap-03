import React from "react";

import Card from "components/UI/Card/Card";
import classes from "components/Home/Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
