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
  let organization = [];
  let pageData = data.characterSheet.noncalculatedValues;
  let additionalData = data.characterSheet.organization;
  for (const key in pageData.valueNames) {
    contents.push([pageData.valueNames[key], pageData[key]]);
  }
  organization = additionalData;

  return (
    <div className={classes.characterSheet}>
      <Subtable
        header="Character Sheet"
        contents={contents}
        organization={organization}></Subtable>
    </div>
  );
}

export default CharacterSheet;
