import React, { ReactNode } from 'react';
import { SvgProps } from '../svg.type';

// eslint-disable-next-line react/display-name
export default (props: SvgProps): ReactNode => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M13.25 16h-2.5c-.689 0-1.25-.561-1.25-1.25V9H6.75a.75.75 0 01-.542-1.268l5.25-5.5a.774.774 0 011.085 0l5.25 5.5A.75.75 0 0117.25 9H14.5v5.75c0 .689-.561 1.25-1.25 1.25zM22.25 22H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z" />
    </svg>
);
