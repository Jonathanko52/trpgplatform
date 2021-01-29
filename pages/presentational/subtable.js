import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  subTableContainer: {},
  subTable: {
    flexWrap: "wrap",
    display: "flex",
    border: "1px solid",
    flexGrow: "1",
  },
  subTableItem: {
    margin: "1em",
  },
  subTableHeader: {
    paddingLeft: "2em",
    flexBasis: "100%",
  },
});

export function SubtableContainer(props) {
  const classes = useStyles();
  let array = [];

  const subtableContentSort = () => {
    if (props.organization) {
      console.log(props.contents);
      for (const keys in props.organization) {
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
