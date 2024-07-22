import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import UserTable from './UserTable';
import Pagination from './Pagination';

const PAGE_SIZE_OPTIONS = [
    { value: 5, label: 'Show 5 items' },
    { value: 10, label: 'Show 10 items' },
    { value: 25, label: 'Show 25 items' },
];

const UsersView = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [pagination, setPagination] = useState({});

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setCurrentPage(1);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const url = new URL(
                    'https://sines.swpsolutions.com/api/v1.0/users'
                );

                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch');

                const { data, pagination } = await response.json();
                setUsers(data);
                setPagination(pagination);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [currentPage, pageSize]);

    return (
        <Container>
            <h1>Users</h1>
            <UserTable
                users={users}
                loading={loading}
                error={error}
            />
            <Row className='align-items-center mb-3 justify-content-end'>
                <Col xs='auto'>
                    <Form.Select
                        aria-label='Select page size'
                        value={pageSize}
                        onChange={(e) =>
                            handlePageSizeChange(Number(e.target.value))
                        }
                        className='me-3'
                        size='sm'>
                        {PAGE_SIZE_OPTIONS.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                <Col xs='auto'>
                    <Pagination
                        pagination={pagination}
                        onChange={(newPage) => {
                            setCurrentPage(newPage);
                            setLoading(true);
                        }}
                        isLoading={loading}
                        currentPage={currentPage}
                    />
                </Col>
            </Row>
            <Button
                variant='danger'
                onClick={() => setError('Simulated error')}>
                Trigger Error
            </Button>
        </Container>
    );
};

export default UsersView;
