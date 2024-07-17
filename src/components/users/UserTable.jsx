import React from 'react';
import { Table } from 'react-bootstrap';

const UserTable = ({ users, loading, error }) => {
    return (
        <Table
            striped
            bordered
            hover
            variant='dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {loading && (
                    <tr>
                        <td
                            colSpan='4'
                            className='text-center'>
                            Loading...
                        </td>
                    </tr>
                )}
                {error && (
                    <tr>
                        <td
                            colSpan='4'
                            className='text-center text-danger'>
                            Error: {error}
                        </td>
                    </tr>
                )}
                {!loading && !error && users.length === 0 && (
                    <tr>
                        <td
                            colSpan='4'
                            className='text-center'>
                            No users available.
                        </td>
                    </tr>
                )}
                {!loading &&
                    !error &&
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                {user.firstName} {user.lastName}
                            </td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};

export default UserTable;
