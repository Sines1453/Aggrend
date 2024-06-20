import React from 'react';
import { Table } from 'react-bootstrap';

const MealCountTable = ({ mealCounts }) => {
    const rows = Object.entries(mealCounts).flatMap(([type, items]) =>
        Object.entries(items).map(([item, count]) => ({ type, item, count }))
    );

    return (
        <Table
            striped
            bordered
            hover
            variant='dark'
            className='text-white mt-4'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Item</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((item, index) => (
                    <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.item}</td>
                        <td>{item.count}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MealCountTable;
