import Head from "next/head";
import Test from "./presentational/test";
import Header from "./presentational/header";
import Sidebar from "./presentational/sidebar";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  page: { border: "solid 1px" },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Header></Header>
      <Sidebar></Sidebar>
    </div>
  );
}
