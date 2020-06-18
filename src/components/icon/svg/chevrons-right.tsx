import React from 'react';
import { SvgProps } from '../svg.type';

export default (props: SvgProps) => (
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <polyline points="7 7 12 12 7 17" />
        <polyline points="13 7 18 12 13 17" />
    </svg>
)