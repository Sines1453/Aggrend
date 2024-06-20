import React from 'react';
import { Table } from 'react-bootstrap';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import AggrendFoodMenu from './AggrendFoodMenu';

const MenuTable = ({ onEat }) => {
    const data = AggrendFoodMenu();
    const handleEat = (type, item) => {
        if (type === 'all') {
            onEat('entree', item.entree);
            onEat('drink', item.drink);
            onEat('dessert', item.dessert);
            onEat('dipping Sauce', item.dippingSauce);
        } else {
            onEat(type, item);
        }
    };

    return (
        <Table
            striped
            bordered
            hover
            variant='dark'
            className='text-white text-center'>
            <TableHeader />
            <tbody>
                {data.map((item, index) => (
                    <TableRows
                        key={index}
                        item={item}
                        onEat={handleEat}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default MenuTable;
