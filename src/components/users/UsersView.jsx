import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import UserTable from './UserTable';
import Pagination from './Pagination';

const UsersView = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const PAGE_SIZE_OPTIONS = [5, 10, 20];
    const [totalItems, setTotalItems] = useState(0);

    const fetchUsers = async (page, size) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${size}`
            );
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setUsers(data);
            setTotalItems(Number(response.headers.get('X-Total-Count') || '0'));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage, pageSize);
    }, [currentPage, pageSize]);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Users</h1>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && (
                        <>
                            <UserTable
                                users={users.slice(
                                    (currentPage - 1) * pageSize,
                                    currentPage * pageSize
                                )}
                            />
                            <Form.Select
                                className='mb-3'
                                value={pageSize}
                                onChange={(e) =>
                                    setPageSize(Number(e.target.value))
                                }>
                                {PAGE_SIZE_OPTIONS.map((size) => (
                                    <option
                                        key={size}
                                        value={size}>
                                        {size} per page{' '}
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
