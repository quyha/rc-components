import React, { useState, useEffect } from 'react';
import usePrevious from '../../hook/use-previous';

interface Props {
    /**
     * Total count of items which you are going to display
     */
    total: number;
    /**
     * Active page
     */
    activePage: number;
    /**
     * Items of page
     */
    pageSize?: number;
    /**
     * Page change handler (page: number) => void
     */
    onChange: (s: number) => void;
    /**
     * Alignment pagination. One of 'left' | 'center' | 'right'
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Disable when loading = true
     */
    loading?: boolean;
    /**
     * Class name pagination
     */
    className?: string;
}

interface Pager {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
}

function getPager(totalItems: number, currentPage: number, pageSize: number): Pager {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number;
    let endPage: number;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
    } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array((endPage + 1) - startPage).fill(1).map((_, i) => startPage + i);

    return {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages,
    };
}

const Pagination: React.FC<Props> = (props: Props) => {
    const {
        total,
        activePage,
        pageSize = 10,
        onChange,
        align,
        loading,
        className,
    } = props;

    const [ pager, setPager ] = useState<Pager>();

    const setPage = (page: number): void => {
        if (page < 1) {
            return;
        }

        const newPager = getPager(total, page, pageSize);

        if (page >= 1) {
            setPager(newPager); // update state
        }
    }

    const changePage = (page: number) => (): void => {
        setPage(page);

        if (page <= total && page >= 1) {
            onChange(page); // call change page function in parent component
        }
    };

    const prevTotal = usePrevious(total);
    const prevActivePage = usePrevious(activePage);

    const cn = [
        'pagination',
        align && `is-${ align }`,
        loading && 'is-loading',
        className && className,
    ].filter(Boolean).join(' ');

    useEffect(() => {
        setPage(activePage);
    }, []);

    useEffect(() => {
        // console.log({ total, pager });
        if (total !== prevTotal || activePage !== prevActivePage) {
            setPage(activePage);
        }
    }, [ total, activePage ]);
    
    return (!pager || !pager.pages || pager.pages.length < 1 || pager.endPage === 1) ? null : (
        <ul className={ cn }>
            <li className={ `page-item ${ pager.currentPage === 1 ? 'is-disabled' : '' }` }>
                <a className="page-link" onClick={ changePage(1) } title="First">&laquo;</a>
            </li>
            <li className={ `page-item ${ pager.currentPage === 1 ? 'is-disabled' : '' }` }>
                <a className="page-link" onClick={ changePage(pager.currentPage - 1) } title="Previous">&lsaquo;</a>
            </li>
            {
                pager.pages.map((page, index) => (
                    <li key={ index } className={ `page-item ${ pager.currentPage === page ? 'is-active' : '' }` }>
                        <a className="page-link" onClick={ changePage(page) } title={ `Page ${ page }` }>{ page }</a>
                    </li>
                ))
            }
            <li className={ `page-item ${ pager.currentPage === pager.totalPages ? 'is-disabled' : '' }` }>
                <a className="page-link" onClick={ changePage(pager.currentPage + 1) } title="Next">&rsaquo;</a>
            </li>
            <li className={ `page-item ${ pager.currentPage === pager.totalPages ? 'is-disabled' : '' }` }>
                <a className="page-link" onClick={ changePage(pager.totalPages) } title="Last">&raquo;</a>
            </li>
        </ul>
    )
};

Pagination.defaultProps = {
    pageSize: 10,
    align: 'left',
};

export default Pagination;
// export default React.memo<Props>(Pagination);
