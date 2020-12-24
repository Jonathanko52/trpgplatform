import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  sidebar: { border: "solid 1px", flexBasis: "300px" },
});

export function Sidebar(props) {
  const classes = useStyles();

  return <div className={classes.sidebar}>Sidebar</div>;
}

export default Sidebar;
