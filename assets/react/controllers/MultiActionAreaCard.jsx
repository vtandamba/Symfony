import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const MultiActionAreaCard = props => {
    const {
        alternatif,
        imagePath,
        titreProjet,
        descriptionProjet,
        voirPlus


    } = props;


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    max-height="400"
                    image={imagePath}
                    alt={alternatif}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { titreProjet }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        { descriptionProjet }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    { voirPlus }
                </Button>
            </CardActions>
        </Card>
    );
}
export default MultiActionAreaCard