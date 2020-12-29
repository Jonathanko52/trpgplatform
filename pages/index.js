import Header from "./presentational/header";
import Sidebar from "./presentational/sidebar";
import Body from "./presentational/body";

import { createUseStyles } from "react-jss";
import Link from "next/link";

export const useStyles = createUseStyles({
  home: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    border: "solid 1px red",
    margin: "-8px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexGrow: "1",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Header></Header>
      <div className={classes.container}>
        <Sidebar></Sidebar>
        <Body></Body>
      </div>
    </div>
  );
}
