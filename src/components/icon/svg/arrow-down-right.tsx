import React, { ReactNode } from 'react';
import { SvgProps } from '../svg.type';

// eslint-disable-next-line react/display-name
export default (props: SvgProps): ReactNode => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="7" y1="7" x2="17" y2="17" />
        <polyline points="17 8 17 17 8 17" />
    </svg>
);
