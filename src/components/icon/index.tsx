import React, { useMemo } from 'react';
import svgs from './svg';
import { SvgProps } from './svg.type';

interface Props extends SvgProps {
    name: string;
    width?: string;
    height?: string;
    className?: string;
    color?: string;
}

const Icon: React.FC<Props> = (props: Props) => {
    const { name, className, ...rest } = props;

    const Ic = useMemo(() => svgs[name] || null, [ name ]);

    return (
        <Ic
            width="1.5em"
            height="1.5em"
            className={ `icon ${ className ? `${ className }` : '' }` }
            // eslint-disable-next-line react/jsx-props-no-spreading
            { ...rest }
        />
    )
};

export default Icon;
