import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  subTableContainer: {},
  subTable: { flexWrap: "wrap", display: "flex" },
  subTableItem: {
    flexGrow: "1",
    margin: "1em",
  },
});

export function Subtable(props) {
  const classes = useStyles();
  let array = [];
  props.contents.forEach((cur, index) => {
    array.push(<SubtableItem key={index} item={cur[0]} value={cur[1]} />);
  });

  return (
    <div className={classes.subTableContainer}>
      <h4 className={classes.subTableHeader}>{props.header}</h4>
      <div className={classes.subTable}>{array}</div>
    </div>
  );
}

export function SubtableItem(props) {
  const classes = useStyles();
  let value = props.value;
  if (Array.isArray(value)) {
    value = value.reduce((acc, cur) => {
      return acc + cur;
    }, []);
  }
  return (
    <div className={classes.subTableItem}>
      <label for="fname">{props.item} : </label>
      <input type="text" value={props.value}></input>
    </div>
  );
}

export default Subtable;
