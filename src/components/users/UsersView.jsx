import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import UserTable from './UserTable';
import Pagination from './Pagination';

const PAGE_SIZE_OPTIONS = [
    { value: 10, label: 'Show 10 items' },
    { value: 25, label: 'Show 25 items' },
];

const UsersView = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [pagination, setPagination] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const url = new URL(
                    'https://sines.swpsolutions.com/api/v1.0/users'
                );
                url.searchParams.set('page', currentPage.toString());
                url.searchParams.set('limit', pageSize.toString());

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
            <Row>
                <Col>
                    <h1>Users</h1>
                    <UserTable
                        users={users}
                        loading={loading}
                        error={error}
                    />
                    <Form.Select
                        className='mb-3'
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}>
                        {PAGE_SIZE_OPTIONS.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Form.Select>
                    <Pagination
                        pagination={pagination}
                        onChange={(newPage) => {
                            setCurrentPage(newPage);
                            setLoading(true);
                        }}
                        isLoading={loading}
                    />
                    <Button
                        variant='danger'
                        onClick={() => setError('Simulated error')}>
                        Trigger Error
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default UsersView;
