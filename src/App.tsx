import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRouteOther, { PrivateRouteLogin } from './pages/private-route/PrivateRouteLogin';

function App() {
  return (
    // <Login/>
    <Router>
      <Routes>
        <Route element={<PrivateRouteLogin/>}>
          <Route path='/' element={<Login/>}/>
        </Route>
        <Route element={<PrivateRouteOther/>}>
          <Route path='/' element={<></>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
