import React from "react";
import { createUseStyles } from "react-jss";
import data from "../../gameData/tables2.json";
import Subtable from "./subtable";

export const useStyles = createUseStyles({
  characterSheet: { border: "solid 1px", flexGrow: "1", paddingLeft: "2em" },
});

export function CharacterSheet() {
  const classes = useStyles();
  let contents = [];
  let pageData = data.characterSheet.noncalculatedValues;
  for (const key in pageData.valueNames) {
    contents.push([pageData.valueNames[key], pageData[key]]);
  }

  return (
    <div className={classes.characterSheet}>
      <Subtable header="Character Sheet" contents={contents}></Subtable>
    </div>
  );
}

export default CharacterSheet;
