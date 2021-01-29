import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  subTableContainer: {},
  subTable: {
    flexWrap: "wrap",
    display: "flex",
    borderTop: "1px solid",
    borderBottom: "1px solid",
    paddingLeft: "2em",
  },
  subTableItem: {
    flexGrow: "1",
    margin: "1em",
  },
});

export function SubtableContainer(props) {
  const classes = useStyles();
  let array = [];

  const subtableContentSort = () => {
    if (props.organization) {
      for (const keys in props.organization) {
        console.log("insubtablecontainer", props.organization[keys]);
        array.push(
          <Subtable
            header={keys}
            subtableitems={props.organization[keys]}></Subtable>
        );
      }
    }
  };
  subtableContentSort();

  return (
    <div className={classes.subTableContainer}>
      <h4 className={classes.subTableHeader}>{props.header}</h4>
      <div className={classes.subTable}>{array}</div>
    </div>
  );
}

export function Subtable(props) {
  const classes = useStyles();

  let innerArray = [];
  props.subtableitems.forEach((cur, index) =>
    innerArray.push(<SubtableItem key={index} item={cur} value={cur} />)
  );
  return (
    <div className={classes.subTable}>
      <h4 className={classes.subTableHeader}>{props.header}</h4>
      {innerArray}
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

export default SubtableContainer;
