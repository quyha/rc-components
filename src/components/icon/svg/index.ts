import React from 'react';
import { SvgProps } from '../svg.type';

export const iconList: string[] = [
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-up-right',
    'arrow-up-left',
    'arrow-down',
    'arrow-down-right',
    'arrow-down-left',
    'caret-down',
    'caret-up',
    'caret-left',
    'caret-right',
    'narrow-up',
    'narrow-down',
    'narrow-right',
    'narrow-left',
    'chevron-up',
    'chevron-down',
    'chevron-right',
    'chevron-left',
    'chevrons-up',
    'chevrons-down',
    'chevrons-right',
    'chevrons-left',
    'check',
    'checkbox',
    'x',
    'x-circle',
    'archive',
    'eye',
    'cloud-download',
    'cloud-upload',
    'square-check',
    'square-minus',
    'square-plus',
    'square-x',
    'thumb-down',
    'thumb-up',
    'trash',
    'user',
    'users',
    'alert-circle',
    'alert-triangle',
    'photo',
    'pencil',
    'calendar',
    'calendar-event',
    'calendar-minus',
    'calendar-plus',
    'lock',
    'lock-opened',
    'mail',
    'mail-opened',
    'dots',
    'dots-vertical',
    'search',
    'file-upload',
];

const icons: { [key: string]: React.FC<SvgProps> } = iconList.reduce((acc, icon) => {
    try {
        // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires
        const tmp = require(`./${ icon }`).default;
        return { ...acc, ...{ [icon]: tmp } };
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(`${ icon } not exist!`);
        return false;
    }
}, {});
  
export default icons;
