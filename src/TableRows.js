import React from 'react';
import EatButton from './EatButton';

const TableRows = ({ item, onEat }) => {
    return (
        <tr>
            <td>
                {item.entree}
                <EatButton
                    onEat={() => onEat('entree', item.entree)}
                    label='Entree'
                />
            </td>
            <td>
                {item.drink}
                <EatButton
                    onEat={() => onEat('drink', item.drink)}
                    label='Drink'
                />
            </td>
            <td>
                {item.dessert}
                <EatButton
                    onEat={() => onEat('dessert', item.dessert)}
                    label='Dessert'
                />
            </td>
            <td>
                {item.dippingSauce}
                <EatButton
                    onEat={() => onEat('dippingSauce', item.dippingSauce)}
                    label='Sauce'
                />
            </td>
            <td>
                <EatButton
                    onEat={() => onEat('all', item)}
                    label='All'
                />
            </td>
        </tr>
    );
};

export default TableRows;
