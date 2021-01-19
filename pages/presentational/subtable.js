import React from "react";
import { createUseStyles } from "react-jss";
import data from "./../../gameData/tables.json";

export const useStyles = createUseStyles({
  subTable: { flexGrow: "1" },
  subTableItem: {
    flexGrow: "1",
    color: "red",
    marginTop: "1em",
  },
});

export function Subtable(props) {
  const classes = useStyles();
  let array = [];
  props.contents.forEach((cur, index) => {
    array.push(<SubtableItem key={index} item={cur[0]} value={cur[1]} />);
  });

  return (
    <div className={classes.subTable}>
      <h4>{props.header}</h4>
      {array}
    </div>
  );
}

export function SubtableItem(props) {
  const classes = useStyles();
  console.log(typeof props.item);
  return (
    <div>
      <label for="fname">{props.item} : </label>
      <input
        type="text"
        value={props.value}
        className={classes.subTableItem}></input>
    </div>
  );
}

export default Subtable;
