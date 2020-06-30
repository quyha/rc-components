import React from 'react';
import Toast from '../components/toast';
import Button, { ButtonGroup } from '../components/button';

export default {
    title: 'Toast',
    component: Toast,
};

export const Basic: React.FC<{}> = () => {
    const showSuccess = (): void => Toast.success({ content: 'It\'s pretty cool!', duration: 5000 });
    const showWarning = (): void => Toast.warning({ content: 'It\'s pretty cool', duration: 5000 });
    const showDanger = (): void => Toast.danger({ content: 'It\'s pretty cool', duration: 5000 });
    
    return (
        <ButtonGroup>
            <Button appearance="primary" outlined onClick={ showSuccess }>Show Toast</Button>
            <Button appearance="warning" outlined onClick={ showWarning }>Show Toast</Button>
            <Button appearance="danger" outlined onClick={ showDanger }>Show Toast</Button>
        </ButtonGroup>
    )
};

export const Closable: React.FC<{}> = () => {
    const showSuccess = (): void => Toast.success({ content: 'It\'s pretty cool!', duration: 5000, closeable: true });
    const showWarning = (): void => Toast.warning({ content: 'It\'s pretty cool', duration: 5000, closeable: true });
    const showDanger = (): void => Toast.danger({ content: 'It\'s pretty cool', duration: 5000, closeable: true });
    
    return (
        <ButtonGroup>
            <Button appearance="primary" outlined onClick={ showSuccess }>Show Toast</Button>
            <Button appearance="warning" outlined onClick={ showWarning }>Show Toast</Button>
            <Button appearance="danger" outlined onClick={ showDanger }>Show Toast</Button>
        </ButtonGroup>
    )
};
