import React, { useMemo, memo } from 'react';
import isEqual from 'react-fast-compare';
import { PropsTableRow } from './type';
import Checkbox from '../checkbox';

const TableRow: React.FC<PropsTableRow> = (props) => {
    const {
        columnKeys,
        data,
        selectable,
        onChange,
        selected,
        checkboxProps = {},
        columnRenderer,
    } = props;

    const selectionCheckbox = useMemo(() => (
        <td>
            <Checkbox
                id={ `cell-ck-${ data.key }` }
                className="table-checkbox"
                onChange={ onChange }
                checked={ selected }
                value={ data.key }
                // eslint-disable-next-line react/jsx-props-no-spreading
                { ...checkboxProps }
            />
        </td>
    ), [ selected, onChange ]);

    const trKey = `tr-${ data.key }`;
    const tdKey = `tr-td-${ data.key }`;
    
    return (
        <tr key={ trKey } className={ `table-row${ selected ? ' is-selected' : '' }` }>
            { selectable && selectionCheckbox }
            {
                columnKeys.map((key) => (
                    <td key={ `${ tdKey }-${ key }` }>
                        {
                            columnRenderer?.[key] ? columnRenderer[key](data[key], data) : data[key]
                        }
                    </td>
                ))
            }
        </tr>
    )
};

export default memo<PropsTableRow>(TableRow, isEqual);
