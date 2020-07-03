import React, { useMemo, useState, useCallback, FormEvent, useEffect, useRef } from 'react';
import { StateSelectedKeys, Record, PropsTable } from './type';
import TableHead from './head';
import { LoaderSpinner } from '../loader';
import TableRow from './row';
import { isSelectedAllRow, toSelectedAllKeys } from './util';

const Table: React.FC<PropsTable> = (props) => {
    const {
        columns,
        data,
        loading,
        selectable,
        labelEmptyData,
        rowSelection = {},
        initialSelectedKeys = [],
    } = props;

    const {
        onChange,
        onSelect,
        onSelectAll,
        getCheckboxProps,
    } = rowSelection;

    const [ selectedKeys, setSelectedKeys ] = useState<StateSelectedKeys>([]);

    const tableRef = useRef<HTMLTableElement | null>(null);

    const isSelectedRow = useMemo(() => (key: StateSelectedKeys[number]): boolean => (
        selectedKeys.includes(`${ key }`)
    ), [ selectedKeys ]);

    const isSelectedAll = useMemo(() => isSelectedAllRow(data, selectedKeys), [ selectedKeys, data ]);

    const columnKeys = useMemo(() => columns.map(({ key }) => key), [ columns ]);

    const columnRenderer = useMemo(() => {
        const cols = columns.filter((col) => Object.hasOwnProperty.call(col, 'render'))

        return cols.length === 0
            ? undefined
            : cols.reduce((acc, col) => ({ ...acc, ...{ [col.key]: col.render } }), {});
    }, [ columns ]);

    const emptyData = useMemo(() => {
        const colSpan = selectable ? columns.length + 1 : columns.length;

        return (
            <tr className="empty-data">
                <td colSpan={ colSpan }>{ labelEmptyData }</td>
            </tr>
        )
    }, [ selectable, labelEmptyData ]);

    const handleChangeSelectRow = useCallback((record: Record) => (e: FormEvent<HTMLInputElement>): void => {
        const { checked, value } = e.target as HTMLInputElement;
        
        const keys = checked
            ? [ ...selectedKeys, ...[ value ] ]
            : selectedKeys.filter((v) => (v !== value));
        
        setSelectedKeys(keys);

        if (onChange) {
            onChange(keys);
        }

        if (onSelect) {
            onSelect(checked, record, keys);
        }
    }, [ selectedKeys, onChange, onSelect ]);

    const handleSelectAll = useCallback((e: FormEvent<HTMLInputElement>) => {
        const { checked } = e.target as HTMLInputElement;

        const disabledKeys: StateSelectedKeys = [];

        if (tableRef.current) {
            tableRef.current.querySelectorAll<HTMLInputElement>('.table-checkbox input:disabled').forEach((input) => {
                disabledKeys.push(input.value);
            })
        }

        const keys = toSelectedAllKeys(checked, data, selectedKeys, disabledKeys);

        setSelectedKeys(keys);

        if (onChange) {
            onChange(keys);
        }

        if (onSelectAll) {
            onSelectAll(checked, keys);
        }
    }, [ data, selectedKeys, onChange, onSelectAll ]);

    useEffect(() => {
        if (initialSelectedKeys.length > 0) {
            setSelectedKeys(initialSelectedKeys.map((key) => `${ key }`));
        }
    }, [ initialSelectedKeys ]);
    
    return (
        <div className="table-wrap">
            <table className={ `table${ loading ? ' is-loading' : '' }` } ref={ tableRef }>
                <TableHead
                    columns={ columns }
                    selectable={ selectable }
                    selectedAll={ isSelectedAll }
                    onSelectAll={ handleSelectAll }
                />
                <tbody>
                    {
                        data.length > 0 ? data.map((dt) => (
                            <TableRow
                                key={ dt.key }
                                columnKeys={ columnKeys }
                                data={ dt }
                                selectable={ selectable }
                                selected={ isSelectedRow(dt.key) }
                                onChange={ handleChangeSelectRow(dt) }
                                checkboxProps={ getCheckboxProps && getCheckboxProps(dt) }
                                columnRenderer={ columnRenderer }
                            />
                        )) : emptyData
                    }
                </tbody>
            </table>
            {
                loading && (
                    <div className="table-loading">
                        <LoaderSpinner primary />
                    </div>
                )
            }
        </div>
    )
};

Table.defaultProps = {
    labelEmptyData: 'No data',
    selectable: false,
    loading: false,
};

export default Table;
