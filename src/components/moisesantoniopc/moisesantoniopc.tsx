// Moisés Antonio Pestano Castro

import { MouseEventHandler } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, Button, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MoisesAntonioPCProps {
  titulo: string; // Titulo del Card
  subcabecera?: string; // Subcabecera del Card
  texto: string; // Texto del Card
  imagen?: string; // Imagen de fondo del Card
  onFavorite?: MouseEventHandler<HTMLButtonElement>; // Función que se ejecuta al pulsar en el ícono Me Gusta
  onShare?: MouseEventHandler<HTMLButtonElement>; // Función que se ejecuta al pulsar en el ícono Compartir
  textoBoton?: string;  // Texto del botón genérico
  onAction?: MouseEventHandler<HTMLButtonElement>; // Función que se ejecuta al pulsar en elbotón genérico
  desactivarCompartir: boolean; // Desactiva el botón de Compartir
  desactivarMeGusta: boolean; // Desactiva el botón de Me Gusta
  desactivarBoton: boolean; // Desactiva el botón genérico
  colorBotonMeGusta?: string; // Color del botón Me Gusta
  colorBotonCompartir?: string; // Color del botón Compartir
  colorBoton?: string; // Color del botón genérico
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
    // El componente MoisesAntonioPC está basado en un Card de MUI
    <Card sx={{ maxWidth: 345 }} role='card'>

      {/* Cabecera del Card */}
      <CardHeader
        title={titulo}
        subheader={subcabecera}
      />

      {/* Imagen del Card */}
      <CardMedia
        component="img"
        height="194"
        image={imagen}
        alt={titulo}
      />

      {/* Texto del Card */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {texto}
        </Typography>
      </CardContent>
      
      {/* Botón del Me Gusta */}

        <IconButton
          aria-label="add to favorites"
          onClick={onFavorite}
          disabled={desactivarMeGusta}
        >
          <FavoriteIcon style={{ color: colorBotonMeGusta }} />
        </IconButton>

        {/* Botón de Compartir */}

        <IconButton
          aria-label="share"
          onClick={onShare}
          disabled={desactivarCompartir}
        >
          <ShareIcon style={{ color: colorBotonCompartir }} />
        </IconButton>

        {/* Botón genérico */}
        
        <Button
          size="small"
          onClick={onAction}
          disabled={desactivarBoton}
          style={{ color: colorBoton }}
        >
          {textoBoton}
        </Button>
        
    </Card>
  );
}

export default MoisesAntonioPC;
