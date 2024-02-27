import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import AlertTitle from '@mui/material/AlertTitle';

const SimpleAlert = (props) => {
   const { alert } = props
    return (
        <Alert severity="success" color="success">
            {alert}
        </Alert>
    );
}
export default SimpleAlert