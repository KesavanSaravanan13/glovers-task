import '../../css/UserList.css';
import { Col, Row } from "react-bootstrap";
import SearchBar from "../../components/search-bar/SearchBar";
import ListOfStaff from "../../components/button/ListOfStaff";
import UserStatus from "../../components/drop-down/UserStatus";
import React from 'react';


type UpperBarProps = {
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setUserStatus:(value:string)=>void;
};

const UpperBar = ({setUserStatus,handleKeyDown,handleChange}:UpperBarProps) => {
    return (
        <Row className="m-0 p-4 d-flex justify-content-between">
            <ListOfStaff />
            <SearchBar handleKeyDown={handleKeyDown} handleChange={handleChange} />
            <Col className='m-0 p-0 col-4 flex-column'>
                <UserStatus setUserStatus={setUserStatus} />
            </Col>
        </Row>
    );
}

export default UpperBar;