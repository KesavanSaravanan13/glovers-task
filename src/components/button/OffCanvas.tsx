import Logo from '../../assests/logo.png';
import listIcon from '../../assests/list.png';
import { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import '../../css/SideBar.css';
import { SideBarList } from "../../constants/ConstantValues";
import { Link, useParams } from "react-router-dom";

const OffCanvas = () => {
    const{list}=useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='m-0 p-0 dotBtn d-flex flex-fill'>
            <button className='p-2 d-lg-none m-0 h-auto' onClick={handleShow}>
                <img className='m-0 p-0'  src={listIcon} alt='dot' width={'24px'} height={'24px'}/>
            </button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Body>
                    <Col className="m-0 p-0 col-12 d-block">
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
                                        <Link to={values.path} className='text-decoration-none text-black m-0 p-0 col-12' key={index}>
                                            <Row className={`p-0 py-3 m-2 mt-0 d-flex align-items-center flex-fill ${values.path.slice(1) === list ? 'sideList activeSideBar' : 'sideList'}`}>
                                                <img src={values.image} width={'14px'} height={'18px'} alt={values.alt} className='m-0 p-0 ps-4 w-auto px-3' />
                                                <Col className='m-0 p-0 fs-5'>{values.title}</Col>
                                            </Row>
                                        </Link>
                                    );
                                })
                            }
                        </Row>
                    </Col>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default OffCanvas;