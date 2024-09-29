import { useNavigate } from "react-router-dom";
import { classNames, root_url } from "../Globals/GlobalVariables";
import React from "react";
export default function Button({ text, href, onClick, active, border = true }) {
    if (!href && !onClick)
        throw new ErrorEvent("Button must have either href or onClick");
    const nav = useNavigate();
    const text_style = active ? "text-primary hover:text-txt_primary text-lg" : "text-txt_primary hover:text-primary text-lg";
    const hover_style = active ? "shadow shadow-primary hover:shadow-none" : "hover:shadow hover:shadow-primary";
    const border_style = border ? "border-primary border-2" : "hover:border-primary hover:border-2";
    return (React.createElement("div", { className: classNames("flex py-1 px-2 bg-background rounded mx-2", "cursor-pointer select-none", text_style, hover_style, border_style), onClick: () => href ? nav(root_url + "/" + href) : onClick },
        React.createElement("p", null, text)));
}
