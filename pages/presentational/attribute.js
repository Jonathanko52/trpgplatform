import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  attrform: { border: "solid 1px", flexGrow: "1" },
});

export function attribute() {
  const classes = useStyles();

  return (
    <div>
      Attribute <input type="text" className={classes.attrform}></input>
    </div>
  );
}

export default attribute;
