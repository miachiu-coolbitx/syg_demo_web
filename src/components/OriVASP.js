import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TransInfo from './OriVasp/TransferInfo';
import OriginInfo from './OriVasp/OriginInfo';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    layout: {
      width: 'auto',
    },
}));

export default function Originator (props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main className={classes.layout}>
                <TransInfo />
                <OriginInfo />
                <Button
                      variant="contained"
                      onClick={props.onSend}
                    //   只做一件事
                      className="btn btn-primary"
                    >
                    Send
                </Button>
            </main>
        </React.Fragment>
    );
}
