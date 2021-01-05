import React from "react";
import { createUseStyles } from "react-jss";
import Attribute from "./attribute.js";

export const useStyles = createUseStyles({
  characterSheet: { border: "solid 1px", flexGrow: "1" },
});

export function CharacterSheet() {
  const classes = useStyles();

  return (
    <div className={classes.characterSheet}>
      <h4>Character Sheet</h4>
      <Attribute></Attribute>
    </div>
  );
}

export default CharacterSheet;
