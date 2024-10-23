import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../myfavouriteborder"; // Importo mi componente MyFavouriteBorder

describe("MyFavouriteBorder component", () => {
 it("El ícono de favorito (sin relleno) se debería renderizar correctamente", () => {
 
  render(
    <MyFavouriteBorder
      color="red"
      disabled={false}
      onClick={() => alert("Has hecho click en favoritos (sin relleno)")}
    />
  );

 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
