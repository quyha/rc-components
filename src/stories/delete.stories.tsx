import React, { CSSProperties } from 'react';
import Delete from '../components/delete';

export default {
    title: 'Delete',
    component: Delete,
};

const style: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 50px)',
    gridColumnGap: 20,
};

export const Size: React.FC<{}> = () => {
    const doClick = (): void => {};
    
    return (
        <div style={ style }>
            <Delete size="small" onClick={ doClick } title="Close small" />
            <Delete onClick={ doClick } title="Close normal" />
            <Delete size="medium" onClick={ doClick } title="Close medium" />
            <Delete size="large" onClick={ doClick } title="Close large" />
        </div>
    );
}
