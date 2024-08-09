import '../../css/Login.css';
import Logo from '../../assests/logo.png';
import { Col, Row } from "react-bootstrap";
import LoginForm from './LoginForm';
import { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        sessionStorage.removeItem('token');
    }, [])
    return (
        <Row className="m-0 p-0 vh-100 login d-flex justify-content-center align-items-center">
            <Col className="m-0 p-3 px-4 p-md-5 col-11 col-sm-6 col-xl-4 loginCol"  >
                <Row className="m-0 p-0">
                    <Col className='m-0 p-0 text-center'>
                        <img className='m-0 p-0 logoImg' src={Logo} alt={'Logo'} />
                    </Col>
                </Row>
                <Row className="m-0 mt-3 formRow">
                    <LoginForm />
                </Row>
                <p className="p-0 m-0 my-3 text-center">&#169; 2024 EC Frazier & Associates Inc, Inc. All rights reserved</p>
            </Col>
        </Row>
    );

}

export default Login;