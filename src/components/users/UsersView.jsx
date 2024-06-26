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

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

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
                                totalItems={users.length}
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
