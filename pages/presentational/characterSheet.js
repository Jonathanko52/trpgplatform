import React from "react";
import { createUseStyles } from "react-jss";
import data from "../../gameData/tables2.json";
import SubtableContainer from "./subtable";

export const useStyles = createUseStyles({
  characterSheet: { border: "solid 1px", flexGrow: "1" },
  buttonContainer: {
    flexWrap: "wrap",
    display: "flex",
    borderBottom: "1px solid",
    flexGrow: "1",
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: "2em",
    paddingBottom: "2em",
    borderLeft: "1px solid",
    borderRight: "1px solid",
    justifyContent: "space-evenly",
  },
});

export function CharacterSheet() {
  const classes = useStyles();
  let contents = {};
  let organization = [];
  let pageData = data.characterSheet.noncalculatedValues;
  let additionalData = data.characterSheet.organization;
  for (const key in pageData.valueNames) {
    contents[key] = [pageData.valueNames[key], pageData[key]];
  }
  let calculatedValues = data.characterSheet.calculatedValues;
  for (const key in calculatedValues.valueNames) {
    contents[key] = [calculatedValues.valueNames[key], calculatedValues[key]];
  }
  organization = additionalData;
  return (
    <div className={classes.characterSheet}>
      <SubtableContainer
        header="Character Sheet"
        contents={contents}
        organization={organization}></SubtableContainer>

      <div className={classes.buttonContainer}>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default CharacterSheet;
