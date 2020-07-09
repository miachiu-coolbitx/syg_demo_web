import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: "0 10px",
  },
}));

const TestBlu = withStyles({
  root: {
    color: "#006FB1",
    wordWrap: "break-word",
  },
})(Typography);

export default function TransferInfo(props) {
  const classes = useStyles();
  const { transferInfo, originInfo } = props;
  const { currency, amount, vasp, address } = transferInfo;
  const { o_vasp, o_address } = originInfo;
  const transcations = [
    { name: "Beneficiary Vasp Code", detail: vasp },
    {
      name: "Originator Address",
      detail: o_address,
    },
    { name: "Originator VASP Code", detail: o_vasp },
    {
      name: "Beneficiary Address",
      detail: address,
    },
    { name: "Transaction Currency", detail: currency },
    { name: "Amount", detail: amount },
  ];

  return (
    <React.Fragment>
      <div className="border_form">
        <Typography variant="h6" gutterBottom className="title">
          transfer info
        </Typography>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Private Info
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <TestBlu className={classes.root}>
              04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e04bb2aae0e33fbe50ffb6121375a4e
            </TestBlu>
          </Grid>
        </Grid>
        <div className="divider"></div>
        <Typography gutterBottom variant="h6" className="title label_title">
          Transaction
        </Typography>
        <Grid container spacing={1} className={classes.padding}>
          {transcations.map((transcation) => (
            <React.Fragment key={transcation.name}>
              <Grid item xs={4} md={3}>
                <Typography gutterBottom>{transcation.name}</Typography>
              </Grid>
              <Grid item xs={8} md={9}>
                <TestBlu gutterBottom>{transcation.detail}</TestBlu>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <div className="divider"></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Date
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <TestBlu>2019-08-15T10:28:10.364Z</TestBlu>
          </Grid>
        </Grid>
        <div className="divider"></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Signature
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <TestBlu>9eee630c20a2aa894373216b32343c9eee630c20a2aa</TestBlu>
          </Grid>
        </Grid>
        <div className="divider"></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              transfer ID
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <TestBlu>01ca7589-f697-4637-931e-aa8922-931e-aa8922</TestBlu>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
