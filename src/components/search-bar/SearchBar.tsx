import close from '../../assests/close.png';
import search from '../../assests/search-interface-symbol.png';
import { Col, Row } from "react-bootstrap";


export type UpperBarProps = {
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar:React.FC<UpperBarProps> = ({handleKeyDown,handleChange}) => {
    return (
        <form className='m-0 p-0 w-auto d-flex flex-fill'>
            <Row className='m-0 p-0 px-3 me-0 me-md-3 flex-fill d-flex justify-content-between align-items-center searchBar'>
                <Col className='m-0 p-0'>
                    <button className='col-1 m-0 p-0 pb-1'>
                        <img src={search} className=" m-0 p-0" width="18px" height="15px" alt="" />
                    </button>
                    <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} className='col-8 m-0 p-2 ps-3' placeholder='Search...' />
                </Col>
                <Col className='m-0 p-0 col-1 w-auto pe-2'>
                    <button className='col-1 m-0 p-0 pb-1'>
                        <img src={close} className=" m-0 p-0" width="12px" height="12px" alt="" />
                    </button>
                </Col>
            </Row>
        </form>
    );
}

export default SearchBar;