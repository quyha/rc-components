import { ReactNode, FormEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type KeyType = string | number;

export interface Record {
    key: KeyType;
    [propName: string]: string | number;
}

interface Column {
    /**
     * Title of the column
     */
    title: string;
    /**
     * Display field of the data record
     */
    dataIndex: string;
    /**
     * Key of the column
     */
    key: string;
    /**
     * Renderer of table cell (text, record, index) => ReactNode
     */
    render?: (text: string | number, record: Record) => ReactNode;
}

export interface Columns {
    /**
     * The columns config table
     */
    columns: Column[];
}

interface RowSelection {
    /**
     * Callback executed when selected rows change (selectedKeys: Array<>) => void
     */
    onChange?: (selectedKeys: StateSelectedKeys) => void;
    /**
     * Callback executed when select/deselect one row (selected: boolean, recode: Data) => void
     */
    onSelect?: (selected: boolean, recode: Record, selectedKeys: StateSelectedKeys) => void;
    /**
     * Callback executed when select/deselect all rows (selected: boolean, selectedKeys: StateSelectedKeys) => void;
     */
    onSelectAll?: (selected: boolean, selectedKeys: StateSelectedKeys) => void;
    /**
     * Get checkbox props
     */
    getCheckboxProps?: (record: Record) => DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

export interface Selectable {
    /**
     * Whether display checkbox column
     */
    selectable?: boolean;
}

export type StateSelectedKeys = Array<KeyType>;

interface Table {
    /**
     * Data record array to be rendered
     */
    data: Record[];
    /**
     * Whether show loading
     */
    loading?: boolean;
    /**
     * Display text when data empty
     */
    labelEmptyData?: string;
    rowSelection?: RowSelection;
    /**
     * Default selected keys
     */
    initialSelectedKeys?: StateSelectedKeys;
    className?: string;
}

export interface PropsTableHead extends Columns, Selectable {
    selectedAll?: boolean;
    onSelectAll?: (e: FormEvent<HTMLInputElement>) => void;
}

interface ColumnRenderer {
    [key: string]: (text: string | number, record: Record) => ReactNode;
}

export interface PropsTableRow extends Selectable {
    columnKeys: Array<string>;
    data: Record;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    selected?: boolean;
    checkboxProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    columnRenderer: ColumnRenderer | undefined;
}

export type PropsTable = Columns & Table & Selectable;
