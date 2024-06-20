import React from 'react';

const AggyImage = ({ size }) => {
    const initialSize = 50;
    const imageSize = initialSize + size * 10;
    return (
        <img
            src='aggy.png' //
            alt='Aggy'
            style={{ width: imageSize, height: imageSize }}
        />
    );
};

export default AggyImage;
