import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MoisesAntonioPC from "../moisesantoniopc"; // Importo mi componente MoisesAntonioPC

describe("MoisesAntonioPC component", () => {
 it("El componente de MoisesAntonioPC se debería renderizar correctamente", () => {
 
  render(
    <MoisesAntonioPC
      titulo="Título 1"
      subcabecera="Subcabecera 1"
      texto="Texto de ejemplo 1"
      imagen="src/components/moisesantoniopc/assets/paraiso.jpg"
      textoBoton="Texto botón"
      onFavorite={() => alert("Has hecho click en Me Gusta")}
      onShare={() => alert("Has hecho click en Compartir")}
      onAction={() => alert("Has hecho click en el botón genérico")}
      desactivarCompartir={false}
      desactivarMeGusta={false}
      desactivarBoton={false}
      colorBotonMeGusta="red"
      colorBotonCompartir="blue"
      colorBoton="green"
    />
  );

 const tarjeta = screen.getByRole("card");
 expect(tarjeta).toBeInTheDocument();
 });
});
