import { useState } from "react";
import { Col, Row } from "react-bootstrap";


const UpperBar = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const stafflist = [
        { name: 'Coach' },
        { name: 'Staff' },
        { name: 'Players' },
        { name: 'Fans' }
    ]

    return (
        <Row className="m-0 p-5">
            {
                stafflist.map((values,index) => {
                    return (
                        <Col className="m-0 p-0 px-3 col-1 w-auto" key={index}>
                            <button className={`m-0 p-0 btnClc fs-5 ${isClicked ? `activeBtn${index}` : ''}`} onClick={() => { setIsClicked(!isClicked) }}>{values.name}</button>
                        </Col>
                    );
                })
            }
        </Row>
    );
}

export default UpperBar;