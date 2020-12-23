import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  header: { border: "solid 1px" },
});

export function Header() {
  const classes = useStyles();

  return <div className={classes.header}> Header</div>;
}

export default Header;
