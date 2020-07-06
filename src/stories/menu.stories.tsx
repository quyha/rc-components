import React, { useState, CSSProperties } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Description } from '@storybook/addon-docs/blocks';
import MenuSidebar, { MenuSidebarItem, MenuSidebarSubMenu } from '../components/menu/sidebar';
import MenuSidebarMd from '../components/menu/sidebar.md';

export default {
    title: 'Menu',
};

export const None: React.FC<{}> = () => <div />;

export const Sidebar: React.FC<{}> = () => {
    const [ mini, setMini ] = useState(false);

    const styleHeader: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        backgroundColor: '#BDBDBD',
    }

    const styleLogo: CSSProperties = {
        padding: '1rem',
    };

    const styleNavbar: CSSProperties = {
        flexGrow: 1,
        padding: '0 1rem',
        backgroundColor: '#BDBDBD',
    };

    const styleContainer: CSSProperties = {
        display: 'flex',
        padding: 0,
    };

    const styleMain: CSSProperties = {
        flexGrow: 1,
        backgroundColor: '#F7FAFC',
        padding: '1rem',
    };

    const toggleSidebar = (): void => setMini((status) => !status);
    
    return (
        <div>
            <Description markdown={ MenuSidebarMd } />
            <header style={ styleHeader }>
                <div
                    style={ styleLogo }
                    className={ `logo sidebar${ mini ? ' is-mini' : '' }` }
                    onClick={ toggleSidebar }
                >
                    <div className="menu-toggle">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
                <div style={ styleNavbar }>Header</div>
            </header>
            <div className="container" style={ styleContainer }>
                <MenuSidebar mini={ mini }>
                    <MenuSidebarItem active>
                        <a href="#" title="Home">
                            <svg width="1rem" viewBox="0 0 64 64">
                                <path d="M59.7 8h-25V5.3c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7V8h-25C1.9 8 0 9.9 0 12.3v26.1c0 2.4 1.9 4.3 4.3 4.3h10.9L6.9 57.3c-.8 1.3-.3 2.9 1.1 3.7.3.3.8.3 1.3.3 1.1 0 1.9-.5 2.4-1.3l9.6-17.3h8v16c0 1.6 1.1 2.7 2.7 2.7s2.7-1.1 2.7-2.7v-16H43L52.8 60c.5.8 1.3 1.3 2.4 1.3.5 0 .8 0 1.3-.3 1.3-.8 1.9-2.4 1.1-3.7l-8.5-14.7h10.7c2.4 0 4.3-1.9 4.3-4.3v-26C64 9.9 62.1 8 59.7 8zm-1 29.3H5.3v-24h53.3v24z" />
                            </svg>
                            <span>Menu 1</span>
                        </a>
                    </MenuSidebarItem>
                    <MenuSidebarSubMenu
                        id="sub-1"
                        label={ (
                            <>
                                <svg width="1rem" viewBox="0 0 64 64">
                                    <path d="M59.7 8h-25V5.3c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7V8h-25C1.9 8 0 9.9 0 12.3v26.1c0 2.4 1.9 4.3 4.3 4.3h10.9L6.9 57.3c-.8 1.3-.3 2.9 1.1 3.7.3.3.8.3 1.3.3 1.1 0 1.9-.5 2.4-1.3l9.6-17.3h8v16c0 1.6 1.1 2.7 2.7 2.7s2.7-1.1 2.7-2.7v-16H43L52.8 60c.5.8 1.3 1.3 2.4 1.3.5 0 .8 0 1.3-.3 1.3-.8 1.9-2.4 1.1-3.7l-8.5-14.7h10.7c2.4 0 4.3-1.9 4.3-4.3v-26C64 9.9 62.1 8 59.7 8zm-1 29.3H5.3v-24h53.3v24z" />
                                </svg>
                                <span>SubMenu 1</span>
                            </>
                        ) }
                    >
                        <MenuSidebarItem>
                            <a href="#" title="Home">SubMenu 1.1</a>
                        </MenuSidebarItem>
                    </MenuSidebarSubMenu>
                    <MenuSidebarItem>
                        <a href="#" title="Home">
                            <svg width="1rem" viewBox="0 0 64 64">
                                <path d="M59.7 8h-25V5.3c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7V8h-25C1.9 8 0 9.9 0 12.3v26.1c0 2.4 1.9 4.3 4.3 4.3h10.9L6.9 57.3c-.8 1.3-.3 2.9 1.1 3.7.3.3.8.3 1.3.3 1.1 0 1.9-.5 2.4-1.3l9.6-17.3h8v16c0 1.6 1.1 2.7 2.7 2.7s2.7-1.1 2.7-2.7v-16H43L52.8 60c.5.8 1.3 1.3 2.4 1.3.5 0 .8 0 1.3-.3 1.3-.8 1.9-2.4 1.1-3.7l-8.5-14.7h10.7c2.4 0 4.3-1.9 4.3-4.3v-26C64 9.9 62.1 8 59.7 8zm-1 29.3H5.3v-24h53.3v24z" />
                            </svg>
                            <span>Menu 2</span>
                        </a>
                    </MenuSidebarItem>
                    <MenuSidebarSubMenu
                        id="sub-2"
                        label={ (
                            <>
                                <svg width="1rem" viewBox="0 0 64 64">
                                    <path d="M59.7 8h-25V5.3c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7V8h-25C1.9 8 0 9.9 0 12.3v26.1c0 2.4 1.9 4.3 4.3 4.3h10.9L6.9 57.3c-.8 1.3-.3 2.9 1.1 3.7.3.3.8.3 1.3.3 1.1 0 1.9-.5 2.4-1.3l9.6-17.3h8v16c0 1.6 1.1 2.7 2.7 2.7s2.7-1.1 2.7-2.7v-16H43L52.8 60c.5.8 1.3 1.3 2.4 1.3.5 0 .8 0 1.3-.3 1.3-.8 1.9-2.4 1.1-3.7l-8.5-14.7h10.7c2.4 0 4.3-1.9 4.3-4.3v-26C64 9.9 62.1 8 59.7 8zm-1 29.3H5.3v-24h53.3v24z" />
                                </svg>
                                <span>SubMenu 2</span>
                            </>
                        ) }
                        open
                        active
                    >
                        <MenuSidebarItem>
                            <a href="#" title="Home">SubMenu 2.1</a>
                        </MenuSidebarItem>
                        <MenuSidebarItem active>
                            <a href="#" title="Home">SubMenu 2.2</a>
                        </MenuSidebarItem>
                        <MenuSidebarItem>
                            <a href="#" title="Home">SubMenu 2.3</a>
                        </MenuSidebarItem>
                        <MenuSidebarItem>
                            <a href="#" title="Home">SubMenu 2.4</a>
                        </MenuSidebarItem>
                    </MenuSidebarSubMenu>
                    <MenuSidebarItem>
                        <a href="#" title="Home">
                            <svg width="1rem" viewBox="0 0 64 64">
                                <path d="M59.7 8h-25V5.3c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7V8h-25C1.9 8 0 9.9 0 12.3v26.1c0 2.4 1.9 4.3 4.3 4.3h10.9L6.9 57.3c-.8 1.3-.3 2.9 1.1 3.7.3.3.8.3 1.3.3 1.1 0 1.9-.5 2.4-1.3l9.6-17.3h8v16c0 1.6 1.1 2.7 2.7 2.7s2.7-1.1 2.7-2.7v-16H43L52.8 60c.5.8 1.3 1.3 2.4 1.3.5 0 .8 0 1.3-.3 1.3-.8 1.9-2.4 1.1-3.7l-8.5-14.7h10.7c2.4 0 4.3-1.9 4.3-4.3v-26C64 9.9 62.1 8 59.7 8zm-1 29.3H5.3v-24h53.3v24z" />
                            </svg>
                            <span>Menu 3</span>
                        </a>
                    </MenuSidebarItem>
                    <MenuSidebarItem>
                        <a href="#" title="Home">
                            <svg width="1rem" viewBox="0 0 64 64">
                                <path d="M59.7 8h-25V5.3c0-1.6-1.1-2.7-2.7-2.7s-2.7 1.1-2.7 2.7V8h-25C1.9 8 0 9.9 0 12.3v26.1c0 2.4 1.9 4.3 4.3 4.3h10.9L6.9 57.3c-.8 1.3-.3 2.9 1.1 3.7.3.3.8.3 1.3.3 1.1 0 1.9-.5 2.4-1.3l9.6-17.3h8v16c0 1.6 1.1 2.7 2.7 2.7s2.7-1.1 2.7-2.7v-16H43L52.8 60c.5.8 1.3 1.3 2.4 1.3.5 0 .8 0 1.3-.3 1.3-.8 1.9-2.4 1.1-3.7l-8.5-14.7h10.7c2.4 0 4.3-1.9 4.3-4.3v-26C64 9.9 62.1 8 59.7 8zm-1 29.3H5.3v-24h53.3v24z" />
                            </svg>
                            <span>Menu 4</span>
                        </a>
                    </MenuSidebarItem>
                </MenuSidebar>
                <div style={ styleMain }>
                    <h1>Content</h1>
                </div>
            </div>
        </div>
    )
}
