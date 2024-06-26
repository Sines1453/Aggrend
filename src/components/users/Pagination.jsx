import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, pageSize, totalItems, onChange }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    return (
        <BSPagination>
            {[...Array(totalPages)].map((_, index) => (
                <BSPagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => onChange(index + 1)}>
                    {index + 1}
                </BSPagination.Item>
            ))}
        </BSPagination>
    );
};

export default Pagination;
