import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: { border: "solid 1px" },
});

export function Sidebar(props) {
  const classes = useStyles();

  return <div className={classes.container}>Container</div>;
}

export default Container;
