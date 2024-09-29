import React from "react";
import { classNames, root_url } from "../Globals/GlobalVariables";
import { useNavigate } from "react-router-dom";
function NavItem({ title, href, icon, active, target }) {
    const nav = useNavigate();
    const itemStyle = classNames(active ? "text-primary" : "text-txt_primary");
    return (React.createElement("div", { className: classNames("flex text-center items-center content-center", "w-full p-1 m-1 my-1 md:mx-2 rounded select-none cursor-pointer", "hover:bg-primary hover:text-background", itemStyle), onClick: () => target === "_self" ? nav(root_url + href) : open(href, target) },
        React.createElement("div", { className: classNames("left-0 mr-2 ml-2", icon === undefined ? "hidden" : "") }, icon),
        React.createElement("span", { className: "grow text-lg font-medium mr-2" }, title)));
}
export default NavItem;
