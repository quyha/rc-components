import React, { CSSProperties } from 'react';
import RSwitch from '../components/r-switch';

export default {
    title: 'Switch',
    component: RSwitch,
};

const styleWrap: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 80px)',
};

export const Basic: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <RSwitch id="basic1" />
        <RSwitch id="basic2" defaultChecked />
        <RSwitch id="basic3" disabled />
        <RSwitch id="basic4" disabled defaultChecked />
    </div>
);

export const Size: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <RSwitch id="size1" sizes="small" />
        <RSwitch id="size2" />
        <RSwitch id="size3" sizes="large" />
    </div>
);

export const WithLabel: React.FC<{}> = () => (
    <>
        <div className="field">
            <RSwitch id="label1" label="Switch small" sizes="small" />
        </div>
        <div className="field">
            <RSwitch id="label2" label="Switch normal" />
        </div>
        <div className="field">
            <RSwitch id="label3" label="Switch large" sizes="large" />
        </div>
        <div className="field">
            <RSwitch id="label4" label="Switch disable" disabled />
        </div>
    </>
);
