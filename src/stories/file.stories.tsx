import React from 'react';
import InputFile from '../components/input/file';

export default {
    title: 'Input File',
    component: InputFile,
};

const styleWrap = {
    width: 450,
};

const styleBox = {
    ...styleWrap,
    border: '1px solid #BDBDBD',
    padding: 30,
};

export const Basic: React.FC<{}> = () => (
    <InputFile name="file" />
);

export const WithName: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <InputFile name="file" hasName fileName="This is file name" />
    </div>
);

export const Alignment: React.FC<{}> = () => (
    <div style={ styleBox }>
        <p>Center</p>
        <InputFile name="file" align="center" />
        <p>Right</p>
        <InputFile name="file" align="right" />
    </div>
);

export const FullWidth: React.FC<{}> = () => (
    <div style={ styleBox }>
        <InputFile name="file" hasName ctaFullWidth />
    </div>
);
