import React from "react";
import { createUseStyles } from "react-jss";
import Attribute from "./attribute.js";
import data from "./../../gameData/tables.json";

export const useStyles = createUseStyles({
  characterSheet: { border: "solid 1px", flexGrow: "1" },
});

export function CharacterSheet2() {
  const classes = useStyles();
  let attributesArray = [];
  console.log("data", data.characterSheet);
  data.characterSheet.attributes.forEach((cur) => {
    attributesArray.push(<Attribute text={cur} />);
  });

  return (
    <div className={classes.characterSheet}>
      <h4>Character Sheet</h4>
      {attributesArray}
    </div>
  );
}

export default CharacterSheet2;
