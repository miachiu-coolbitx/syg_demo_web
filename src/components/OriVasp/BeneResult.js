import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const marginTop = {
  marginTop: "30px",
};

const grayTxt = {
  marginTop: "5px",
  color: "#8F9BB3",
};

const TestBlu = withStyles({
  root: {
    borderColor: "#006FB1",
    color: "#006FB1",
    wordWrap: "break-word",
  },
})(Typography);

export default function BeneResult(props) {
  const { clickAccept } = props;
  return (
    <React.Fragment>
      <div className="border_form" style={marginTop}>
        <Typography gutterBottom variant="h6" className="title">
          Beneficiary Result
        </Typography>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Transfer ID
            </Typography>
          </Grid>
          <Grid item xs={8} md={9}>
            <TestBlu>9eee630c20a2aa894373216b32343c9eee630c20</TestBlu>
          </Grid>
        </Grid>
        <div className="divider"></div>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Typography variant="h6" className="title label_title">
              Result
            </Typography>
          </Grid>
          {/* {console.log=(`clickAccept =${clickAccept}`)} */}
          <Grid item xs={8} md={9}>
            {clickAccept === true ? (
              <Typography style={{ color: "#049956" }}>ACCEPT</Typography>
            ) : (
              <Typography style={{ color: "#CC2A32" }}>REJECT</Typography>
            )}
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
            <TestBlu>
              9eee630c20a2aa894373216b32343c429621b02f29c35130e7573f4d775edd8e7fd50f1a5813a234246785a2fcd542058a0b6ca3d56bc6719b8eb14c88b19301
            </TestBlu>
          </Grid>
        </Grid>
      </div>
      <div style={grayTxt}>
        *This is the result from Beneficary VASP base on information below
      </div>
    </React.Fragment>
  );
}
