import '../../css/UserList.css';
import { Col, Row } from "react-bootstrap";
import SearchBar from "../../components/search-bar/SearchBar";
import ListOfStaff from "../../components/button/ListOfStaff";
import UserStatus from "../../components/drop-down/UserStatus";
import React from 'react';


type UpperBarProps = {
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setUserStatus: (value: string) => void;
    setListStaff: (value: string) => void;
    listStaff: string;
};

const UpperBar = ({ listStaff, setListStaff, setUserStatus, handleKeyDown, handleChange }: UpperBarProps) => {
    return (
        <Row className="m-0 p-4 px-2 d-flex justify-content-between flex-wrap">
            <ListOfStaff listStaff={listStaff} setListStaff={setListStaff} />
            <Col className='m-0 p-0 col-md-12 mt-4 mt-xl-0 col-xl-7 flex-column'>
                <div className='row m-0 p-0 d-flex justify-content-between'>
                    <SearchBar handleKeyDown={handleKeyDown} handleChange={handleChange} />
                    <UserStatus listStaff={listStaff} setUserStatus={setUserStatus} />
                </div>
            </Col>
        </Row>
    );
}

export default UpperBar;