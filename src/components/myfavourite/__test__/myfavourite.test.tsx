import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../myfavourite"; // Importo mi componente MyFavourite

describe("MyFavourite component", () => {
 it("El ícono de favorito se debería renderizar correctamente", () => {
 
  render(
    <MyFavourite
      color="red"
      disabled={false}
      onClick={() => alert("Has hecho click en favoritos")}
    />
  );

 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
