import React, { ReactNode } from 'react';
import RDelete from '../r-delete';

interface Props {
    children: ReactNode;
    /**
     * One of 'primary' | 'info' | 'success' | 'warning' | 'danger'
     */
    appearance?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
    /**
     * Light version
     */
    light?: boolean;
    /**
     * Handler when click close notification () => void
     */
    onClose?: () => void;
}

const Notification: React.FC<Props> = (props: Props) => {
    const { children, appearance, light, onClose } = props;

    const cn = [
        'notification',
        appearance && `is-${ appearance }`,
        light && 'is-light',
    ].filter(Boolean).join(' ');

    const doClose = (): void => {
        if (onClose) {
            onClose();
        }
    }

    return (
        <div className={ cn }>
            <RDelete onClick={ doClose } />
            { children }
        </div>
    )
};

export default Notification;
