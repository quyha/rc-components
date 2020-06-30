import React, { CSSProperties } from 'react';
import { Dropdown, DropdownItem, DropdownDivider } from '../components/dropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

const styleWrap: CSSProperties = {
    height: 300,
    width: 500,
};

export const Basic: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Dropdown hasArrowDown label="Dropdown button">
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownItem active>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
        </Dropdown>
    </div>
);

export const Toggle: React.FC<{}> = () => (
    <div style={ styleWrap }>
        <Dropdown hasArrowDown label="Click me">
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownItem active>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
        </Dropdown>
        <Dropdown hasArrowDown hoverable label="Hover me">
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
            <DropdownItem>
                <a href="#">Dropdown item</a>
            </DropdownItem>
        </Dropdown>
    </div>
);

const styleWrapAlign: CSSProperties = {
    width: 300,
    height: 100,
    marginLeft: 'auto',
};

export const RightAligned: React.FC<{}> = () => (
    <div style={ styleWrapAlign }>
        <Dropdown hasArrowDown hoverable rightAligned label="Right aligned">
            <DropdownItem>
                Align right dropdown content
            </DropdownItem>
        </Dropdown>
    </div>
)

const styleWrapUp: CSSProperties = {
    height: 200,
    width: 300,
    paddingTop: 100,
};

export const DropUp: React.FC<{}> = () => (
    <div style={ styleWrapUp }>
        <Dropdown hasArrowDown hoverable dropUp label="Drop up">
            <DropdownItem>
                Dropdown content appears above the dropdown button
            </DropdownItem>
        </Dropdown>
    </div>
);
