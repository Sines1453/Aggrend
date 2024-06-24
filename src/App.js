import { Container } from 'react-bootstrap';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/TheHeader';
import HomeView from './components/home/HomeView';
import AggrendView from './components/aggrend/AggrendView';
import UsersView from './components/users/UsersView';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Container
                fluid
                className='bg-dark'>
                <Routes>
                    <Route
                        path='/faggot'
                        element={<AggrendView />}
                    />
                    <Route
                        path='/'
                        element={<HomeView />}
                    />
                    <Route
                        path='/users'
                        element={<UsersView />}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
