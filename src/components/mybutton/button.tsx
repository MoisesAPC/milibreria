import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

//Declaro la interface del componente.
export interface MyButtonProps {
 text: string; // la del texto del botón
 txtcolor: string; // la del color del texto del botón
 bgcolor:string; // la del color del fondo del botón
 borderColor?: string; // la del color del borde del botón
 borderWidth?: string; // la del ancho del borde del botón
 hoverTextColor?: string; // la del color del texto del botón cuando le hacemos hover
 hoverBgColor?: string; // la del color del fondo del botón cuando le hacemos hover
 size?: "small" | "medium" | "large"; // la del tamaño del botón (podrá ser small, medium o large)
 disabled?: boolean; // la del botón deshabilitado (opcional)
 onClick?: MouseEventHandler<HTMLButtonElement>; // la función onClick (opcional)
}

//Defino mi componente MyButton y le digo que las props son las que definí arriba
function MyButton(props: MyButtonProps) {
 //Paso el valor de las props a un objeto:
 const { text, txtcolor, bgcolor, borderColor, borderWidth, hoverTextColor, hoverBgColor, size, disabled, onClick } = props

 return(
 //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
 <Button
    type='button'
    onClick={onClick}
    disabled={disabled}
    size={size}
    sx={{
        backgroundColor: bgcolor,
        color: txtcolor,
        
        // Cambiamos el color y la anchura del borde
        border: `${borderWidth} solid ${borderColor}`,

        // Cambiamos los colores de fondo y de texto del botón cuando el cursor se encuentre encima del mismo
        ':hover': {
          color: hoverTextColor,
          backgroundColor: hoverBgColor
        },
    }}
 >
    {text}
 </Button>
 )
}

export default MyButton;