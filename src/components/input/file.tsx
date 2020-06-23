import React, { useState } from 'react';
import Icon from '../icon';
import Image from '../image';

interface Props {
    /**
     * Name input
     */
    name: string;
    /**
     * Change event handler (e: React.FormEvent<HTMLInputElement) => void
     */
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    label?: string;
    /**
     * Has input file name?
     */
    hasName?: boolean;
    /**
     * Placeholder for the selected file name
     */
    fileName?: string;
    /**
     * Class name for file wrapper
     */
    className?: string;
    /**
     * Align the file input
     */
    align?: 'center' | 'right';
    /**
     * Expand the name to fill up the space
     */
    ctaFullWidth?: boolean;
    /**
     * Display message when file is invalid
     */
    error?: string;
}

const InputFile: React.FC<Props> = (props: Props) => {
    const {
        name,
        onChange,
        label,
        hasName,
        fileName,
        className,
        align,
        ctaFullWidth,
        error,
    } = props;

    const [ preview, setPreview ] = useState<string>('');
    const [ fName, setFName ] = useState<string>(fileName ?? '');

    const cn = [
        'file',
        hasName && 'has-name',
        align && `is-${ align }`,
        ctaFullWidth && 'is-fullwidth',
        className && className,
    ].filter(Boolean).join(' ');

    const changeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target?.files?.[0];

        if (error || file === undefined) {
            return;
        }

        if (hasName) {
            setFName(file.name);
        }

        setPreview(URL.createObjectURL(file));
        
        if (onChange) {
            onChange(e);
        }
    };
    
    return (
        <>
            <div className={ cn }>
                <label className="file-label">
                    <input
                        className="file-input"
                        type="file"
                        name={ name }
                        onChange={ changeInput }
                    />
                    <span className="file-cta">
                        <span className="file-icon">
                            <Icon name="file-upload" />
                        </span>
                        <span className="file-label">
                            { label }
                        </span>
                    </span>
                    { hasName && <span className="file-name" title={ fName }>{ fName }</span> }
                </label>
            </div>
            { error && <p className="help is-danger">{ error }</p> }
            {
                (!error && preview) && (
                    <Image
                        src={ preview }
                        size={ 128 }
                        borderRadius={ 4 }
                        objectFit="contain"
                        alt=""
                    />
                )
            }
        </>
    )
};

InputFile.defaultProps = {
    label: 'Chọn file ...',
};

export default InputFile;
