import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyButton from "../button"; // Importo mi componente MyButton

describe("MyButton component", () => {
 it("El botón se debería renderizar correctamente", () => {
 
    render(
        <MyButton 
          text='Mi botón' 
          txtcolor='black' 
          bgcolor='yellow' 
          borderColor='orange'
          borderWidth='20px'
          hoverTextColor='white'
          hoverBgColor='orange'
          size='large'
          disabled={false}
          // Imprimimos "Has hecho click" en un popup
          onClick={() => alert("Has hecho click")}
        />
    )

 const button = screen.getByRole("button");
 expect(button).toBeInTheDocument();
 });
});
