import React from "react";
interface NavItemProps {
    title: string;
    href: string;
    icon?: JSX.Element;
    active?: boolean;
    target: string;
}
declare function NavItem({ title, href, icon, active, target }: NavItemProps): React.JSX.Element;
export default NavItem;
