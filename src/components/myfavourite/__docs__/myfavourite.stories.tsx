import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
 title: "MyFavourite",
 component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const IconoFavoritoRojo: Story = {
 args: {
    color: 'red',
    disabled: false,
    onClick: () => alert("Has hecho en favorito rojo"),
 },
};

export const IconoFavoritoAzul: Story = {
   args: {
      color: 'blue',
      disabled: true,
      onClick: () => alert("Has hecho en favorito azul"),
   },
  };
