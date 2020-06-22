import React, { ReactNode } from 'react';
import { SvgProps } from '../svg.type';

// eslint-disable-next-line react/display-name
export default (props: SvgProps): ReactNode => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
);
