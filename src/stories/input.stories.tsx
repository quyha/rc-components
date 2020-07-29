import React, { useState, CSSProperties } from 'react';
import Input from '../components/input';
import Icon from '../components/icon';

export default {
    title: 'Input',
    component: Input,
}

const styleWrapper: CSSProperties = {
    width: 500,
}

export const InputGeneral: React.FC<{}> = () => {
    const [ value, setValue ] = useState<string>('');

    const changeInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => setValue(e.target.value);
    
    return (
        <div style={ styleWrapper }>
            <Input
                type="text"
                value={ value }
                onChange={ changeInput }
                placeholder="Text input"
            />
            <p>Value input: { value }</p>
        </div>
    )
};

export const Colors: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input type="text" appearance="primary" placeholder="Primary input" />
        <Input type="text" appearance="info" placeholder="Info input" />
        <Input type="text" appearance="success" placeholder="Success input" />
        <Input type="text" appearance="warning" placeholder="Warning input" />
        <Input type="text" appearance="danger" placeholder="Danger input" />
    </div>
)

export const Rounded: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input type="text" rounded placeholder="Rounded input" />
    </div>
);

export const Disabled: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input type="text" disabled placeholder="Disabled input" />
    </div>
);

export const Readonly: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input type="text" readonly placeholder="Readonly input" />
    </div>
);

export const Loading: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input type="text" loading placeholder="Loading input" />
    </div>
);

export const WithIcon: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input
            type="text"
            placeholder="Search"
            iconRight={ <Icon name="search" /> }
        />
        <Input
            type="text"
            placeholder="Email"
            iconLeft={ <Icon name="mail" /> }
            iconRight={ <Icon name="check" /> }
        />
        <Input
            type="password"
            placeholder="Password"
            iconLeft={ <Icon name="lock" /> }
        />
    </div>
);

export const WithLabel: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input
            type="text"
            placeholder="Username"
            label="Username"
            error="Username is invalid"
        />
    </div>
);

export const WithHorizontalLabel: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input
            type="text"
            placeholder="Email"
            label="Email"
            horizontal
        />
        <Input
            type="password"
            placeholder="Password"
            label="Password"
            horizontal
            iconLeft={ <Icon name="lock" /> }
            error="Password is invalid"
        />
    </div>
);

export const Textarea: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input type="textarea" placeholder="Textarea" />
        <Input
            type="textarea"
            placeholder="Textarea"
            defaultValue="This is a textarea"
            label="Textarea"
        />
        <Input
            type="textarea"
            placeholder="Textarea"
            defaultValue="This is a textarea"
            label="Textarea"
            error="Invalid textarea"
        />
        <Input
            type="textarea"
            placeholder="This is a textarea fix size"
            label="Textarea fix size"
            className="has-fixed-size"
        />
        <Input
            type="textarea"
            placeholder="Textarea"
            defaultValue="This is a textarea"
            label="Textarea"
            error="Invalid textarea"
            horizontal
        />
    </div>
);

export const Size: React.FC<{}> = () => (
    <div style={ styleWrapper }>
        <Input
            type="text"
            placeholder="Small"
            sizes="small"
            label="Username"
            error="Username is invalid"
            iconRight={ <Icon name="search" /> }
        />
        <Input
            type="text"
            placeholder="Normal"
            label="Username"
            error="Username is invalid"
            iconRight={ <Icon name="search" /> }
        />
        <Input
            type="text"
            placeholder="Medium"
            sizes="medium"
            label="Username"
            error="Username is invalid"
            iconRight={ <Icon name="search" /> }
        />
        <Input
            type="text"
            placeholder="Large"
            sizes="large"
            label="Username"
            error="Username is invalid"
            iconRight={ <Icon name="search" /> }
        />
    </div>
);
