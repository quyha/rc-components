import React, { CSSProperties } from 'react';
import RDelete from '../components/r-delete';

export default {
    title: 'RDelete',
    component: RDelete,
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
            <RDelete size="small" onClick={ doClick } title="Close small" />
            <RDelete onClick={ doClick } title="Close normal" />
            <RDelete size="medium" onClick={ doClick } title="Close medium" />
            <RDelete size="large" onClick={ doClick } title="Close large" />
        </div>
    );
}
