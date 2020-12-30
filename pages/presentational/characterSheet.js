import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  characterSheet: { border: "solid 1px", flexGrow: "1" },
});

export function CharacterSheet() {
  const classes = useStyles();

  return <div className={classes.characterSheet}>Character Sheet</div>;
}

export default CharacterSheet;
