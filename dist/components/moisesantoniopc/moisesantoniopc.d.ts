import { MouseEventHandler } from 'react';
export interface MoisesAntonioPCProps {
    titulo: string;
    subcabecera?: string;
    texto: string;
    imagen?: string;
    onFavorite?: MouseEventHandler<HTMLButtonElement>;
    onShare?: MouseEventHandler<HTMLButtonElement>;
    textoBoton?: string;
    onAction?: MouseEventHandler<HTMLButtonElement>;
    desactivarCompartir: boolean;
    desactivarMeGusta: boolean;
    desactivarBoton: boolean;
    colorBotonMeGusta?: string;
    colorBotonCompartir?: string;
    colorBoton?: string;
}
declare function MoisesAntonioPC(props: MoisesAntonioPCProps): import("react/jsx-runtime").JSX.Element;
export default MoisesAntonioPC;
