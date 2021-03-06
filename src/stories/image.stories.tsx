import React, { CSSProperties } from 'react';
import Image from '../components/image';

export default {
    title: 'Image',
    component: Image,
}

const stylesSizes: CSSProperties = {
    display: 'flex',
    width: 800,
    justifyContent: 'space-between',
};

export const Basic: React.FC<{}> = () => (
    <Image size={ 128 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
);

export const Size: React.FC<{}> = () => (
    <div style={ stylesSizes }>
        <div>
            <h6>16x16</h6>
            <Image size={ 16 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div>
            <h6>24x24</h6>
            <Image size={ 24 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div>
            <h6>32x32</h6>
            <Image size={ 32 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div>
            <h6>48x48</h6>
            <Image size={ 48 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div>
            <h6>64x64</h6>
            <Image size={ 64 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div>
            <h6>96x96</h6>
            <Image size={ 96 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div>
            <h6>128x128</h6>
            <Image size={ 128 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
    </div>
);

export const Rounded: React.FC<{}> = () => (
    <Image size={ 96 } rounded src="https://i.imgur.com/7wvegw4.png" alt="image" />
);

export const BorderRadius: React.FC<{}> = () => (
    <div style={ stylesSizes }>
        <Image size={ 96 } borderRadius={ 2 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        <Image size={ 96 } borderRadius={ 3 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        <Image size={ 96 } borderRadius={ 4 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        <Image size={ 96 } borderRadius={ 5 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        <Image size={ 96 } borderRadius={ 7 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        <Image size={ 96 } borderRadius={ 12 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
        <Image size={ 96 } borderRadius={ 15 } src="https://i.imgur.com/7wvegw4.png" alt="image" />
    </div>
)

const styleRatioWrap: CSSProperties = {
    width: 300,
};

const styleRatio: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridColumnGap: 20,
    alignItems: 'center',
    marginBottom: 15,
};

export const Ratio: React.FC<{}> = () => (
    <div style={ styleRatioWrap }>
        <div style={ styleRatio }>
            <h5>1 by 1</h5>
            <Image ratio="1-1" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div style={ styleRatio }>
            <h5>2 by 1</h5>
            <Image ratio="2-1" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div style={ styleRatio }>
            <h5>3 by 2</h5>
            <Image ratio="3-2" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div style={ styleRatio }>
            <h5>4 by 3</h5>
            <Image ratio="4-3" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div style={ styleRatio }>
            <h5>16 by 9</h5>
            <Image ratio="16-9" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div style={ styleRatio }>
            <h5>2 by 3</h5>
            <Image ratio="2-3" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div style={ styleRatio }>
            <h5>3 by 4</h5>
            <Image ratio="3-4" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
        <div style={ styleRatio }>
            <h5>9 by 16</h5>
            <Image ratio="9-16" src="https://i.imgur.com/7wvegw4.png" alt="image" />
        </div>
    </div>
);
