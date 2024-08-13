import '../../css/SideBar.css';
import Logo from '../../assests/logo.png';
import { Link, useParams } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import { SideBarList } from '../../constants/ConstantValues';
import React from 'react';

interface ListSideBar {
    message?: string;
}
const SideBar: React.FC<ListSideBar> = ({ message }) => {

    return (
        <Col className="m-0 p-0 col-2 sideBar d-none d-lg-block">
            <Row className="m-0 p-0 pt-5">
                <Col className='m-0 p-0 text-center'>
                    <img className='m-0 p-0 logoImg' src={Logo} alt={'Logo'} />
                </Col>
            </Row>
            <Row className='m-0 p-5 ps-4 fs-5 text-secondary text-opacity-1'>MAIN MENU</Row>
            <Row className='m-0 p-0 '>
                {
                    SideBarList.map((values, index) => {
                        return (
                            <Link to={values.path} className='text-decoration-none text-black m-0 p-0 col-12'  key={index}>
                                <Row className={`p-0 py-3 m-2 mt-0 d-flex align-items-center flex-fill ${values.path.slice(1) === message ? 'sideList activeSideBar' : 'sideList'}`}>
                                    <img src={values.image} width={'14px'} height={'18px'} alt={values.alt} className='m-0 p-0 ps-4 w-auto px-3' />
                                    <Col className='m-0 p-0 fs-5'>{values.title}</Col>
                                </Row>
                            </Link>
                        );
                    })
                }
            </Row>
        </Col>
    );
}


export default SideBar;