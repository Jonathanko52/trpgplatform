import React from "react";
import { createUseStyles } from "react-jss";
import Link from "next/link";

export const useStyles = createUseStyles({
  sidebar: { border: "solid 1px", flexBasis: "300px" },
});

export function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
