import Header from "./presentational/header";
import Sidebar from "./presentational/sidebar";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  header: { border: "solid 1px" },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Header></Header>
      <Sidebar></Sidebar>
    </div>
  );
}
