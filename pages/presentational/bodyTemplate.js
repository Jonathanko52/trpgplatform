import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  bodyTemplate: { border: "solid 1px", flexGrow: "1" },
});

export function BodyTemplate() {
  const classes = useStyles();

  return <div className={classes.bodyTemplate}> Body</div>;
}

export default BodyTemplate;
