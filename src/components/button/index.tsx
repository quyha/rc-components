/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    /**
        Buttons have type 'button' | 'submit' | 'reset'
    */
    type?: 'button' | 'submit' | 'reset';
    /**
        Buttons that have hrefs should use link instead of button
    */
    isAnchor?: boolean;
    /**
     *  Use this when button is anchor
     */
    href?: string;
    titleAnchor?: string;
    className?: string;
    /**
     *  Appearance is one of 'white' | 'light' | 'black' | 'dark' | 'primary'
     * | 'info' | 'success' | 'warning' | 'danger'
     */
    appearance?: 'white' | 'light' | 'black' | 'dark' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    inverter?: boolean;
    /**
     * Size is one of 'small' | 'medium' | 'large'
     */
    size?: 'small' | 'medium' | 'large';
    outlined?: boolean;
    rounded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    selected?: boolean;
    fullWidth?: boolean;
    /**
     * Click handler (event) => void
     */
    onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = (props: Props) => {
    const {
        children,
        type = 'button',
        isAnchor,
        href,
        titleAnchor,
        onClick,
        appearance,
        inverter,
        size,
        outlined,
        rounded,
        loading,
        disabled,
        selected,
        fullWidth,
        className,
    } = props;

    const cn = [
        'button',
        appearance && `is-${ appearance }`,
        inverter && 'is-inverter',
        size && `is-${ size }`,
        outlined && 'is-outlined',
        rounded && 'is-rounded',
        loading && 'is-loading',
        disabled && 'is-disabled',
        selected && 'is-selected',
        fullWidth && 'is-fullwidth',
        className && className,
    ].filter(Boolean).join(' ');

    const doClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (onClick) {
            onClick(e);
        }
    }
    
    return isAnchor ? (
        <a
            href={ href }
            title={ titleAnchor }
            className="button"
        >
            { children }
        </a>
    ) : (
        <button
            type={ type }
            className={ cn }
            onClick={ doClick }
            disabled={ disabled }
        >
            { children }
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    isAnchor: false,
}

export default Button;

interface ButtonGroup {
    children: ReactNode;
    className?: string;
    hasAddons?: boolean;
    align?: 'left' | 'centered' | 'right';
}

export const ButtonGroup: React.FC<ButtonGroup> = (props: ButtonGroup) => {
    const {
        children,
        className,
        hasAddons,
        align,
    } = props;
    
    const cn = [
        'buttons',
        hasAddons && 'has-addons',
        align && `is-${ align }`,
        className,
    ].filter(Boolean).join(' ');
    
    return (
        <div className={ cn }>
            { children }
        </div>
    )
};
