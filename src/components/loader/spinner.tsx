import React from 'react';

interface Props {
    color?: string;
    /**
     * Using px, rem, em or %
     */
    size?: string;
    className?: string;
    primary?: boolean;
}

const Spinner: React.FC<Props> = (props) => {
    const { color, size, primary, className } = props;

    const style = {
        ...(color && { color }),
        ...(size && { fontSize: size }),
    };

    const cn = [
        'loader-spinner',
        primary && 'is-primary',
        className && className,
    ].filter(Boolean).join(' ');

    return (
        <div style={ style } className={ cn } />
    )
};

export default Spinner;
