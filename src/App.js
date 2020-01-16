import React from "react";

import Card from "../src/components/cards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    padding: 0,
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#2c2c2c",
    borderRadius: 4,
    justifyContent: "center"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card title={"Fatura"} amount={"125,00"} />
      <Card title={"Saldo"} amount={"300,00"} />
    </div>
  );
}

export default App;
