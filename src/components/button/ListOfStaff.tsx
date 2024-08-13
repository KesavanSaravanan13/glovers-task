import '../../css/UserList.css';
import { useState } from "react";
import { Col } from "react-bootstrap";

type UpperBarProps = {
    setListStaff: (value: string) => void;
    listStaff: string;
};

const ListOfStaff = ({ listStaff, setListStaff }: UpperBarProps) => {
    const [coach, setCoach] = useState(true);
    const [staff, setStaff] = useState(false);
    const [players, setPlayers] = useState(false);
    const [fans, setFans] = useState(false);
    const [teams, setTeams] = useState(false);
    const stafflist = [
        { name: 'Coach', isClicked: coach },
        { name: 'Staff', isClicked: staff },
        { name: 'Players', isClicked: players },
        { name: 'Fans', isClicked: fans },
        { name: 'Teams', isClicked: teams },
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
                setStaff(true);
                setCoach(false);
                setPlayers(false);
                setFans(false);
                break;
            case 'Players':
                setStaff(false);
                setCoach(false);
                setFans(false);
                setPlayers(true);
                break;
            case 'Fans':
                setStaff(false);
                setCoach(false);
                setPlayers(false);
                setFans(true);
                break;
            case 'Teams':
                setStaff(false);
                setCoach(false);
                setPlayers(false);
                setFans(false);
                setTeams(true);
                break;
        }
    }
    return (
        <Col className="m-0 p-0 col-1 col-md-7 col-xl-1 w-auto" >
            {
                listStaff === 'Teams' ? (
                    <button className={`m-0 p-0 mx-3 btnClc fs-5 activeBtn`} onClick={() => {
                        setIsClicked(stafflist[4].name);
                        setListStaff(stafflist[4].name);
                    }}>{`${stafflist[4].name} List`}</button>
                ) : (
                    stafflist.map((values, index) => {
                        return (
                            values.name !== 'Teams' &&
                            (<button key={index} className={`m-0 p-0 mx-3 btnClc fs-5 ${values.isClicked ? `activeBtn` : ''}`} onClick={() => {
                                setIsClicked(values.name);
                                setListStaff(values.name);
                            }}>{values.name}</button>)
                        );
                    })
                )
            }
        </Col>

    );
}

export default ListOfStaff;