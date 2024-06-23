import React from 'react';
import { Button } from 'react-bootstrap';

const EatButton = ({ onEat, label }) => {
    return (
        <Button
            variant='success'
            onClick={onEat}
            size='sm'>
            Eat {label}
        </Button>
    );
};

export default EatButton;
