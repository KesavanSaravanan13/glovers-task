import '../../css/UserList.css';
import dollar from '../../assests/coin.png';
import teams from '../../assests/group.png';
import user from '../../assests/user.png';
import { Col, Dropdown, DropdownToggle, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DropdownFunc = (name: string, alt: string, label: string) => {
    const navigate = useNavigate();
    if (alt === 'Logout')
        return (
            <Dropdown.Item className='p-2 ps-1 m-0 dropItem' onClick={() => {
                console.log('click');
                sessionStorage.removeItem('token');
                navigate('/');
            }} >
                <Row className=' p-0 m-0 py-1 ps-2 flex-nowrap d-flex align-items-center ' >
                    <Col className='col-2 pb-1 m-0 ms-1 p-0'><img src={name} width={'20px'} height={'20px'} className='m-0 p-0' alt={alt} /></Col>
                    <Col className='col-10 m-0 p-0 ps-1'>{label}</Col>
                </Row>
            </Dropdown.Item>
        );
    return (
        <Dropdown.Item href="" className='p-2 ps-1 m-0 dropItem' >
            <Row className=' p-0 pb-1 ps-2 py-1 m-0 flex-nowrap d-flex align-items-center '>
                <Col className='col-2 m-0 ms-1 p-0'><img src={name} width={'20px'} height={'20px'} className='m-0 p-0' alt={alt} /></Col>
                <Col className='col-10 m-0 p-0 ps-1'>{label}</Col>
            </Row>
        </Dropdown.Item>
    );
}

const DropDown = () =>{
    return(
        <Dropdown className='m-0 p-0 py-4 d-flex justify-content-end pe-4'>
                <DropdownToggle variant='bg-light' className='row m-0 p-2 px-3 dropdown d-flex justify-content-center align-items-center gap-2 '>
                        <img src={user} className='m-0 p-0 w-auto' alt='Profile' width={'14px'} height={'18px'}></img>
                        <Col className='m-0 p-0 ps-2 fs-5'>Admin Glover's</Col>
                </DropdownToggle>
                <Dropdown.Menu className='p-0 m-0 mt-2'>
                    {DropdownFunc(user, 'Edit Profile', 'Edit Profile')}
                    {DropdownFunc(teams, 'Change Password', 'Change Password')}
                    {DropdownFunc(dollar, 'Logout', 'Log out')}
                </Dropdown.Menu>
            </Dropdown>
    );
}

export default DropDown;