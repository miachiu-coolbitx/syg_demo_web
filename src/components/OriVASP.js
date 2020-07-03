import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TransInfo from "./OriVasp/TransferInfo";
import OriginInfo from "./OriVasp/OriginInfo";
import Button from "@material-ui/core/Button";
import BeneResult from "./BeneInfo/BeneResult";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
  },
  buttons: {
    paddingTop: "30px",
    textAlign: "center",
  },
}));

export default function Originator(props) {
  const classes = useStyles();
  const {
    activeStep,
    clickAccept,
    disable,
    originInfo,
    transferInfo,
    handleChange,
    handleSend,
    error,
    inputErrors,
    setInputErrors,
  } = props;

  const getError = (field) => inputErrors[field];
  //const [error, hasError] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity(); // 目前的表單資料是不是有效的
    // const isValid = true;
    const formData = new FormData(form); //表單的資料拿出來
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        // console.log(`key = ${key}`);
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (!isValid) {
      setInputErrors(validationMessages);
      props.onError();
      return;
    } else {
      handleSend();
    }
    //something
  };
  return (
    <React.Fragment>
      <main className={classes.layout}>
        {activeStep === 3 ? (
          <BeneResult activeStep={activeStep} clickAccept={clickAccept} />
        ) : null}
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TransInfo
            disable={disable}
            transferInfo={transferInfo}
            handleChange={handleChange}
            getError={getError}
            error={error}
          />
          {activeStep === 3 ? null : <OriginInfo originInfo={originInfo} />}
          <div className={classes.buttons}>
            {activeStep === 3 ? null : (
              <Button
                variant="contained"
                type={"submit"}
                onClick={() => {
                  //props.onSend();
                }}
                className="btn btn-primary"
              >
                Send
              </Button>
            )}
          </div>
        </form>
      </main>
    </React.Fragment>
  );
}
