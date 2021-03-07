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
  characterSheetButtons: {
    border: "none",
    color: "black",
    padding: "0.5em 1em",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: "1em",
  },
});

export function CharacterSheet() {
  const classes = useStyles();
  const saveCharacterSheet = () => {
    alert("SAVING");
  };
  const loadCharacterSheet = () => {
    alert("LOADING");
  };
  const clearCharacterSheet = () => {
    alert("CLEARING");
  };
  const deleteCharacterSheet = () => {
    alert("DELETING");
  };
  let contents = {};
  let organization = [];
  let pageData = data.characterSheet.noncalculatedValues;
  let additionalData = data.characterSheet.organization;
  for (const key in pageData.valueNames) {
    contents[key] = [pageData.valueNames[key], pageData[key]];
  }
  let calculatedValues = data.characterSheet.calculatedValues;
  for (const key in calculatedValues.valueNames) {
    //runs the calculation on calculated value, which isn't terribly accurate
    let calculationFunction = data.characterSheet.calculations[key];
    let func = eval(calculationFunction.func);
    let calculatedValuesAfterCalculation = func(pageData);
    contents[key] = [
      calculatedValues.valueNames[key],
      calculatedValuesAfterCalculation,
    ];
  }
  organization = additionalData;
  return (
    <div className={classes.characterSheet}>
      <SubtableContainer
        header="Character Sheet"
        contents={contents}
        organization={organization}></SubtableContainer>

      <div className={classes.buttonContainer}>
        <button
          className={classes.characterSheetButtons}
          onClick={() => {
            let confirm = window.confirm(
              "Are you sure you want to save your character?"
            );

            if (confirm) {
              saveCharacterSheet();
            } else {
              alert("load canceled");
            }
          }}>
          Save
        </button>
        <button
          className={classes.characterSheetButtons}
          onClick={() => {
            let confirm = window.confirm(
              "Are you sure you want to load your character?"
            );
            if (confirm) {
              loadCharacterSheet();
            } else {
              alert("load canceled");
            }
          }}>
          Load
        </button>
        <button
          className={classes.characterSheetButtons}
          onClick={() => {
            let confirm = window.confirm(
              "Are you sure you want to delete your character?"
            );

            if (confirm) {
              deleteCharacterSheet();
            } else {
              alert("delete canceled");
            }
          }}>
          Delete
        </button>
        <button
          className={classes.characterSheetButtons}
          onClick={() => {
            let confirm = window.confirm(
              "Are you sure you want to clear your character?"
            );
            if (confirm) {
              clearCharacterSheet();
            } else {
              alert("clear canceled");
            }
          }}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default CharacterSheet;
