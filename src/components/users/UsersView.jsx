import React, { useState, useEffect, useCallback } from 'react';
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
    const [retryCount, setRetryCount] = useState(0);

    const fetchUsers = useCallback(async (page, size, retries = 3) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${size}`
            );
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setUsers(data);
            setTotalItems(Number(response.headers.get('X-Total-Count') || '0'));
            setError(null);
            setRetryCount(0);
        } catch (err) {
            if (retries > 0) {
                setTimeout(() => fetchUsers(page, size, retries - 1), 1000);
                setRetryCount((prev) => prev + 1);
            } else {
                setError(`${err.message}. Retry failed after 3 attempts.`);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers(currentPage, pageSize);
    }, [currentPage, pageSize, fetchUsers]);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Users</h1>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && (
                        <>
                            <UserTable users={users} />
                            <Form.Select
                                className='mb-3'
                                value={pageSize}
                                onChange={(e) =>
                                    setPageSize(Number(e.target.value))
                                }>
                                {PAGE_SIZE_OPTIONS.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Form.Select>
                            <Pagination
                                currentPage={currentPage}
                                pageSize={pageSize}
                                totalItems={totalItems}
                                onChange={setCurrentPage}
                            />
                            <Button
                                variant='danger'
                                onClick={() => setError('Simulated error')}>
                                Trigger Error
                            </Button>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default UsersView;
