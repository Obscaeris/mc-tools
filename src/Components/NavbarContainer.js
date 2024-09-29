import { Disclosure } from "@headlessui/react";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import { useLocation, useNavigate } from "react-router-dom";
import { classNames, root_url } from "../Globals/GlobalVariables";
import React from "react";
export default function NavbarContainer({ element }) {
    const nav_icon_style = "block h-12 w-12 stroke-primary hover:stroke-accent";
    const location = useLocation();
    const icon_style = "w-6 h-6";
    const navigation = [
        {
            title: "Home",
            href: root_url,
            icon: React.createElement(HomeIcon, { className: icon_style }),
            active: "/" == location.pathname,
            target: "_self"
        },
        {
            title: "Bool",
            href: root_url + "/bool-cmd",
            //icon: <NewspaperIcon className={icon_style}/>,
            active: "/bool-cmd" == location.pathname,
            target: "_self"
        },
        {
            title: "Toggle",
            href: root_url + "/toggle-cmd",
            //icon: <NewspaperIcon className={icon_style}/>,
            active: "/toggle-cmd" == location.pathname,
            target: "_self"
        },
    ];
    const nav = useNavigate();
    return (React.createElement(React.Fragment, null,
        React.createElement(Disclosure, { as: "div", defaultOpen: false, className: "h-full" }, ({ open }) => (React.createElement("div", { className: "flex flex-col h-full" },
            React.createElement("div", { className: classNames("flex p-4 w-full bg-background border-b-2 border-primary border-opacity-40") },
                React.createElement(Disclosure.Button, { className: classNames("mr-6", "md:hidden") },
                    React.createElement("span", { className: "sr-only" }, "Open sidebar"),
                    open ? (React.createElement(XMarkIcon, { className: nav_icon_style, "aria-hidden": "true" })) : (React.createElement(Bars3Icon, { className: nav_icon_style, "aria-hidden": "true" }))),
                React.createElement("div", { className: classNames("flex items-center") },
                    React.createElement("img", { className: "h-12 w-12 rounded-full border-2 border-white cursor-pointer hover:opacity-80", src: "./media/site_icon.jpg", alt: "Site Icon", onClick: () => { nav("/"); } })),
                React.createElement("div", { className: "w-4" }),
                React.createElement("nav", { className: "hidden md:flex" }, navigation.map((item) => (React.createElement(NavItem, { key: "NavItem-" + item.title, title: item.title, href: item.href, active: item.active, icon: item.icon, target: item.target }))))),
            React.createElement("div", { className: "flex w-full min-h-full h-fit" },
                React.createElement(Disclosure.Panel, { className: "md:hidden" },
                    React.createElement("aside", { className: classNames("z-40 w-36 h-full p-2 bg-secondary", "absolute md:static"), "aria-label": "Sidebar" },
                        React.createElement("ul", { className: "font-medium flex flex-col" }, navigation.map((item) => (React.createElement(NavItem, { key: "NavItem-" + item.title, title: item.title, href: item.href, active: item.active, icon: item.icon, target: item.target })))))),
                element))))));
}
