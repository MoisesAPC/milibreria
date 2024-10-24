// Moisés Antonio Pestano Castro

import { MouseEventHandler } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

//Declaro la interface del componente.
export interface MyFavouriteProps {
 color: string; // El color del ícono
 disabled?: boolean; // ¿Está deshabilitado? (es decir, ¿puedo hacer click en él?)
 onClick?: MouseEventHandler<HTMLButtonElement>; // la función onClick (opcional)
}

//Defino mi componente MyFavourite y le digo que las props son las que definí arriba
function MyFavourite(props: MyFavouriteProps) {
 //Paso el valor de las props a un objeto:
 const { color, disabled, onClick } = props

 return (
   <IconButton
     disabled={disabled}
     onClick={onClick}
   >
     <FavoriteIcon style={{ color }} />
   </IconButton>
 );
}

export default MyFavourite;
