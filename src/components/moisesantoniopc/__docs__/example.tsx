import React from "react";
import MoisesAntonioPC, { MoisesAntonioPCProps } from "../moisesantoniopc";

function Example(props: MoisesAntonioPCProps) {
  return (
    <MoisesAntonioPC
      titulo={props.titulo}
      subcabecera={props.subcabecera}
      texto={props.texto}
      imagen={props.imagen}
      textoBoton={props.textoBoton}
      onFavorite={props.onFavorite}
      onShare={props.onShare}
      onAction={props.onAction}
      desactivarCompartir={props.desactivarCompartir}
      desactivarMeGusta={props.desactivarMeGusta}
      desactivarBoton={props.desactivarBoton}
      colorBotonMeGusta={props.colorBotonMeGusta}
      colorBotonCompartir={props.colorBotonCompartir}
      colorBoton={props.colorBoton}
    />
  );
}

export default Example;
