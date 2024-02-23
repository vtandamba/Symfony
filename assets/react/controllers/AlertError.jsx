import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import AlertTitle from '@mui/material/AlertTitle';

const AlertError = (props) => {
   const { alert, etat } = props
    return (
        <Alert severity= "error" color="error">
            {alert}
        </Alert>
    );
}
export default AlertError