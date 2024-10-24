import { MouseEventHandler } from 'react';
export interface MyButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    borderColor?: string;
    borderWidth?: string;
    hoverTextColor?: string;
    hoverBgColor?: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyButton(props: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
