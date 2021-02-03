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
  let organization = props.organization;
  let content = props.contents;
  const classes = useStyles();
  let array = [];
  const subtableContentSort = () => {
    if (props.organization) {
      for (const keys in organization) {
        let subtableItems = [];
        organization[keys].forEach((cur) => {
          subtableItems.push(content[cur]);
        });
        array.push(
          <Subtable header={keys} subtableitems={subtableItems}></Subtable>
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
  props.subtableitems.forEach((cur, index) => {
    if (cur) {
      let item = cur[0];
      let value = cur[1];
      innerArray.push(<SubtableItem key={index} item={item} value={value} />);
    }
  });
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
      acc.push(cur);
      return acc;
    }, []);
  } else {
    value = [value];
  }
  value = value.map((cur) => {
    return <input type="text" value={cur}></input>;
  });

  return (
    <div className={classes.subTableItem}>
      <label for="fname">{props.item} : </label>
      {value}
    </div>
  );
}

export default SubtableContainer;
