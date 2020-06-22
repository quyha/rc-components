import React from 'react';
import Button, { ButtonGroup } from '../components/button';
import Icon from '../components/icon';

export default {
    title: 'Button',
    component: Button,
};

const doClick: () => void = () => {};

export const Basic: React.FC<{}> = () => <Button onClick={ doClick }>Button</Button>;

export const Color: React.FC<{}> = () => (
    <ButtonGroup>
        <Button appearance="white" onClick={ doClick }>White</Button>
        <Button appearance="light" onClick={ doClick }>Light</Button>
        <Button appearance="dark" onClick={ doClick }>Dark</Button>
        <Button appearance="black" onClick={ doClick }>Black</Button>
        <Button appearance="primary" onClick={ doClick }>Primary</Button>
        <Button appearance="info" onClick={ doClick }>info</Button>
        <Button appearance="success" onClick={ doClick }>Success</Button>
        <Button appearance="warning" onClick={ doClick }>Warning</Button>
        <Button appearance="danger" onClick={ doClick }>Danger</Button>
    </ButtonGroup>
);

export const Inverted: React.FC<{}> = () => (
    <ButtonGroup>
        <Button appearance="white" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="light" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="dark" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="black" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="primary" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="info" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="success" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="warning" inverter onClick={ doClick }>Inverted</Button>
        <Button appearance="danger" inverter onClick={ doClick }>Inverted</Button>
    </ButtonGroup>
);

export const Size: React.FC<{}> = () => (
    <ButtonGroup>
        <Button size="small" onClick={ doClick }>Small</Button>
        <Button onClick={ doClick }>Default</Button>
        <Button size="medium" onClick={ doClick }>Medium</Button>
        <Button size="large" onClick={ doClick }>Large</Button>
    </ButtonGroup>
);

export const Outlined: React.FC<{}> = () => (
    <ButtonGroup>
        <Button outlined onClick={ doClick }>Outlined</Button>
        <Button appearance="black" outlined onClick={ doClick }>Outlined</Button>
        <Button appearance="primary" outlined onClick={ doClick }>Outlined</Button>
        <Button appearance="info" outlined onClick={ doClick }>Outlined</Button>
        <Button appearance="success" outlined onClick={ doClick }>Outlined</Button>
        <Button appearance="warning" outlined onClick={ doClick }>Outlined</Button>
        <Button appearance="danger" outlined onClick={ doClick }>Outlined</Button>
    </ButtonGroup>
);

export const Rounded: React.FC<{}> = () => (
    <ButtonGroup>
        <Button rounded onClick={ doClick }>Rounded</Button>
        <Button appearance="black" rounded onClick={ doClick }>Rounded</Button>
        <Button appearance="primary" rounded onClick={ doClick }>Rounded</Button>
        <Button appearance="info" rounded onClick={ doClick }>Rounded</Button>
        <Button appearance="success" rounded onClick={ doClick }>Rounded</Button>
        <Button appearance="warning" rounded onClick={ doClick }>Rounded</Button>
        <Button appearance="danger" rounded onClick={ doClick }>Rounded</Button>
    </ButtonGroup>
);

export const Loading: React.FC<{}> = () => (
    <ButtonGroup>
        <Button loading onClick={ doClick }>Loading</Button>
        <Button appearance="black" loading onClick={ doClick }>Loading</Button>
        <Button appearance="primary" loading onClick={ doClick }>Loading</Button>
        <Button appearance="info" loading onClick={ doClick }>Loading</Button>
        <Button appearance="success" loading onClick={ doClick }>Loading</Button>
        <Button appearance="warning" loading onClick={ doClick }>Loading</Button>
        <Button appearance="danger" loading onClick={ doClick }>Loading</Button>
    </ButtonGroup>
);

export const Disabled: React.FC<{}> = () => (
    <ButtonGroup>
        <Button disabled onClick={ doClick }>Disabled</Button>
        <Button appearance="black" disabled onClick={ doClick }>Disabled</Button>
        <Button appearance="primary" disabled onClick={ doClick }>Disabled</Button>
        <Button appearance="info" disabled onClick={ doClick }>Disabled</Button>
        <Button appearance="success" disabled onClick={ doClick }>Disabled</Button>
        <Button appearance="warning" disabled onClick={ doClick }>Disabled</Button>
        <Button appearance="danger" disabled onClick={ doClick }>Disabled</Button>
    </ButtonGroup>
);

export const WithIcons: React.FC<{}> = () => (
    <ButtonGroup>
        <Button onClick={ doClick }>
            <Icon name="thumb-up" />
            <span>Like</span>
        </Button>
        <Button appearance="danger" outlined onClick={ doClick }>
            <Icon name="x" />
            <span>Delete</span>
        </Button>
        <Button appearance="primary" onClick={ doClick }>
            <span>Download</span>
            <Icon name="cloud-download" />
        </Button>
    </ButtonGroup>
);

export const ListButton: React.FC<{}> = () => (
    <div style={ { width: 393 } }>
        <ButtonGroup>
            <Button onClick={ doClick }>One</Button>
            <Button onClick={ doClick }>Two</Button>
            <Button onClick={ doClick }>Three</Button>
            <Button onClick={ doClick }>Four</Button>
            <Button onClick={ doClick }>Five</Button>
            <Button onClick={ doClick }>Sex</Button>
            <Button onClick={ doClick }>Seven</Button>
            <Button onClick={ doClick }>Eight</Button>
            <Button onClick={ doClick }>Nine</Button>
            <Button onClick={ doClick }>Ten</Button>
            <Button onClick={ doClick }>Eleven</Button>
            <Button onClick={ doClick }>Twelve</Button>
        </ButtonGroup>
    </div>
);

export const ListTogether: React.FC<{}> = () => (
    <>
        <ButtonGroup hasAddons>
            <Button onClick={ doClick }>One</Button>
            <Button selected onClick={ doClick }>Two</Button>
            <Button onClick={ doClick }>Three</Button>
            <Button onClick={ doClick }>Four</Button>
        </ButtonGroup>
        <ButtonGroup hasAddons align="centered">
            <Button onClick={ doClick }>One</Button>
            <Button onClick={ doClick }>Two</Button>
        </ButtonGroup>
        <ButtonGroup hasAddons align="right">
            <Button onClick={ doClick }>One</Button>
            <Button onClick={ doClick }>Two</Button>
            <Button onClick={ doClick }>Three</Button>
        </ButtonGroup>
    </>
);
