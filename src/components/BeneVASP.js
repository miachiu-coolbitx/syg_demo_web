import React from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import TransferInfo from "./BeneVasp/TransferInfo";
import PrivateInfo from "./BeneVasp/Private";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: "0 10px",
  },
}));

const TestBtn = withStyles({
  root: {
    marginBottom: "0",
    padding: "8px 15px",
    lineHeight: 1.5,
    fontSize: "14px",
    "&:hover": {
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
})(Button);

const TestIcon = {
  marginRight: "5px",
  fontSize: "32px",
};

export default function BeneInfo(props) {
  const classes = useStyles();
  const { onAccept, onReject, transferInfo, originInfo, clickCount } = props;
  const VeriText = () => {
    return (
      <ListItem style={{ padding: 0, color: "#34C174" }} disableGutters="true">
        {clickCount === 0 ? null : (
          <ListItem disableGutters="true">
            <CheckCircleRoundedIcon style={TestIcon} />
            <ListItem style={{ fontFamily: "Open Sans", paddingLeft: "0" }}>
              Verify Success!
            </ListItem>
          </ListItem>
        )}
      </ListItem>
    );
  };
  const Click = () => {
    return (
      <Typography>
        {clickCount < 2 ? (
          <TestBtn
            onClick={() => {
              if (clickCount === 1) {
                props.onDycrypt();
                //回傳父層（Content.js）使 activeStep 增加數值（打勾）
              }
              props.onClick();
            }}
            variant="contained"
            className="btn btn-primary"
          >
            {clickCount === 0 ? "Verfiy" : "Decrypt"}
          </TestBtn>
        ) : null}
      </Typography>
    );
  };

  return (
    <React.Fragment>
      {console.log(`transferInfo= ${transferInfo}`)}
      <ListItem disableGutters="true">
        {VeriText(props)}
        {Click(props)}
      </ListItem>
      <TransferInfo transferInfo={transferInfo} originInfo={originInfo} />
      {clickCount === 2 ? (
        <PrivateInfo
          onAccept={onAccept}
          onReject={onReject}
          originInfo={originInfo}
          transferInfo={transferInfo}
        />
      ) : null}
    </React.Fragment>
  );
}
