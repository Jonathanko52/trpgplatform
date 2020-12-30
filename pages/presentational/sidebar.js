import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

export const useStyles = createUseStyles({
  sidebar: { border: "solid 1px", flexBasis: "300px" },
});

export function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/characterSheet">
            <a>Character Sheet</a>
          </Link>
        </li>
        <li>
          <Link to="/map">
            <a>Map</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
