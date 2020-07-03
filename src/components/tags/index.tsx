import React, { ReactNode, MouseEvent } from 'react';
import Delete from '../delete';

interface Props {
    children: ReactNode;
    /**
     * One of 'black' | 'dark' | 'white' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
     */
    appearance?: 'black' | 'dark' | 'white' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
    /**
     * One of 'small' | 'medium' | 'large'
     */
    size?: 'small' | 'medium' | 'large';
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
    /**
     * Light version
     */
    light?: boolean;
    /**
     * Display icon delete
     */
    deleteable?: boolean;
    /**
     * Callback when click delete
     */
    onDelete?: () => void;
}

const Tag: React.FC<Props> = (props: Props) => {
    const {
        children,
        appearance,
        size,
        light,
        onClick,
        deleteable,
        onDelete,
    } = props;

    const cn = [
        'tag',
        appearance && `is-${ appearance }`,
        size && `is-${ size }`,
        light && 'is-light',
        onClick && 'is-controlled',
    ].filter(Boolean).join(' ');

    const doClick = (e: MouseEvent<HTMLSpanElement>): void => {
        if (onClick) {
            onClick(e)
        }
    }

    const doDelete = (): void => {
        if (onDelete) {
            onDelete();
        }
    }
    
    return (
        <span className={ cn } onClick={ doClick }>
            { children }
            { deleteable && <Delete size="small" onClick={ doDelete } /> }
        </span>
    )
};

export const TagGroup: React.FC<{}> = ({ children }) => (
    <div className="tags">
        { children }
    </div>
);

export default Tag;
