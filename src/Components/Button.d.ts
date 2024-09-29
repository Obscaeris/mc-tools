import React from "react";
interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    border?: boolean;
}
export default function Button({ text, href, onClick, active, border }: ButtonProps): React.JSX.Element;
export {};
