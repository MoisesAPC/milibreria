import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
 title: "MyFavouriteBorder",
 component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const IconoFavoritoBorderVerde: Story = {
 args: {
    color: 'green',
    disabled: false,
    onClick: () => alert("Has hecho en favorito verde (sin relleno)"),
 },
};

export const IconoFavoritoBorderNegro: Story = {
   args: {
      color: 'black',
      disabled: true,
      onClick: () => alert("Has hecho en favorito negro (sin relleno)"),
   },
  };
