import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {Tab, Tabs } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bridge from '../components/Info';
import Originator from '../components/OriVASP';
import Originator2 from '../components/OriVASP2';
import BeneInfo from '../components/BeneInfo/BeneInfo';
import 'typeface-noto-sans';
import 'typeface-open-sans';

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    height: '100%',
    borderRadius: '0',
  },
  stepBlock: {
    padding: '22px 0 33px',
  },
  stepStyle: {
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto',
    padding: '0',
    marginTop: '22px',
    backgroundColor: 'transparent',
  },
  leftPadding: {
    padding: '20px',
    borderRadius: '0',
  },
  rightPadding: {
    padding: '20px 30px',
  },
  textCenter: {
    textAlign: 'center',
  },
}));

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 12,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#42826B',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#42826B',
    },
  },
  line: {
    borderColor: '#9FB6AE',
    borderTopWidth: 5,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#9FB6AE',
    display: 'flex',
    height: 30,
    alignItems: 'center',
  },
  active: {
    color: '#42826B',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completed: {
    color: '#fff',
    zIndex: 1,
    fontSize: 18,
    width: 30,
    height: 30,
    backgroundColor: '#104935',
    borderRadius: '50%',
    "svg": {
      width: 24,
      height: 24,
    }
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <div className={classes.circle}><Check className={classes.completed} /></div> : <div className={classes.circle} />}
    </div>
  );
}

function getSteps() {
  return ['', '', '', ''];
}

const StyledTabs = withStyles({
  root: {
    justifyContent: 'center',
  },
  indicator: {
    width: '100%',
    height: '8px',
    backgroundColor: 'rgba(16, 73, 53, 1)',
    borderRadius: '20px',
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#222B45',
    fontSize: '18px',
    padding: '25px 18px',
    borderBottom: '5px solid rgba(16, 73, 53, 0.32)',
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function Content() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [value, setValue] = React.useState(0);
  const [originator, setOriginator] = React.useState(false);
  const [beneficiary, setBeneficiary] = React.useState(false);
  const handleSend = () => {
    setValue(value + 1);
    setActiveStep(activeStep + 1);
  };
  const handleDycrypt = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(getSteps) {
    switch (getSteps) {
      case 0:
        return <Originator onSend={handleSend} />;
      case 1:
        return <BeneInfo onDycrypt={handleDycrypt}/>;
      case 2:
        return <BeneInfo />;
      case 3:
        return <Originator2 />;
      default:
        throw new Error('Unknown step');
    }
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className={classes.root}>
          <div className={classes.stepBlock}>
            <Typography variant="h5" className={classes.textCenter}>
              Description text
            </Typography>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} className={classes.stepStyle}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <Grid container spacing={3}>
            {/* VASP & Info */}
            <Grid item xs={12} md={8}>
              <Paper elevation={0} className={classes.root, classes.leftPadding}>
                <div>
                  <StyledTabs value={value} centered>
                    <StyledTab label="Originator VASP" value={0} />
                    <StyledTab label="Beneficiary Info" value={1} />
                  </StyledTabs>
                  <Typography className={classes.padding} />
                </div>
                {getStepContent(value)} {/* 不一樣 */}
                {/* <div style={{ width: '100%' }}>
                  <div display="flex" justifyContent="center" style={{textAlign: 'center', marginTop: '30px'}}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      className="btn btn-primary" x={0.5}
                    >
                    {activeStep === steps.length - 2 ? 'Accept' : 'Send'}
                    </Button>
                    {activeStep === 2 && (
                      <Button variant="contained" style={{ marginLeft: '19px' }}
                      onClick={handleNext} className="btn btn-danger" x={0.5}>
                        Reject
                      </Button>
                    )} 
                  </div>
                </div> */}
              </Paper>  
            </Grid>
            {/* Bridge Service */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.root}>
                <Bridge />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
