import React, { ReactNode } from 'react';
import Portal from '../portal';
import useLockBodyScroll from '../../hook/use-lock-body-scroll';

interface Props {
    /**
     * Content modal
     */
    children: ReactNode;
    open: boolean;
    hideModal: () => void;
    /**
     * Click outside content modal to close modal
     */
    hasClickOutside?: boolean;
    /**
     * Expand width content modal
     */
    large?: boolean;
}

interface Card {
    hasCard?: boolean;
    cardTitle?: string;
    cardFooter?: ReactNode;
}

const Modal: React.FC<Props & Card> = (props: Props & Card) => {
    const {
        children,
        open,
        hideModal,
        hasClickOutside,
        large,
        hasCard,
    } = props;

    const cnBackground = [
        'modal-background',
        !hasClickOutside && 'no-cursor',
    ].filter(Boolean).join(' ');

    const cnContent = [
        hasCard ? 'modal-card' : 'modal-content',
        large && 'is-large',
    ].filter(Boolean).join(' ');

    const doClickOutside: React.MouseEventHandler<HTMLDivElement> = () => {
        if (hasClickOutside) {
            hideModal();
        }
    }

    useLockBodyScroll();

    return !open ? null : (
        <Portal id="modal">
            <div className={ cnBackground } onClick={ doClickOutside } />
            <div className={ cnContent }>
                { children }
            </div>
            {
                !hasCard && (
                    <button
                        type="button"
                        className="modal-close"
                        aria-label="close"
                        onClick={ hideModal }
                    />
                )
            }
        </Portal>
    )
};

Modal.defaultProps = {
    hasClickOutside: false,
};

export default Modal;
