import React, { useEffect } from 'react';

const Nuke = ({ resetCounter }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            resetCounter();
        }, 5000);
        return () => clearTimeout(timer);
    });
    return (
        <img
            src='/nuclearexplosion.gif' //
            alt='Alternate'
        />
    );
};

export default Nuke;
