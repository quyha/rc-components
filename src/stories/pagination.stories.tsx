import React, { useState } from 'react';
import Pagination from '../components/pagination';

export default {
    title: 'Pagination',
    component: Pagination,
}

export const Basic: React.FC<{}> = () => {
    const [ page, setPage ] = useState<number>(1);

    const changePage = (p: number): void => setPage(p);

    return <Pagination total={ 200 } activePage={ page } onChange={ changePage } />
};

export const Alignment: React.FC<{}> = () => {
    const [ page, setPage ] = useState<number>(1);

    const changePage = (p: number): void => setPage(p);

    return (
        <>
            <div>
                <Pagination
                    total={ 40 }
                    activePage={ page }
                    onChange={ changePage }
                />
            </div>
            <div>
                <Pagination
                    total={ 40 }
                    activePage={ page }
                    onChange={ changePage }
                    align="center"
                />
            </div>
            <div>
                <Pagination
                    total={ 40 }
                    activePage={ page }
                    onChange={ changePage }
                    align="right"
                />
            </div>
        </>
    )
};
