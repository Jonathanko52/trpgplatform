import React from "react";
import { createUseStyles } from "react-jss";
import data from "./../../gameData/tables.json";

export const useStyles = createUseStyles({
  subTable: { border: "solid 1px", flexGrow: "1" },
  subTableItem: { border: "solid 1px", flexGrow: "1" },
});

export function Subtable(props) {
  const classes = useStyles();
  let array = [];
  props.subtableContents.forEach((cur) => {
    array.push(<SubtableItem text={cur} />);
  });

  return (
    <div className={classes.subTable}>
      <h4>{props.subTableheader}</h4>
      {array}
    </div>
  );
}

export function SubtableItem(props) {
  const classes = useStyles();

  return (
    <div>
      <input type="text" className={classes.subTableItem}>
        {subtableItem}
      </input>
    </div>
  );
}

export default Subtable;
