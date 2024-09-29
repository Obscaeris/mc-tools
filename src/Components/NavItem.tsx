import React from "react";
import {classNames} from "../Globals/GlobalVariables";
import {useNavigate} from "react-router-dom";

interface NavItemProps {
    title: string;
    href: string;
    icon?: JSX.Element;
    active?: boolean;
    target: string;
}
function NavItem({title, href, icon, active, target}: NavItemProps){
    const nav = useNavigate();
    const itemStyle = classNames(active ? "text-primary" : "text-txt_primary");

    return (
        <div
            className={classNames("flex text-center items-center content-center", "w-full p-1 m-1 my-1 md:mx-2 rounded select-none cursor-pointer","hover:bg-primary hover:text-background", itemStyle)}
            onClick={() => target === "_self" ? nav(href) : open(href, target)}>
            <div className={classNames("left-0 mr-2 ml-2", icon===undefined ? "hidden":"")}>{icon}</div>
            <span className={"grow text-lg font-medium mr-2"}>{title}</span>
        </div>
    );
}

export default NavItem;