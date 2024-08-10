import '../../css/UserList.css';
import { Col, Row } from "react-bootstrap";
import DropDown from "../../components/drop-down/DropDown";
import UpperBar from './UpperBar';
import UserDataTable from '../table/UserDataTable';


const UserList = () => {
    return (
        <Col className="m-0 p-0 col-9 flex-fill">
            <DropDown />
            <Row className="m-0 p-0 pe-4">
                <hr className="m-0 p-0" />
                <div className="m-0 fs-4 p-4">Users</div>
            </Row>
            <Row className="m-0 p-0 pe-4">
                <Col className="m-0 p-0 ms-3 box">
                    <UpperBar/>
                    <Row className="m-0 p-0 mx-4">
                        <hr className="m-0 p-0" />
                    </Row>
                    <Row className="m-0 p-4">
                        <UserDataTable/>
                    </Row>
                    <Row className="m-0 p-0">
                        <Col className='m-0 p-0'>
                        </Col>
                        <Col className='m-0 p-0'>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default UserList;