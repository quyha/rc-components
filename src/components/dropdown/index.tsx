import React, { ReactNode, useState, useEffect, useRef } from 'react';
import useOnClickOutside from '../../hook/use-on-click-outside';

interface PropsDropdown {
    children: ReactNode;
    /**
     * Label of button
     */
    label?: string;
    /**
     * Custom dropdown trigger
     */
    dropdownTrigger?: ReactNode;
    className?: string;
    /**
     * Show icon arrow down
     */
    hasArrowDown?: boolean;
    /**
     * The dropdown will show up all the time
     */
    active?: boolean;
    /**
     * The dropdown will show up when hovering dropdown-trigger
     */
    hoverable?: boolean;
    /**
     * Align right dropdown content
     */
    rightAligned?: boolean;
    /**
     * Dropdown content appears above the dropdown button
     */
    dropUp?: boolean;
}

interface PropsDropdownItem {
    children: ReactNode;
    active?: boolean;
    className?: string;
}

const DropdownItem: React.FC<PropsDropdownItem> = (props) => {
    const { children, active, className } = props;
    
    const cn = [
        'dropdown-item',
        active && 'is-active',
        className && className,
    ].filter(Boolean).join(' ');
    
    return (
        <div className={ cn }>
            { children }
        </div>
    );
};

const Dropdown: React.FC<PropsDropdown> = (props: PropsDropdown) => {
    const {
        children,
        label = '',
        dropdownTrigger,
        className,
        hasArrowDown,
        active,
        hoverable,
        rightAligned,
        dropUp,
    } = props;

    const [ open, setOpen ] = useState<boolean>(false);
    
    const refDropdown = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(refDropdown, () => {
        if (open) {
            setOpen(false);
        }
    });

    const cnDropdown = [
        'dropdown',
        (active || open) && 'is-active',
        hoverable && 'is-hoverable',
        rightAligned && 'is-right',
        dropUp && 'is-up',
        className && className,
    ].filter(Boolean).join(' ');

    const toggleOpen = (): void => {
        if (!hoverable) {
            setOpen((o) => !o);
        }
    };

    useEffect(() => {
        if (active) {
            setOpen(active);
        }
    }, [ active ]);
    
    return (
        <div className={ cnDropdown } ref={ refDropdown }>
            <div className="dropdown-trigger">
                {
                    dropdownTrigger ?? (
                        <button
                            type="button"
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            onClick={ toggleOpen }
                        >
                            <span>{ label }</span>                            {
                                hasArrowDown && (
                                    <svg className="icon dropdown-arrow" viewBox="0 0 24 24">
                                        <path d="M12 14.071L8.179 10.25a1.061 1.061 0 00-1.5 1.5l4.614 4.614a.999.999 0 001.414 0l4.614-4.614a1.061 1.061 0 00-1.5-1.5L12 14.071z" />
                                    </svg>
                                )
                            }
                        </button>
                    )
                }
            </div>
            <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    { children }
                </div>
            </div>
        </div>
    )
};

const DropdownDivider: React.FC<{}> = () => <hr className="dropdown-divider" />;

export { Dropdown, DropdownItem, DropdownDivider };
