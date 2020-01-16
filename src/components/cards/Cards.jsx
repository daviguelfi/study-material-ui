import React from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    minWidht: 276,
    maxWidth: 376,
    backgroundColor: "#e9e9e9",
    margin: 16,
    borderRadius: 4,
    margin: 20,
    padding: 8
  },
  title: {
    fontSize: 16,
    color: "#fffff",
    width: "100%",
    fontWeight: 'bold',
    // fontStyle: 'italic',
  },
  pos: {
    marginBottom: 12
  }
});

function Cards({ title, amount, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          R$ {amount}
        </Typography>
      </CardContent>
    </Card>
  );
}

Cards.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string
};

Cards.defaultProps = {
  title: "",
  amount: "",
  description: ""
};

export default Cards;
