import React from "react";
import '../../css/Login.css';
import { Col } from "react-bootstrap";

interface LoginButtonTypes {
    message: string;
}

const LoginButton: React.FC<LoginButtonTypes> = ({ message }) => {
    if (message === 'clicked') {
        return (
            <Col className='m-0 p-0 pt-3' xs={12}>
                <div className="spinner-border custom-spinner text-white" />
                <button type='submit' className='m-0 col-12'>Loggin..</button>
            </Col>
        );
    }
    return (
        <Col className='m-0 p-0 pt-3' xs={12}>
            <button type='submit' className='m-0 col-12'>Login</button>
        </Col>
    );
}

export default LoginButton;