import '../../css/UserList.css';
import id from '../../assests/id-card.png';
import file from '../../assests/file.png';
import id01 from '../../assests/id-card_grey.png';
import { Col, Dropdown, DropdownToggle, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DropdownFunc = (name: string, alt: string, label: string) => {
    // const navigate = useNavigate();
    // if (alt === 'Logout')
    //     return (
    //         <Dropdown.Item className='p-2 ps-1 m-0 dropItem' onClick={() => {
    //             console.log('click');
    //             sessionStorage.removeItem('token');
    //             navigate('/');
    //         }} >
    //             <Row className=' p-0 m-0 py-1 ps-2 flex-nowrap d-flex align-items-center ' >
    //                 <Col className='col-2 pb-1 m-0 ms-1 p-0'><img src={name} width={'20px'} height={'20px'} className='m-0 p-0' alt={alt} /></Col>
    //                 <Col className='col-10 m-0 p-0 ps-1'>{label}</Col>
    //             </Row>
    //         </Dropdown.Item>
    //     );
    return (
        <Dropdown.Item href="" className='p-2 ps-1 m-0 ' >
            <Row className=' p-0 pb-1 ps-2 py-1 m-0 flex-wrap d-flex align-items-center '>
                <Col className='col-2 m-0 p-0'><img src={name} width={'20px'} height={'20px'} className='m-0 p-0' alt={alt} /></Col>
                <Col className='col-10 m-0 p-0 llb w-auto  fs-5'>{label}</Col>
            </Row>
        </Dropdown.Item>
    );
}

const UserStatus = () =>{
    return(
        <Dropdown className='m-0 p-0 userStatusDrop d-flex justify-content-end w-auto'>
                <DropdownToggle variant='bg-light' className='m-0 p-2 d-flex px-3'>
                        <img src={id} className=' m-0 p-0 pe-2 w-auto ' alt='Profile' width={'20px'} height={'24px'}></img>
                        <Col className='m-0 p-0 fs-5 w-auto text-white'>User Status</Col>
                </DropdownToggle>
                <Dropdown.Menu className='p-0 m-0 mt-2'>
                    {DropdownFunc(id01, 'all user', 'All')}
                    {DropdownFunc(id01, 'Activated Users', 'Activated Users')}
                    {DropdownFunc(id01, 'Deactivated Users', 'Deactivated Users')}
                </Dropdown.Menu>
                <Col className='btn col-2 m-0 p-2 d-flex exReport'>
                        <img src={file} className=' m-0 p-0 pe-2 w-auto ' alt='Profile' width={'20px'} height={'24px'}></img>
                        <Col className='col-5 m-0 p-0 fs-5 w-auto text-white'>Export Report</Col>
                    </Col>
            </Dropdown>
    );
}

export default UserStatus;