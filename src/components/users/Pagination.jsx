import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap';

const Pagination = ({ pagination, onChange }) => {
    if (!pagination || pagination.totalPages === 0) {
        return null;
    }

    return (
        <BSPagination>
            <BSPagination.First
                onClick={() => onChange(1)}
                disabled={!pagination.hasPrevious}
            />
            <BSPagination.Prev
                onClick={() => onChange(pagination.previousPage)}
                disabled={!pagination.hasPrevious}
            />

            {Array.from(
                { length: pagination.endPage - pagination.startPage + 1 },
                (_, index) => (
                    <BSPagination.Item
                        key={pagination.startPage + index}
                        active={
                            pagination.startPage + index ===
                            pagination.currentPage
                        }
                        onClick={() => onChange(pagination.startPage + index)}>
                        {pagination.startPage + index}
                    </BSPagination.Item>
                )
            )}

            <BSPagination.Next
                onClick={() => onChange(pagination.nextPage)}
                disabled={!pagination.hasNext}
            />
            <BSPagination.Last
                onClick={() => onChange(pagination.totalPages)}
                disabled={!pagination.hasNext}
            />
        </BSPagination>
    );
};

export default Pagination;
