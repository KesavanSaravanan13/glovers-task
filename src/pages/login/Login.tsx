import '../../css/Login.css';
import Logo from '../../assests/Frame 25.svg';
import { Col, Row } from "react-bootstrap";
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <Row className="m-0 p-0 vh-100 login d-flex justify-content-center align-items-center">
            <Col className="m-0 p-3 px-4 px-md-5 col-10 col-sm-6 col-lg-5 col-xl-4 bg-white loginCol"  >
                <Row className="m-0 p-0">
                    <Col className='m-0 p-0 d-flex justify-content-center' xs={12}>
                        <img className='m-0 p-0' src={Logo} alt={'Logo'}/>
                    </Col>
                    <Col className='m-0 p-0 d-flex justify-content-center' xs={12}>
                        <h1 className='m-0 p-0 fs-1'>Glover's</h1>
                    </Col>
                    <Col className='m-0 p-0 d-flex justify-content-center' xs={12}>
                        <p className='m-0 p-0 sBook'>SCOREBOOKS</p>
                    </Col>
                </Row>
                <Row className="m-0 p-4 pt-5 formRow">
                    <LoginForm />
                </Row>
                <Row className="m-0 p-0 pb-4">
                    <p className="m-0 p-0 text-center pt-2">&#169; 2024 EC Frazier & Associates Inc, Inc. All rights reserved</p>
                </Row>
            </Col>
        </Row>
    );

}

export default Login;