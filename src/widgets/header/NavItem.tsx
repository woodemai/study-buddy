import { NavLink } from "react-router-dom";
import { FC, ReactNode } from "react";

interface NavItemProps {
    link: string,
    children: ReactNode
}

const NavItem: FC<NavItemProps> = ({ link, children }) => {

    return (
        <li>
            <NavLink className="px-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline" to={link}>{children} </NavLink>
        </li>
    )
}

export default NavItem;