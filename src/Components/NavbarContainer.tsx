import {Disclosure} from "@headlessui/react";
import {
    Bars3Icon, HomeIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {classNames} from "../Globals/GlobalVariables.ts";

export default function NavbarContainer({element}: {element: JSX.Element}){
    const nav_icon_style = "block h-12 w-12 stroke-primary hover:stroke-accent";
    const location = useLocation();

    const icon_style = "w-6 h-6";

    const navigation = [
        {
            title: "Home",
            href: "/",
            icon: <HomeIcon className={icon_style}/>,
            active: "/" == location.pathname,
            target: "_self"
        },
        {
            title: "Bool",
            href: "/bool-cmd",
            //icon: <NewspaperIcon className={icon_style}/>,
            active: "/bool-cmd" == location.pathname,
            target: "_self"
        },
        {
            title: "Toggle",
            href: "/toggle-cmd",
            //icon: <NewspaperIcon className={icon_style}/>,
            active: "/toggle-cmd" == location.pathname,
            target: "_self"
        },

    ];
    const nav = useNavigate();

    return (
        <>
            <Disclosure as={"div"} defaultOpen={false} className={"h-full"}>
                {({ open }) => (
                    <div className={"flex flex-col h-full"}>
                        <div className={classNames("flex p-4 w-full bg-background border-b-2 border-primary border-opacity-40")}>
                            <Disclosure.Button className={classNames("mr-6", "md:hidden")}>
                                <span className="sr-only">Open sidebar</span>
                                {open ? (
                                    <XMarkIcon className={nav_icon_style} aria-hidden="true"/>
                                ) : (
                                    <Bars3Icon className={nav_icon_style} aria-hidden="true"/>
                                )}
                            </Disclosure.Button>

                            <div className={classNames("flex items-center")}>
                                { /* Site Icon */}
                                <img
                                    className="h-12 w-12 rounded-full border-2 border-white cursor-pointer hover:opacity-80"
                                    src="/media/site_icon.jpg"
                                    alt="Site Icon"
                                    onClick={() => {nav("/");}}

                                />
                            </div>

                            { /* Padding */}
                            <div className={"w-4"} />

                            { /* Nav Items */}
                            <nav className="hidden md:flex">
                                {navigation.map((item) => (
                                    <NavItem key={"NavItem-" + item.title} title={item.title} href={item.href}
                                        active={item.active} icon={item.icon} target={item.target} />
                                ))}
                            </nav>
                        </div>

                        <div className={"flex w-full min-h-full h-fit"}>
                            <Disclosure.Panel className={"md:hidden"}>
                                { /* Sidebar */}
                                <aside
                                    className={classNames("z-40 w-36 h-full p-2 bg-secondary", "absolute md:static")}
                                    aria-label="Sidebar">
                                    <ul className="font-medium flex flex-col">
                                        {navigation.map((item) => (
                                            <NavItem key={"NavItem-" + item.title} title={item.title} href={item.href}
                                                active={item.active} icon={item.icon} target={item.target} />
                                        ))}
                                    </ul>
                                </aside>
                            </Disclosure.Panel>
                            {element}
                        </div>
                    </div>
                )}
            </Disclosure>
        </>
    );
}