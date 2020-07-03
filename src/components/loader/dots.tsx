import React from 'react';

interface Props {
    color?: string;
    /**
     * Using px, rem, em or %
     */
    size?: string;
    primary?: boolean;
    className?: string;
}

const Dots: React.FC<Props> = (props) => {
    const { color, size, primary, className } = props;

    const style = {
        ...(color && { color }),
        ...(size && { fontSize: size }),
    };
    
    const cn = [
        'loader-dots',
        primary && 'is-primary',
        className && className,
    ].filter(Boolean).join(' ');

    return (
        <div style={ style } className={ cn }>
            <span className="loader-dot-bubble" />
            <span className="loader-dot-bubble" />
            <span className="loader-dot-bubble" />
        </div>
    )
};

export default Dots;
