import React, { CSSProperties } from 'react';
import Checkbox from '../components/checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

const styleWrap: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 30px)',
    marginBottom: 20,
};

export const Basic: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Checkbox id="basic1" />
        <Checkbox id="basic2" defaultChecked />
        <Checkbox id="basic3" disabled />
        <Checkbox id="basic4" disabled defaultChecked />
    </div>
);

export const WithLabel: React.FC<{}> = () => (
    <Checkbox label="Remember me" id="label" />
);

export const Circle: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Checkbox id="circle1" circle />
        <Checkbox id="circle2" circle defaultChecked />
        <Checkbox id="circle3" circle disabled />
        <Checkbox id="circle4" circle disabled defaultChecked />
    </div>
);

export const Size: React.FC<{}> = () => (
    <>
        <div style={ styleWrap }>
            <Checkbox id="small" sizes="small" />
            <Checkbox id="normal" />
            <Checkbox id="large" sizes="large" />
        </div>
        <div>
            <Checkbox label="Remember me" id="label-small" sizes="small" />
            <Checkbox label="Remember me" id="label-normal" />
            <Checkbox label="Remember me" id="label-large" sizes="large" />
        </div>
    </>
);
