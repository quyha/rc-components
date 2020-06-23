import React, { CSSProperties } from 'react';
import Radio from '../components/radio';

export default {
    title: 'Radio',
    component: Radio,
}

const styleWrap: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 30px)',
};

export const Basic: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Radio id="basic1" name="basic" />
        <Radio id="basic2" name="basic" defaultChecked />
        <Radio id="basic3" name="basic" disabled />
    </div>
);

export const WithLabel: React.FC<{}> = () => (
    <>
        <Radio id="label1" name="qs" label="Yes" />
        <Radio id="label2" name="qs" label="No" />
        <Radio id="label3" name="qs" label="Not sure" disabled defaultChecked />
        <Radio id="label4" name="gender" label="Male" horizontal />
        <Radio id="label5" name="gender" label="Female" horizontal />
        <Radio id="label6" name="gender" label="Not sure" horizontal />
    </>
);

export const Size: React.FC<{}> = () => (
    <>
        <div style={ styleWrap }>
            <Radio id="size1" name="size" sizes="small" />
            <Radio id="size2" name="size" />
            <Radio id="size3" name="size" sizes="large" />
        </div>
        <div>
            <Radio id="size4" name="size1" sizes="small" horizontal label="Yes" />
            <Radio id="size5" name="size1" horizontal label="No" />
            <Radio id="size6" name="size1" sizes="large" horizontal label="Not sure" />
        </div>
    </>
);
