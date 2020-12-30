import React from "react";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  gameMap: { border: "solid 1px", flexGrow: "1" },
});

export function GameMap() {
  const classes = useStyles();

  return <div className={classes.gameMap}> Game Map</div>;
}

export default GameMap;
