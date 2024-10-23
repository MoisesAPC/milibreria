import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
 title: "MyButton",
 component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
 args: {
    text: "Mi botón personalizado",
    txtcolor: 'black',
    bgcolor: 'yellow',
    borderColor: 'green',
    borderWidth: '5px',
    hoverTextColor: 'red',
    hoverBgColor: 'blue',
    disabled: false,
    size: "small",
    onClick: () => alert("Has hecho click en el botón"),
 },
};

export const Secondary: Story = {
    args: {
       text: "Mi botón personalizado (secundario)",
       txtcolor: 'black',
       bgcolor: 'orange',
       borderColor: 'blue',
       borderWidth: '10px',
       hoverTextColor: 'white',
       hoverBgColor: 'purple',
       disabled: false,
       size: "large",
       onClick: () => alert("Has hecho click en el botón secundario"),
    },
};
