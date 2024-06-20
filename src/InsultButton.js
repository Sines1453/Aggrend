import React from 'react';
import logo from './logo.svg';

function InsultButton({ onClick }) {
    return (
        <div onClick={onClick}>
            <img
                src={logo}
                className='App-logo'
                alt='logo'
                style={{
                    width: '200px',
                    height: '200px',
                }}
            />
        </div>
    );
}

export default InsultButton;
