import React from 'react';
import MuiButton from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Button = props => {

    const { contenue } = props;


    // Création du thème personnalisé

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FEEDF5',
            },
        },
    });

    return(
        <>
            <ThemeProvider theme={theme}>
                <MuiButton variant="contained" color="primary">
                    {contenue}
                </MuiButton>
            </ThemeProvider>
        </>
    );
};

export default Button;
