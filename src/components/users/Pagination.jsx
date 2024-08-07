import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap';

const Pagination = ({ pagination, onChange, isLoading, currentPage }) => {
    if (!pagination || pagination.totalPages <= 1) {
        return null;
    }

    return (
        <BSPagination>
            {pagination.currentPage > 1 && (
                <>
                    <BSPagination.First
                        onClick={() => onChange(1)}
                        disabled={
                            isLoading ? true : pagination.currentPage === 1
                        }
                    />
                    <BSPagination.Prev
                        onClick={() => onChange(pagination.previousPage)}
                        disabled={
                            isLoading ? true : pagination.currentPage === 1
                        }
                    />
                </>
            )}

            {Array.from(
                { length: pagination.endPage - pagination.startPage + 1 },
                (_, index) => (
                    <BSPagination.Item
                        key={pagination.startPage + index}
                        active={pagination.startPage + index === currentPage}
                        onClick={() => onChange(pagination.startPage + index)}
                        disabled={isLoading}>
                        {pagination.startPage + index}
                    </BSPagination.Item>
                )
            )}

            {pagination.currentPage < pagination.totalPages && (
                <>
                    <BSPagination.Next
                        onClick={() => onChange(pagination.nextPage)}
                        disabled={
                            isLoading
                                ? true
                                : pagination.currentPage ===
                                  pagination.totalPages
                        }
                    />
                    <BSPagination.Last
                        onClick={() => onChange(pagination.totalPages)}
                        disabled={
                            isLoading
                                ? true
                                : pagination.currentPage ===
                                  pagination.totalPages
                        }
                    />
                </>
            )}
        </BSPagination>
    );
};

export default Pagination;
