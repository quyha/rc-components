import React from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * Id of switch
     */
    id: string;
    /**
     * Class of switch outer
     */
    className?: string;
    label?: string;
    disabled?: boolean;
    /**
     * One of 'small' | 'large'
     */
    sizes?: 'small' | 'large';
}

const Switch: React.FC<Props> = (props: Props) => {
    const {
        id,
        className,
        label = '',
        disabled = false,
        sizes,
        ...restProps
    } = props;

    const cn = [
        'switch',
        sizes && `is-${ sizes }`,
        className && className,
    ].filter(Boolean).join(' ');
    
    return (
        <span className={ cn }>
            <input
                type="checkbox"
                id={ id }
                className="switch-input"
                disabled={ disabled }
                // eslint-disable-next-line react/jsx-props-no-spreading
                { ...restProps }
            />
            <label className="switch-label" htmlFor={ id }>{ label }</label>
        </span>
    )
};

export default Switch;
