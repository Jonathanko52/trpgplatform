import Header from "./presentational/header";
import Sidebar from "./presentational/sidebar";
import Body from "./presentational/body";
import GameMap from "./presentational/gameMap";
import CharacterSheet from "./presentational/characterSheet2";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createUseStyles } from "react-jss";

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
      <Router>
        <Header></Header>
        <div className={classes.container}>
          <Sidebar></Sidebar>
          <Switch>
            <Route exact path="/">
              <CharacterSheet />
            </Route>
            <Route path="/map">
              <GameMap />
            </Route>
            <Route path="/characterSheet">
              <Body />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
