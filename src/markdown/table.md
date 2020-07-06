## Usage

```javascript
const columns = [
    {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'First name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'IP address',
        dataIndex: 'ipAddress',
        key: 'ipAddress',
    },
];

const data = [
    {
        key: 1,
        firstName: 'Page',
        lastName: 'Broxholme',
        email: 'pbroxholme0@xrea.com',
        gender: 0,
        ipAddress: '164.82.112.207'
    },
    {
        key: 2,
        firstName: 'Caroline',
        lastName: 'Eykelhof',
        email: 'ceykelhof1@wired.com',
        gender: 0,
        ipAddress: '221.23.201.224'
    },
    {
        key: 3,
        firstName: 'Allyn',
        lastName: 'Giorgielli',
        email: 'agiorgielli2@deviantart.com',
        gender: 1,
        ipAddress: '247.93.136.235'
    },
    {
        key: 4,
        firstName: 'Ronny',
        lastName: 'Marham',
        email: 'rmarham3@amazon.co.jp',
        gender: 1,
        ipAddress: '191.51.237.49'
    },
    {
        key: 5,
        firstName: 'Creight',
        lastName: 'Proudler',
        email: 'cproudler4@free.fr',
        gender: 1,
        ipAddress: '227.79.133.223'
    },
];
```

## API

### Properties

| Name | Required | Type | Default | Description |
| --- | --- | --- | --- |
| columns | required | Column[] |  | The columns config of table, see table below |
| data | required | Record[] | | Data record array to be array, required `key` |
| loading | optional | boolean | false | Whether show loading |
| labelEmptyData| optional | string | 'No data' | Display text when data empty |
| selecteable | optional | boolean | false | Whether display checkbox column |
| rowSelection | optional | Object | | Row selection config, see table below |
| initialSelectedKeys | optional | Array | | Default selected keys |
| className | optional | string | | Additional class |

### Column Props

| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| title | required | string | | Title of the column |
| key | required | string \| number | | Unique key of this column, display field of the data record |
| render | optional | function (text, record) {} | | Renderer of table cell |

### Row selection

| Name | Required | Type | Default | Description |
| --- | --- | --- | --- | --- |
| onChange | optional | function (selectedKeys) {} | | Callback executed when selected row change |
| onSelect | optional | function (selected, record, selectedKeys) {} | | Callback executed when select\/deselect one row |
| onSelectAll | optional | function (selected, selectedKeys) {} | | Callback executed when select\/deselect all row |
| getCheckboxProps | optional | function (record) {} | | Get checkbox props |