import React, { useState, useEffect } from "react";
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
  const [characterDatasheet, setCharacterSheet] = useState({});
  const [contents, setContents] = useState({});
  const [organization, setOrganization] = useState({});
  const classes = useStyles();
  const saveCharacterSheet = () => {
    alert("SAVING");
  };
  const loadCharacterSheet = () => {
    alert("LOADING");
    setCharacterSheet(data);
  };
  const clearCharacterSheet = () => {
    alert("CLEARING");
  };
  const deleteCharacterSheet = () => {
    alert("DELETING");
  };
  const updateCharacterSheetOnChange = (value) => {};
  const processCharacterSheetDataInto = () => {
    let contentsInner = {};

    let pageData;
    let additionalData;
    let calculatedValues;

    setCharacterSheet(data.characterSheet);

    if (characterDatasheet["noncalculatedValues"]) {
      pageData = characterDatasheet.noncalculatedValues;
      additionalData = characterDatasheet.organization;
      calculatedValues = characterDatasheet.calculatedValues;
      for (const key in pageData.valueNames) {
        contentsInner[key] = [pageData.valueNames[key], pageData[key]];
      }
      for (const key in calculatedValues.valueNames) {
        let calculationFunction = data.characterSheet.calculations[key];
        let func = eval(calculationFunction.func);
        let calculatedValuesAfterCalculation = func(data.characterSheet);
        contentsInner[key] = [
          calculatedValues.valueNames[key],
          calculatedValuesAfterCalculation,
        ];
      }
    }
    // setOrganization(additionalData);
    // setContents(contentsInner);
  };

  useEffect(() => {
    processCharacterSheetDataInto();
  });

  return (
    <div className={classes.characterSheet}>
      <SubtableContainer
        header="Character Sheet"
        contents={contents}
        organization={organization}
        onchangelistener={updateCharacterSheetOnChange}></SubtableContainer>

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
              alert("savecanceled");
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
