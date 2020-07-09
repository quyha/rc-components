import React, { ReactNode, useMemo } from 'react';

export interface InputProps {
    type: string;
    className?: string;
    value?: string;
    /**
     * Change event handler (value: string) => void
     */
    onChange?: (value: string) => void;
    placeholder?: string;
    /**
     * One of 'primary' | 'info' | 'success' | 'warning' | 'danger'
     */
    appearance?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
    rounded?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    loading?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    label?: string;
    error?: string;
    /**
     * If you want a horizontal form control
     */
    horizontal?: boolean;
    /**
     * One of small | medium | large
     */
    size?: string;
}

export const FieldWrap: React.FC<Partial<InputProps>> = (props) => {
    const {
        loading,
        iconLeft,
        iconRight,
        label,
        error,
        children,
        horizontal,
        value = '',
        size,
    } = props;

    const cnControl = [
        'control',
        loading && 'is-loading',
        iconLeft && 'has-icon-left',
        iconRight && 'has-icon-right',
    ].filter(Boolean).join(' ');

    const render = useMemo(() => (
        <div className={ `field${ size ? ` is-${ size }` : '' }` }>
            { label && <label className="label">{ label }</label> }
            <div className={ cnControl }>
                { children }
                { iconLeft && <span className="icon-ip is-left">{ iconLeft }</span> }
                { iconRight && <span className="icon-ip is-right">{ iconRight }</span> }
            </div>
            { error && <p className="help is-danger">{ error }</p> }
        </div>
    ), [ value, error, cnControl, children ]);

    const renderHorizontal = useMemo(() => (
        <div className="field is-horizontal">
            <div className="field-label">
                { label && <label className="label">{ label }</label> }
            </div>
            <div className="field-body">
                <div className="field">
                    <div className={ cnControl }>
                        { children }
                        { iconLeft && <span className="icon-ip is-left">{ iconLeft }</span> }
                        { iconRight && <span className="icon-ip is-right">{ iconRight }</span> }
                    </div>
                    { error && <p className="help is-danger">{ error }</p> }
                </div>
            </div>
        </div>
    ), [ value, error, cnControl, children ]);
    
    return horizontal ? renderHorizontal : render;
};

/**
 * Use React.memo in the production. Edit source file directly
 */
const Input: React.FC<InputProps> = (props: InputProps) => {
    const {
        type,
        className,
        value = '',
        onChange,
        placeholder = '',
        appearance,
        rounded,
        disabled = false,
        readonly = false,
        error,
    } = props;

    const cnInput = [
        'input',
        className,
        appearance && `is-${ appearance }`,
        rounded && 'is-rounded',
        error && 'is-danger',
    ].filter(Boolean).join(' ');

    const changeValue: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
        if (onChange) {
            onChange(target.value);
        }
    }
    
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FieldWrap { ...props }>
            {
                type !== 'textarea' ? (
                    <input
                        type={ type }
                        className={ cnInput }
                        value={ value }
                        onChange={ changeValue }
                        placeholder={ placeholder }
                        disabled={ disabled }
                        readOnly={ readonly }
                    />
                ) : (
                    <textarea
                        value={ value }
                        className={ `${ className !== undefined ? className : '' }${ error ? ' is-danger' : '' }` }
                        onChange={ changeValue }
                        placeholder={ placeholder }
                        disabled={ disabled }
                        readOnly={ readonly }
                    />
                )
            }
        </FieldWrap>
    )
}

// export default React.memo<Props>(Input, (prevProps, nextProps) => {
//     return prevProps.value === nextProps.value
// });
export default Input;
