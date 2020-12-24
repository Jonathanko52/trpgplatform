import Header from "./presentational/header";
import Sidebar from "./presentational/sidebar";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  home: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    border: "solid 1px red",
    margin: "-8px",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Header></Header>
      <Sidebar></Sidebar>
    </div>
  );
}
