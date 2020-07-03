import React, { CSSProperties } from 'react';
import { LoaderSpinner, LoaderDots } from '../components/loader';

export default {
    title: 'Loader',
};

const styleWrap: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 70px)',
};

export const Spinner: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <LoaderSpinner />
        <LoaderSpinner primary />
        <LoaderSpinner size="1.5em" />
        <LoaderSpinner size="1.5em" color="red" />
        <LoaderSpinner size="1.5em" color="#48C774" />
    </div>
);

export const Dots: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <LoaderDots />
        <LoaderDots primary />
        <LoaderDots size="2rem" color="red" />
        <LoaderDots size="2rem" color="#48C774" />
    </div>
);
