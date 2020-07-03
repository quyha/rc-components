import React from 'react';
import isEqual from 'react-fast-compare';
import { PropsTableHead } from './type';
import Checkbox from '../checkbox';

const TableHead: React.FC<PropsTableHead> = (props) => {
    const {
        columns = [],
        selectable,
        selectedAll,
        onSelectAll,
    } = props;

    return (
        <thead>
            <tr>
                {
                    selectable && (
                        <th>
                            <Checkbox
                                id="tbl-select-all"
                                className="table-checkbox"
                                checked={ selectedAll }
                                onChange={ onSelectAll }
                            />
                        </th>
                    )
                }
                {
                    columns.length === 0
                        ? <span />
                        : (
                            columns.map((col) => (<th key={ col.key }>{ col.title }</th>))
                        )
                }
            </tr>
        </thead>
    )
};

export default React.memo<PropsTableHead>(TableHead, isEqual);
