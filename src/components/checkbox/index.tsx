import React from 'react';
import Icon from '../icon';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * Label of checkbox
     */
    label?: string;
    /**
     * Id of checkbox input
     */
    id: string;
    /**
     * Class of checkbox outer
     */
    className?: string;
    circle?: boolean;
    disabled?: boolean;
    /**
     * One of 'small' | 'large'
     */
    sizes?: 'small' | 'large';
}

const Checkbox: React.FC<Props> = (props: Props) => {
    const {
        label,
        id,
        className,
        circle,
        disabled,
        sizes,
        ...restProps
    } = props;

    const cnOuter = [
        'checkbox-outer',
        sizes && `is-${ sizes }`,
        className && className,
    ].filter(Boolean).join(' ');

    const cn = [
        'checkbox',
        circle && 'is-circle',
    ].filter(Boolean).join(' ');
    
    return (
        <div className={ cnOuter }>
            <span className={ cn }>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    id={ id }
                    disabled={ disabled }
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...restProps }
                />
                <span className="checkbox-inner" />
                <Icon name="check" className="checkbox-check" />
            </span>
            { label && <label className="checkbox-label" htmlFor={ id }>{ label }</label> }
        </div>
    )
};

export default Checkbox;
