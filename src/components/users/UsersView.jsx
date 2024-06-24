import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import UserTable from './UserTable';
import Pagination from './Pagination';

const UsersView = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const fetchUsers = async () => {
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
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Container>
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
                        onChange={(e) => setPageSize(Number(e.target.value))}>
                        <option value='5'>5 per page</option>
                        <option value='10'>10 per page</option>
                        <option value='20'>20 per page</option>
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
        </Container>
    );
};

export default UsersView;
