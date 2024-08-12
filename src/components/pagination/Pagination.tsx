import '../../css/Pagination.css';
import { useEffect, useState } from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

type PageType = {
    nPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


const Pagination = ({ nPages, currentPage, setCurrentPage }: PageType) => {

    const pageNumbers = [];
    const maxPageButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(nPages, currentPage + Math.floor(maxPageButtons / 2));

    if (endPage - startPage < maxPageButtons - 1) {
        if (currentPage < Math.floor(maxPageButtons / 2) + 1) {
            endPage = Math.min(nPages, endPage + (Math.floor(maxPageButtons / 2) - (currentPage - startPage)));
        } else {
            startPage = Math.max(1, startPage - (Math.floor(maxPageButtons / 2) - (endPage - currentPage)));
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <BootstrapPagination className='m-0 p-0 d-flex justify-content-end align-items-center'>
            <BootstrapPagination.Prev className='m-0 p-0 prev' onClick={() =>
                setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >Previous</BootstrapPagination.Prev>
            {pageNumbers.map(number => (
                <BootstrapPagination.Item className={`m-0 p-0 ${number === currentPage && 'active'}`}
                    key={number}
                    onClick={() => setCurrentPage(number)}
                >
                    {number}
                </BootstrapPagination.Item>
            ))}
            <BootstrapPagination.Next className='m-0 p-0' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === nPages}>Next</BootstrapPagination.Next>
        </BootstrapPagination>
    );

}

export default Pagination;