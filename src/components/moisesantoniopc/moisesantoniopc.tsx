import { MouseEventHandler } from 'react';
import { Card, CardHeader, CardContent, CardActions, CardMedia, Typography, Button, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MoisesAntonioPCProps {
  titulo: string;
  subcabecera?: string;
  texto: string;
  imagen?: string;
  onFavorite?: MouseEventHandler<HTMLButtonElement>;
  onShare?: MouseEventHandler<HTMLButtonElement>;
  textoBoton?: string;
  onAction?: MouseEventHandler<HTMLButtonElement>;
  desactivarCompartir: boolean;
  desactivarMeGusta: boolean;
  desactivarBoton: boolean;
  colorBotonMeGusta?: string;
  colorBotonCompartir?: string;
  colorBoton?: string;
}

function MoisesAntonioPC(props: MoisesAntonioPCProps) {
 const {
    titulo,
    subcabecera,
    texto,
    imagen,
    onFavorite,
    onShare,
    textoBoton,
    onAction,
    desactivarCompartir,
    desactivarMeGusta,
    desactivarBoton,
    colorBotonMeGusta,
    colorBotonCompartir,
    colorBoton
  } = props;

  return (
    <Card sx={{ maxWidth: 345 }} role='card'>
      <CardHeader
        title={titulo}
        subheader={subcabecera}
      />

      <CardMedia
        component="img"
        height="194"
        image={imagen}
        alt={titulo}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {texto}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton
          aria-label="add to favorites"
          onClick={onFavorite}
          disabled={desactivarMeGusta}
        >
          <FavoriteIcon style={{ color: colorBotonMeGusta }} />
        </IconButton>

        <IconButton
          aria-label="share"
          onClick={onShare}
          disabled={desactivarCompartir}
        >
          <ShareIcon style={{ color: colorBotonCompartir }} />
        </IconButton>
        
        <Button
          size="small"
          onClick={onAction}
          disabled={desactivarBoton}
          style={{ color: colorBoton }}
        >
          {textoBoton}
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default MoisesAntonioPC;
