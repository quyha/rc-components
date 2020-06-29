import React, { CSSProperties } from 'react';
import Tabs from '../components/tab';
import Icon from '../components/icon';

export default {
    title: 'Tabs',
    component: Tabs,
};

export const Basic: React.FC<{}> = () => {
    const tabs = [
        {
            id: 1,
            name: 'Picture',
            panelComponent: <p>Panel Picture</p>,
        },
        {
            id: 2,
            name: 'Video',
            panelComponent: <p>{ 'Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… You guys aren\'t Santa! You\'re not even robots. How dare you lie in front of Jesus?' }</p>
        },
    ];
    
    return (
        <Tabs tabs={ tabs } />
    );
}

export const CustomizeHead: React.FC<{}> = () => {
    const styleHeadCustomize: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '20px 1fr',
        gridColumnGap: 5,
        alignItems: 'center',
        padding: '10px 0',
        cursor: 'pointer',
    };
    
    const tabs = [
        {
            id: 1,
            name: 'Picture',
            headComponent: (
                <div style={ styleHeadCustomize }>
                    <Icon name="photo" width="1.25em" height="1.25em" />
                    <span>Picture</span>
                </div>
            ),
            panelComponent: <p>Picture</p>,
        },
        {
            id: 2,
            name: 'Video',
            headComponent: (
                <div style={ styleHeadCustomize }>
                    <Icon name="calendar" width="1.25em" height="1.25em" />
                    <span>Calendar</span>
                </div>
            ),
            panelComponent: <p>{ 'Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… You guys aren\'t Santa! You\'re not even robots. How dare you lie in front of Jesus?' }</p>,
        },
    ];

    return <Tabs tabs={ tabs } />
};
