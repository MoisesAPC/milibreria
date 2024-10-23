import { MouseEventHandler } from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//Declaro la interface del componente.
export interface MyFavouriteBorderProps {
 color: string; // El color del ícono
 disabled?: boolean; // ¿Está deshabilitado? (es decir, ¿puedo hacer click en él?)
 onClick?: MouseEventHandler<HTMLButtonElement>; // la función onClick (opcional)
}

//Defino mi componente MyFavouriteBorder y le digo que las props son las que definí arriba
function MyFavouriteBorder(props: MyFavouriteBorderProps) {
 //Paso el valor de las props a un objeto:
 const { color, disabled, onClick } = props

 return (
   <IconButton
     disabled={disabled}
     onClick={onClick}
   >
     <FavoriteBorderIcon style={{ color }} />
   </IconButton>
 );
}

export default MyFavouriteBorder;
