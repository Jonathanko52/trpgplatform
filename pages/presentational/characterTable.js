import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  characterTable: { border: "solid 1px", flexGrow: "1" },
});

export function CharacterTable() {
  const classes = useStyles();

  return <div className={classes.characterTable}> Body</div>;
}

export default CharacterTable;
