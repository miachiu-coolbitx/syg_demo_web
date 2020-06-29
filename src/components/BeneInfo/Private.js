import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const transactions = [
  { name: "Name", detail: "David Beckham" },
  { name: "Date of birth", detail: "1975-05-02" },
  {
    name: "Physical Address",
    detail: "Bahnhofstrasse 665, 8001 Zurich, Switzerlan",
  },
  { name: "Unique Identity", detail: "-" },
  { name: "National Identity Number", detail: "-" },
];

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: "0 10px",
  },
  buttons: {
    paddingTop: "30px",
    textAlign: "center",
  },
}));

const marginTop = {
  marginTop: "30px",
};

const divider = {
  display: "block",
  borderBottom: "1px solid #C5CEE0",
  margin: "7px 0",
};

const deepBlue = {
  borderColor: "#006FB1",
  color: "#006FB1",
};

export default function PrivateInfo(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="border_form" style={marginTop}>
        <Typography
          variant="h6"
          gutterBottom
          className="title title_blue"
          style={deepBlue}
        >
          Private Info
        </Typography>
        <Typography gutterBottom variant="h6" className="title label_title">
          Originator
        </Typography>
        <Grid container spacing={1} className={classes.padding}>
          {transactions.map((transaction) => (
            <React.Fragment key={transaction.name}>
              <Grid item xs={4} md={3}>
                <Typography gutterBottom>{transaction.name}</Typography>
              </Grid>
              <Grid item xs={8} md={9}>
                <Typography gutterBottom style={deepBlue}>
                  {transaction.detail}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <div style={divider}></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Beneficiary
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <Typography style={deepBlue}>Antoine Griezmann</Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          onClick={props.onAccept}
          className="btn btn-primary"
        >
          Accept
        </Button>
        <Button
          variant="contained"
          onClick={props.onReject}
          className="btn btn-danger"
        >
          Reject
        </Button>
      </div>
    </React.Fragment>
  );
}
