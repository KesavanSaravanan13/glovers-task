import '../../css/UserList.css';
import id from '../../assests/id-card.png';
import file from '../../assests/file.png';
import id01 from '../../assests/id-card_grey.png';
import { Col, Dropdown, DropdownToggle, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
type DropDownType = {
    name: string;
    alt: string;
    label: string;
    setUserStatus: (value: string) => void;
}
const DropdownFunc = ({ name, alt, label, setUserStatus }: DropDownType) => {
    return (
        <Dropdown.Item href="" className='p-2 ps-1 m-0 '
            onClick={() => {
                setUserStatus(alt);
            }}
        >
            <Row className=' p-0 pb-1 ps-2 py-1 m-0 flex-wrap d-flex align-items-center '>
                <Col className='col-2 m-0 p-0'><img src={name} width={'20px'} height={'20px'} className='m-0 p-0' alt={alt} /></Col>
                <Col className='col-10 m-0 p-0 llb w-auto  fs-5'>{label}</Col>
            </Row>
        </Dropdown.Item>
    );
}

export type UserStatusProps = {
    setUserStatus: (value: string) => void;
    listStaff: string;
};

const UserStatus = ({ listStaff, setUserStatus }: UserStatusProps) => {
    return (
        <Dropdown className={`m-0 p-0 pt-4 pt-md-0 userStatusDrop d-flex flex-fill justify-content-between justify-content-md-end w-auto`}>
            {
                listStaff !== 'Teams' &&
                <>
                    <DropdownToggle variant='bg-light' className='m-0 p-2 d-flex px-2 px-md-3 me-0 '>
                        <img src={id} className=' m-0 p-0 pe-2 w-auto ' alt='Profile' width={'20px'} height={'24px'}></img>
                        <Col className='m-0 p-0 fs-5 w-auto text-white'>User Status</Col>
                    </DropdownToggle>
                    <Dropdown.Menu className='p-0 m-0 mt-2'>
                        <DropdownFunc name={id01} alt={'All'} label={'All'} setUserStatus={setUserStatus} />
                        <DropdownFunc name={id01} alt={'Activated'} label={'Activated Users'} setUserStatus={setUserStatus} />
                        <DropdownFunc name={id01} alt={'Deactivated'} label={'Deactivated Users'} setUserStatus={setUserStatus} />
                    </Dropdown.Menu>
                </>
            }
            <Col className='btn col-2 m-0 p-2 me-md-3 d-flex exReport'>
                <img src={file} className=' m-0 p-0 pe-2 w-auto ' alt='Profile' width={'20px'} height={'24px'}></img>
                <Col className='col-5 m-0 p-0 fs-5 w-auto text-white'>Export Report</Col>
            </Col>
        </Dropdown>
    );
}

export default UserStatus;