import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/TheHeader';
import HomeView from './components/home/HomeView';
import AggrendView from './components/aggrend/AggrendView';
import Users from './components/users/Users';

function App() {
    const [count, setCount] = useState(0);
    const [showAlternate, setShowAlternate] = useState(false);
    const [mealCounts, setMealCounts] = useState({});

    const incrementCounter = () => {
        setCount((prevCount) => prevCount + 1);
        setShowAlternate(count >= 25);
    };

    const resetCounter = () => {
        setCount(0);
        setShowAlternate(false);
    };
    const handleEat = (type, item) => {
        setMealCounts((prevCounts) => ({
            ...prevCounts,
            [type]: {
                ...prevCounts[type],
                [item]: (prevCounts[type]?.[item] || 0) + 1,
            },
        }));
    };

    return (
        <BrowserRouter>
            <Header />
            <Container
                fluid
                className='bg-dark'>
                <Routes>
                    <Route
                        path='/faggot'
                        element={
                            <AggrendView
                                count={count}
                                showAlternate={showAlternate}
                                incrementCounter={incrementCounter}
                                resetCounter={resetCounter}
                                handleEat={handleEat}
                                mealCounts={mealCounts}
                            />
                        }
                    />
                    <Route
                        path='/'
                        element={<HomeView />}
                    />
                    <Route
                        path='/users'
                        element={<Users />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
