import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

//styles for the spinner component
const styles = {
    root: {
        display: 'flex',
        justifyContent: "center",
        '& > * + *': {
            marginLeft: 2,
        },
    },
};

export default function CircularIndeterminate() {

    //return statement to render the spinner component
    return (
        <div sx={styles.root}>
            <CircularProgress />
            <CircularProgress />
        </div>
    );
}
