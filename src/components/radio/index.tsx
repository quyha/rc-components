import React from 'react';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * Name of radio
     */
    name: string;
    /**
     * Label of radio
     */
    label?: string;
    /**
     * Id of radio input
     */
    id: string;
    /**
     * Class of radio
     */
    className?: string;
    disabled?: boolean;
    /**
     * One of 'small' | 'large'
     */
    sizes?: 'small' | 'large';
    /**
     * Display inline radio outer
     */
    horizontal?: boolean;
}

const Radio: React.FC<Props> = (props: Props) => {
    const {
        name,
        label,
        id,
        className,
        disabled,
        sizes,
        horizontal,
        ...restProps
    } = props;

    const cnOuter = [
        'radio-outer',
        horizontal && 'is-horizontal',
        sizes && `is-${ sizes }`,
    ].filter(Boolean).join(' ');

    const cn = [
        'radio',
    ].filter(Boolean).join(' ');

    return (
        <div className={ cnOuter }>
            <div className={ cn }>
                <input
                    type="radio"
                    name={ name }
                    id={ id }
                    className="radio-input"
                    disabled={ disabled }
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...restProps }
                />
                <span className="radio-inner" />
                <span className="radio-check" />
            </div>
            { label && <label className="radio-label" htmlFor={ id }>{ label }</label> }
        </div>
    )
};

export default Radio;
