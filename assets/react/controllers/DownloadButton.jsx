import React from 'react';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
const handleDownload = () => {
    // Mettre en place la logique de téléchargement ici
    const url = 'build/files/cv_Victoria_Tandamba.pdf';
    window.open(url, '_blank');
};

const DownloadButton = ( props ) => {
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
                <MuiButton variant="contained" color="primary" endIcon={<DownloadIcon sx={{ fontSize: 15 }} />}>
                    {contenue}
                </MuiButton>
            </ThemeProvider>
        </>
    );
};

export default DownloadButton;
