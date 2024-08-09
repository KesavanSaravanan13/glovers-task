import { Col, Row } from "react-bootstrap";
import SideBar from "../../components/side-bar/SideBar";
import { useParams } from "react-router-dom";
import UserList from "../user-list/UserList";

const List = () => {

    const { list } = useParams();
    let component;
    switch (list) {
        case 'userslist':
            component = (<UserList/>)
            break;
        case 'teamslist':
            component = (<Col className="m-0 p-0 col-9 flex-fill">teamslist</Col>)
            break;
        case 'dashboard':
            component = (<Col className="m-0 p-0 col-9 flex-fill fs-3 fw-semibold d-flex align-items-center justify-content-center">dashboard's yet to develop</Col>)
            break;
        case 'eventslist':
            component = (<Col className="m-0 p-0 col-9 flex-fill fs-3 fw-semibold d-flex align-items-center justify-content-center">eventslist's yet to develop</Col>)
            break;
        case 'seasons':
            component = (<Col className="m-0 p-0 col-9 flex-fill fs-3 fw-semibold d-flex align-items-center justify-content-center">season's yet to develop</Col>)
            break;
        case 'subscriptionplans':
            component = (<Col className="m-0 p-0 col-9 flex-fill fs-3 fw-semibold d-flex align-items-center justify-content-center">subscriptionplan's yet to develop</Col>)
            break;
        case 'settings':
            component = (<Col className="m-0 p-0 col-9 flex-fill fs-3 fw-semibold d-flex align-items-center justify-content-center">setting's yet to develop</Col>)
            break;

    }

    return (
        <Row className="m-0 p-0 vh-100 d-flex justify-content-center flex-wrap">
            <SideBar message={list} />
            {component}
        </Row>
    );
}

export default List;