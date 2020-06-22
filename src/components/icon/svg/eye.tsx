import React, { ReactNode } from 'react';
import { SvgProps } from '../svg.type';

// eslint-disable-next-line react/display-name
export default (props: SvgProps): ReactNode => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
    </svg>
);
