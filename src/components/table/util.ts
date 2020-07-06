import { Record, StateSelectedKeys } from './type';

function isSelectedAllRow(data: Record[], selectedData: StateSelectedKeys): boolean {
    const { length: dataLength } = data;
    const { length: selectedLength } = selectedData;
    
    if (selectedLength < dataLength || selectedLength === 0) return false;

    let result = true;
    
    for (let i = 0; i < dataLength; i += 1) {
        const { key } = data[i];
        const indexExist = selectedData.findIndex((selectedKey) => selectedKey === `${ key }`);

        if (indexExist === -1) {
            result = false;
            break;
        }
    }
    return result;
}

function toSelectedAllKeys(
    selected: boolean,
    data: Record[],
    selectedKeys: StateSelectedKeys,
    disabledKeys: StateSelectedKeys
): StateSelectedKeys {
    const dataKeys: string[] = data
        .map(({ key }) => `${ key }`)
        .filter((key) => !disabledKeys.includes(key));

    let result = [];

    if (selected) {
        result = [ ...selectedKeys, ...dataKeys ];
    } else {
        result = selectedKeys.filter((key) => !dataKeys.includes(`${ key }`));
    }

    return Array.from(new Set(result));
}

// eslint-disable-next-line import/prefer-default-export
export { isSelectedAllRow, toSelectedAllKeys };
