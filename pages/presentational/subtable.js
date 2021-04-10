import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  subTableContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: "1em",
    borderLeft: "1px solid",
    borderRight: "1px solid",
  },
  subTable: {
    flexWrap: "wrap",
    display: "flex",
    borderTop: "1px solid",
    borderBottom: "1px solid",
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
  let onchangelistener = props.onchangelistener;

  const [organization, setOrganization] = useState({});
  const [contents, setContents] = useState({});

  const classes = useStyles();
  let array = [];

  useEffect(() => {
    setContents(props.contents);
    setOrganization(props.organization);
    subtableContentSort();
  });

  const subtableContentSort = () => {
    console.log("SUBTABLE");
    if (organization) {
      let count = 0;
      for (const keys in organization) {
        let subtableItems = [];
        organization[keys].forEach((cur) => {
          subtableItems.push(contents[cur]);
        });
        array.push(
          <Subtable
            key={count}
            header={keys}
            subtableitems={subtableItems}
            onchangelistener={onchangelistener}></Subtable>
        );
        count++;
      }
    }
  };

  //Why is it working here?
  subtableContentSort();

  return (
    <div className={classes.subTableContainer}>
      <h4 className={classes.subTableHeader}>{props.header}</h4>
      <div className={classes.subTable}>{array}</div>
    </div>
  );
}

export function Subtable(props) {
  let onchangelistener = props.onchangelistener;
  const classes = useStyles();

  let innerArray = [];
  props.subtableitems.forEach((cur, index) => {
    if (cur) {
      let item = cur[0];
      let value = cur[1];
      innerArray.push(
        <SubtableItem
          onchangelistener={onchangelistener}
          key={index}
          item={item}
          value={value}
        />
      );
    }
  });
  return (
    <div
      className={classes.subTable}
      onChange={() => {
        onchangelistener;
      }}>
      <h4 className={classes.subTableHeader}>{props.header}</h4>
      {innerArray}
    </div>
  );
}

export function SubtableItem(props) {
  const classes = useStyles();
  let value = props.value;
  let onchangelistener = props.onchangelistener;
  if (Array.isArray(value)) {
    value = value.reduce((acc, cur) => {
      acc.push(cur);
      return acc;
    }, []);
  } else {
    value = [value];
  }
  value = value.map((cur, ind) => {
    return (
      <input
        onChange={(e) => {
          onchangelistener(e.target.value);
        }}
        key={ind}
        type="text"
        defaultValue={cur}></input>
    );
  });

  return (
    <div className={classes.subTableItem}>
      <label>{props.item} : </label>
      {value}
    </div>
  );
}

export default SubtableContainer;
