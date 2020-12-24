import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  body: { border: "solid 1px", flexGrow: "1" },
});

export function Body() {
  const classes = useStyles();

  return <div className={classes.body}> Body</div>;
}

export default Body;
