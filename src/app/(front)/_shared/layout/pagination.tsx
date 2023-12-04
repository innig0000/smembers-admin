import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyPagination = ({ totalPage, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

    return (
        <div className='flex flex-col items-center'>
            <Pagination>
                { totalPage <= 5 && (
                    pages.map((page) => (
                        <Pagination.Item
                            key={page}
                            active={page === currentPage}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </Pagination.Item>
                    ))
                )}
                { totalPage > 5 && (
                    (currentPage < 5 && (
                        <>
                            {pages.slice(0, 5).map((page) => (
                                <Pagination.Item
                                    key={page}
                                    active={page === currentPage}
                                    onClick={() => onPageChange(page)}
                                >
                                    {page}
                                </Pagination.Item>
                            ))}
                            <Pagination.Ellipsis/>
                            <Pagination.Item onClick={() => onPageChange(totalPage)}>
                                {totalPage}
                            </Pagination.Item>
                        </>
                    )) ||

                    (currentPage >= 5 && currentPage < totalPage - 3 && (
                        <>
                            <Pagination.Item onClick={() => onPageChange(1)}>
                                {1}
                            </Pagination.Item>
                            <Pagination.Ellipsis />
                            {pages.slice(currentPage - 2, currentPage + 2).map((page) => (
                                <Pagination.Item
                                    key={page}
                                    active={page === currentPage}
                                    onClick={() => onPageChange(page)}
                                >
                                    {page}
                                </Pagination.Item>
                            ))}
                            <Pagination.Ellipsis/>
                            <Pagination.Item onClick={() => onPageChange(totalPage)}>
                                {totalPage}
                            </Pagination.Item>
                        </>
                    )) ||

                    (currentPage > totalPage - 5 && (
                        <>
                            <Pagination.Item onClick={() => onPageChange(1)}>
                                {1}
                            </Pagination.Item>
                            <Pagination.Ellipsis />
                            {pages.slice(totalPage - 5).map((page) => (
                                <Pagination.Item
                                    key={page}
                                    active={page === currentPage}
                                    onClick={() => onPageChange(page)}
                                >
                                    {page}
                                </Pagination.Item>
                            ))}
                        </>
                    ))
                )}
            </Pagination>
        </div>
    )
}

export default MyPagination;