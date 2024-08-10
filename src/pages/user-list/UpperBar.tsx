import '../../css/UserList.css';
import { Col, Row } from "react-bootstrap";
import SearchBar from "../../components/search-bar/SearchBar";
import ListOfStaff from "../../components/button/ListOfStaff";
import UserStatus from "../../components/drop-down/UserStatus";

const UpperBar = () => {
    return (
        <Row className="m-0 p-4 d-flex justify-content-between">
            <ListOfStaff />
            <SearchBar />
            <Col className='m-0 p-0 col-4 flex-column'>
                    <UserStatus />
                    
            </Col>
        </Row>
    );
}

export default UpperBar;