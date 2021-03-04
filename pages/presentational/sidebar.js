import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

export const useStyles = createUseStyles({
  sidebar: { border: "solid 1px", flexBasis: "300px", paddingRight: "2em" },
});

export function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/characterSheet">
            Character Sheet
          </Link>
        </li>
        <li>
          <Link to="/map">
            Map
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
