import React, { CSSProperties } from 'react';
import Switch from '../components/switch';

export default {
    title: 'Switch',
    component: Switch,
};

const styleWrap: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 80px)',
};

export const Basic: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Switch id="basic1" />
        <Switch id="basic2" defaultChecked />
        <Switch id="basic3" disabled />
        <Switch id="basic4" disabled defaultChecked />
    </div>
);

export const Size: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Switch id="size1" sizes="small" />
        <Switch id="size2" />
        <Switch id="size3" sizes="large" />
    </div>
);

export const WithLabel: React.FC<{}> = () => (
    <>
        <div className="field">
            <Switch id="label1" label="Switch small" sizes="small" />
        </div>
        <div className="field">
            <Switch id="label2" label="Switch normal" />
        </div>
        <div className="field">
            <Switch id="label3" label="Switch large" sizes="large" />
        </div>
        <div className="field">
            <Switch id="label4" label="Switch disable" disabled />
        </div>
    </>
);
