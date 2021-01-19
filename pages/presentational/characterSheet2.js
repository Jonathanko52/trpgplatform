import React from "react";
import { createUseStyles } from "react-jss";
import Attribute from "./attribute.js";
import data from "./../../gameData/tables2.json";
import subtable from "./subtable";

export const useStyles = createUseStyles({
  characterSheet: { border: "solid 1px", flexGrow: "1", paddingLeft: "2em" },
});

export function CharacterSheet2() {
  const classes = useStyles();
  let contents = [];
  let pageData = data.characterSheet.noncalculatedValues;
  console.log("PAGEDATA", pageData);
  for (const key in pageData.valueNames) {
    contents.push(
      <div>
        {pageData.valueNames[key]}: {pageData[key]}
      </div>
    );
  }

  return (
    <div className={classes.characterSheet}>
      <h4>Character Sheet</h4>
      {contents}
    </div>
  );
}

export default CharacterSheet2;
