import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PrivateRouteOther, { PrivateRouteLogin } from './pages/private-route/PrivateRouteLogin';
import List from './pages/side-list/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRouteLogin/>}>
          <Route path='/' element={<Login/>}/>
        </Route>
        <Route element={<PrivateRouteOther/>}>
          <Route path='/:list' element={<List/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
