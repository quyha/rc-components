import React, { ReactNode } from 'react';

interface Sidebar {
    children: ReactNode;
    className?: string;
    mini?: boolean;
}

interface MenuItem {
    children: ReactNode;
    className?: string;
    active?: boolean;
    hasSubmenu?: boolean;
}

interface Submenu {
    children: ReactNode;
    label: ReactNode;
    open?: boolean;
    id: string;
}

export const MenuSidebarItem: React.FC<MenuItem> = (props) => {
    const {
        children,
        className,
        active,
        hasSubmenu,
    } = props;

    const cn = [
        'menu',
        active && 'is-active',
        hasSubmenu && 'has-submenu',
        className && className,
    ].filter(Boolean).join(' ');
    
    return (
        <li className={ cn }>
            { children }
        </li>
    )
};

export const MenuSidebarSubMenu: React.FC<MenuItem & Submenu> = (props) => {
    const {
        children,
        label,
        open,
        id,
        ...itemProps
    } = props;
    
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MenuSidebarItem hasSubmenu { ...itemProps }>
            <input
                type="checkbox"
                defaultChecked={ open }
                className="submenu-input"
                id={ id }
            />
            <label className="submenu-label" htmlFor={ id }>
                { label }
                <svg className="menu-chevron" width="1rem" viewBox="0 0 20 20">
                    <path
                        d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574-.445.436-1.197.408-1.615 0-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 010-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z"
                        fill="#626262"
                    />
                </svg>
            </label>
            <ul className="submenu">
                { children }
            </ul>
        </MenuSidebarItem>
    )
};

const MenuSidebar: React.FC<Sidebar> = (props) => {
    const { children, className, mini = false } = props;

    const cnSidebar = [
        'sidebar',
        mini && 'is-mini',
        className && className,
    ].filter(Boolean).join(' ');
    
    return (
        <aside className={ cnSidebar }>
            <ul>
                { children }
            </ul>
        </aside>
    )
};

export default MenuSidebar;
