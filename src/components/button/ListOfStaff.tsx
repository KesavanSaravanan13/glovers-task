import { useState } from "react";
import { Col } from "react-bootstrap";

const ListOfStaff = () => {  
    const [coach, setCoach] = useState(true);
    const [staff, setStaff] = useState(false);
    const [players, setPlayers] = useState(false);
    const [fans, setFans] = useState(false);
    const stafflist = [
        { name: 'Coach', isClicked: coach },
        { name: 'Staff', isClicked: staff },
        { name: 'Players', isClicked: players },
        { name: 'Fans', isClicked: fans },
    ]
    const setIsClicked = (name: string) => {
        switch (name) {
            case 'Coach':
                setCoach(true);
                setStaff(false);
                setPlayers(false);
                setFans(false);
                break;
            case 'Staff':
                setStaff(!staff);
                setCoach(false);
                setPlayers(false);
                setFans(false);
                break;
            case 'Players':
                setStaff(false);
                setCoach(false);
                setFans(false);
                setPlayers(!players);
                break;
            case 'Fans':
                setStaff(false);
                setCoach(false);
                setPlayers(false);
                setFans(!fans);
                break;
        }
    }
    return(
        <Col className="m-0 p-0 col-1 w-auto" >
            {
                stafflist.map((values, index) => {
                    return (
                        <button key={index} className={`m-0 p-0 mx-3 btnClc fs-5 ${values.isClicked ? `activeBtn` : ''}`} onClick={() => { setIsClicked(values.name) }}>{values.name}</button>
                    );
                })
            }
        </Col>

    );
}

export default ListOfStaff;