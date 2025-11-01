import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import AdminPage from '../pages/adminPage';

const RoutesComponent = (props) => {
    return <Routes>
      <Route
        path='/'
        element={<MainPage />}
      />
      <Route
        path='/admin'
        element={<AdminPage />}
      />

    </Routes>
    
};

export default RoutesComponent;
