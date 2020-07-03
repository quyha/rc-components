import React from 'react';
import Tag, { TagGroup } from '../components/tags';

export default {
    title: 'Tag',
    component: Tag,
};

export const Basic: React.FC<{}> = () => (
    <TagGroup>
        <Tag>Tag1</Tag>
        <Tag appearance="black">Tag1</Tag>
        <Tag appearance="dark">Tag1</Tag>
        <Tag appearance="white">Tag1</Tag>
        <Tag appearance="primary">Tag1</Tag>
        <Tag appearance="success">Tag1</Tag>
        <Tag appearance="info">Tag1</Tag>
        <Tag appearance="warning">Tag1</Tag>
        <Tag appearance="danger">Tag1</Tag>
    </TagGroup>
);

export const Size: React.FC<{}> = () => (
    <TagGroup>
        <Tag size="small">Tag1</Tag>
        <Tag>Tag1</Tag>
        <Tag size="medium">Tag1</Tag>
        <Tag size="large">Tag1</Tag>
    </TagGroup>
);

export const Light: React.FC<{}> = () => (
    <TagGroup>
        <Tag appearance="black" light>Tag1</Tag>
        <Tag appearance="dark" light>Tag1</Tag>
        <Tag appearance="white" light>Tag1</Tag>
        <Tag appearance="primary" light>Tag1</Tag>
        <Tag appearance="success" light>Tag1</Tag>
        <Tag appearance="info" light>Tag1</Tag>
        <Tag appearance="warning" light>Tag1</Tag>
        <Tag appearance="danger" light>Tag1</Tag>
    </TagGroup>
);

export const Delete: React.FC<{}> = () => (
    <Tag deleteable>Delete</Tag>
);
