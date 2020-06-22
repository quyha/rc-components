import React from 'react';
import Icon from '../components/icon/index';
import { iconList } from '../components/icon/svg';

export default {
    title: 'Icon',
    component: Icon,
};

const styleWrapper: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
};

const styleIcon: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
};

const styleSpan: React.CSSProperties = {
    fontSize: '.75em',
    marginTop: 5,
};

export const All: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        {
            iconList.map((icon, index) => (
                <div style={ styleIcon } key={ index }>
                    <Icon name={ icon } />
                    <span style={ styleSpan }>{ icon }</span>
                </div>
            ))
        }
    </div>
);

export const Color: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Icon name="alert-circle" color="red" />
        <Icon name="calendar" color="blue" />
        <Icon name="thumb-up" color="pink" />
    </div>
);
