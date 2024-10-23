import React from "react";
//importamos nuestro componente MyButton y sus props
import MyButton, { MyButtonProps } from "../button";

//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente MyButton. Luego renderizamos nuestro componente
//<MyButton /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <MyButton /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: MyButtonProps) {
  return (
    <MyButton 
      text={props.text}
      txtcolor={props.txtcolor}
      bgcolor={props.bgcolor}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      hoverTextColor={props.hoverTextColor}
      hoverBgColor={props.hoverBgColor}
      size={props.size}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}
export default Example
