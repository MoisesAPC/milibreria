import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
 title: "MoisesAntonioPC",
 component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const ComponenteMoisesAntonioPC1: Story = {
   args: {
      titulo: "Título de prueba 1",
      subcabecera: "Subcabecera de prueba 1",
      texto: "Texto de prueba 1",
      imagen: "src/components/moisesantoniopc/assets/paraiso.jpg",
      textoBoton: "Acción 1",
      onFavorite: () => alert("Has hecho click en Me Gusta"),
      onShare: () => alert("Has hecho click en Compartir"),
      onAction: () => alert("Has hecho click en el botón genérico"),
      desactivarCompartir: false,
      desactivarMeGusta: false,
      desactivarBoton: false,
      colorBotonMeGusta: "red",
      colorBotonCompartir: "blue",
      colorBoton: "green",
   },
};

export const ComponenteMoisesAntonioPC2: Story = {
   args: {
      titulo: "Título de prueba 2",
      subcabecera: "Subcabecera de prueba 2",
      texto: "Texto de prueba 2",
      imagen: "src/components/moisesantoniopc/assets/palmeras.jpg",
      textoBoton: "Acción 2",
      onFavorite: () => alert("Has hecho click en Me Gusta (desactivado)"),
      onShare: () => alert("Has hecho click en Compartir (desactivado)"),
      onAction: () => alert("Has hecho click en el botón genérico (desactivado)"),
      desactivarCompartir: true,
      desactivarMeGusta: true,
      desactivarBoton: true,
      colorBotonMeGusta: "gray",
      colorBotonCompartir: "gray",
      colorBoton: "gray",
   },
  };
