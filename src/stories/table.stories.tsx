import React, { useState, useEffect, ReactNode } from 'react';
import { Description } from '@storybook/addon-docs/blocks';
import Table from '../components/table';
import { Record } from '../components/table/type';
import data from './data-table';
import Pagination from '../components/pagination';
import Tag from '../components/tags';
import tableMd from '../markdown/table.md';

export default {
    title: 'Table',
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getData(page: number, pageSize: number) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = pageSize + startIndex;
    return data.filter((_, i) => (i >= startIndex && i < endIndex))
        .map((d, i) => ({ ...{ no: startIndex + i + 1 }, ...d }));
}

export const README: React.FC<{}> = () => (
    <div style={ { height: 2000 } }>
        <Description markdown={ tableMd } />
    </div>
);

export const Basic: React.FC<{}> = () => {
    const columns = [
        { title: 'No', dataIndex: 'no', key: 'no' },
        { title: 'First name', dataIndex: 'firstName', key: 'firstName' },
        { title: 'Last name', dataIndex: 'lastName', key: 'lastName' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'IP address', dataIndex: 'ipAddress', key: 'ipAddress' },
    ];

    const sources = getData(1, 5);
    
    return <Table columns={ columns } data={ sources } />
};

export const PaginationData: React.FC<{}> = () => {
    const columns = [
        { title: 'No', dataIndex: 'no', key: 'no' },
        { title: 'First name', dataIndex: 'firstName', key: 'firstName' },
        { title: 'Last name', dataIndex: 'lastName', key: 'lastName' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'IP address', dataIndex: 'ipAddress', key: 'ipAddress' },
    ];

    const [ page, setPage ] = useState(1);
    const [ sources, setSources ] = useState(getData(1, 5));
    const [ loading, setLoading ] = useState(false);

    const changePage = (p: number): void => {
        if (!loading) {
            setPage(p);
        }
    }

    useEffect(() => {
        const newSources = getData(page, 5);
        setLoading(true);
        
        const timeout = setTimeout(() => {
            setSources(newSources);
            setLoading(false);
        }, 2000);

        return (): void => {
            clearTimeout(timeout);
        }
    }, [ page ]);
    
    return (
        <>
            <Table
                columns={ columns }
                data={ sources }
                loading={ loading }
            />
            <Pagination
                total={ data.length }
                pageSize={ 5 }
                activePage={ page }
                onChange={ changePage }
                loading={ loading }
            />
        </>
    )
};

export const Selectable: React.FC<{}> = () => {
    const columns = [
        { title: 'No', dataIndex: 'no', key: 'no' },
        { title: 'First name', dataIndex: 'firstName', key: 'firstName' },
        { title: 'Last name', dataIndex: 'lastName', key: 'lastName' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'IP address', dataIndex: 'ipAddress', key: 'ipAddress' },
    ];

    const [ page, setPage ] = useState(1);
    const [ sources, setSources ] = useState(getData(1, 5));
    const [ loading, setLoading ] = useState(false);
    const [ initialSelectedKeys, setInitialSelectedKeys ] = useState<Array<string>>([]);

    const changePage = (p: number): void => {
        if (!loading) {
            setPage(p);
        }
    }

    const changeSelected = (selectedKeys: unknown): void => {
        // eslint-disable-next-line no-console
        console.log('onChange: ', { selectedKeys });
    };

    const handleSelectRow = (selected: boolean, record: unknown, selectedKeys: unknown): void => {
        // eslint-disable-next-line no-console
        console.log('onSelect: ', { selected, record, selectedKeys });
    };

    const handleSelectAllRow = (selected: boolean, selectedKeys: unknown): void => {
        // eslint-disable-next-line no-console
        console.log('onSelectAll: ', { selectedAll: selected, selectedKeys });
    };

    const rowSelection = {
        onChange: changeSelected,
        onSelect: handleSelectRow,
        onSelectAll: handleSelectAllRow,
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        getCheckboxProps: (record: { key: number | string }) => ({ disabled: record.key === 5 }),
    };

    useEffect(() => {
        const newSources = getData(page, 5);
        setLoading(true);
        
        const timeout = setTimeout(() => {
            setSources(newSources);
            setLoading(false);
        }, 500);

        return (): void => {
            clearTimeout(timeout);
        }
    }, [ page ]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setInitialSelectedKeys([ '1', '2', '3', '6', '8' ]);
        }, 500);

        return (): void => {
            clearTimeout(timeout);
        }
    }, []);
    
    return (
        <>
            <Table
                columns={ columns }
                data={ sources }
                loading={ loading }
                selectable
                rowSelection={ rowSelection }
                initialSelectedKeys={ initialSelectedKeys }
            />
            <Pagination
                total={ data.length }
                pageSize={ 5 }
                activePage={ page }
                onChange={ changePage }
                loading={ loading }
            />
        </>
    )
};

export const CustomColumn: React.FC<{}> = () => {
    const initialSources = getData(1, 5);

    const [ sources, setSources ] = useState(initialSources);
    
    const doDeleteItem = (id: number) => (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        const newSources = sources.filter(({ no }) => no !== id);
        setSources(newSources);
    };
    
    const columns = [
        { title: 'No', dataIndex: 'no', key: 'no' },
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
            render(text: string | number): ReactNode {
                return (<a href="#">{ text }</a>);
            },
        },
        { title: 'Last name', dataIndex: 'lastName', key: 'lastName' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render(text: string | number, record: Record): ReactNode {
                return record.gender === 1
                    ? <Tag appearance="info" light>Female</Tag>
                    : <Tag appearance="success" light>Male</Tag>
            }
        },
        { title: 'IP address', dataIndex: 'ipAddress', key: 'ipAddress' },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render(text: string | number, record: Record): ReactNode {
                return (
                    <>
                        <a href="#" onClick={ doDeleteItem(record.no as number) }>Delete</a>
                        <span> | </span>
                        <span>Edit</span>
                    </>
                )
            }
        },
    ];
    
    return <Table columns={ columns } data={ sources } />
};
