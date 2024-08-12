
import green from '../../assests/green_box.svg';
import red from '../../assests/red_box.svg';
import { Col, Row } from "react-bootstrap";
import DropDown from "../drop-down/DropDown";
import UpperBar from "../../pages/user-list/UpperBar";
import UserDataTable from "../../pages/table/UserDataTable";
import { useEffect, useRef, useState } from "react";
import Pagination from '../pagination/Pagination';


type DataItem = {
    first_name: string;
    last_name: string;
    email: string;
    status: boolean;
    is_subscribe: boolean;
    customeid: string;
};

type ColumnTempType = {
    listStaff: string;
    dataFromStore: DataItem[];
    loading: boolean;
    setLoading: (value: boolean) => void;
    setListStaff: (value: string) => void;
}


const ColumnTemplate = ({ listStaff, dataFromStore, loading, setLoading, setListStaff }: ColumnTempType) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [recordsPerPage, setRecordsPerPage] = useState<number>(10);


    const [buttonvalue, setButtonValue] = useState<string>('Up');
    const [dataAfterUserStatus, setDataAfterUserStatus] = useState<DataItem[]>([]);
    const [dataAfterSort, setDataAfterSort] = useState<DataItem[]>([]);
    const [data, setData] = useState<DataItem[]>([]);
    const [duplicateData, setDuplicateData] = useState<DataItem[]>([]);
    const typingTime = useRef<NodeJS.Timeout | null>(null);
    const [userStatus, setUserStatus] = useState<string>('All');

    const searchFilter = (newVal: string) => {
        setLoading(false);
        if (Array.isArray(data)) {
            if (newVal.trim().length !== 0) {
                const filteredData = duplicateData.filter((values) =>
                    values.first_name.toLowerCase().includes(newVal.toLowerCase())
                );
                console.log("Filter : ", filteredData);
                setData(filteredData);
            } else {
                setData(duplicateData);
            }
        } else {
            console.error('Data is not an array:', data);
        }
    };

    useEffect(() => {
        if (dataFromStore) {
            const dataArray = dataFromStore as DataItem[];
            if (userStatus === 'Activated') {
                setDataAfterUserStatus(
                    dataArray.filter((value) => value.status === true)
                );
            } else if (userStatus === 'Deactivated') {
                setDataAfterUserStatus(
                    dataArray.filter((value) => value.status === false)
                );
            } else {
                setDataAfterUserStatus(dataArray);
            }
        } else {
            setDataAfterUserStatus([]);
        }
    }, [userStatus, dataFromStore]);

    useEffect(() => {
        if (Array.isArray(dataAfterUserStatus)) {
            const sortedData = buttonvalue === 'Up'
                ? [...dataAfterUserStatus].sort((a, b) =>
                    a.first_name.localeCompare(b.first_name)
                )
                : [...dataAfterUserStatus].sort((a, b) =>
                    b.first_name.localeCompare(a.first_name)
                );
            setDataAfterSort(sortedData);
        } else {
            console.error('dataAfterUserStatus is not an array:', dataAfterUserStatus);
        }
    }, [buttonvalue, dataAfterUserStatus]);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchFilter(e.currentTarget.value);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        if (typingTime.current) {
            clearTimeout(typingTime.current);
        }
        setLoading(true);
        typingTime.current = setTimeout(() => {
            searchFilter(newVal);
        }, 1000);
    };

    useEffect(() => {
        if (Array.isArray(dataAfterSort)) {
            setDuplicateData(dataAfterSort);
            setData(dataAfterSort);
        } else {
            console.error('dataAfterSort is not an array:', dataAfterSort);
        }
    }, [dataAfterSort]);

    const indexOfLastRecord: number = currentPage * recordsPerPage;
    const indexOfFirstRecord: number = indexOfLastRecord - recordsPerPage;
    const currentRecords: DataItem[] = Array.isArray(data) ? data.slice(indexOfFirstRecord, indexOfLastRecord) : [];
    const nPages: number = Array.isArray(data) ? Math.ceil(data.length / recordsPerPage) : 0;

    return (
        <Col className="m-0 p-0 col-9 flex-fill">
            <DropDown />
            <Row className="m-0 p-0 pe-4">
                <hr className="m-0 p-0" />
                <div className="m-0 fs-4 p-4">Users</div>
            </Row>
            <Row className="m-0 p-0 pe-4">
                <Col className="m-0 p-0 ms-3 box">
                    <UpperBar setListStaff={setListStaff} setUserStatus={setUserStatus} handleKeyDown={handleKeyDown} handleChange={handleChange} />
                    <Row className="m-0 p-0 mx-4">
                        <hr className="m-0 p-0" />
                    </Row>
                    <Row className="m-0 p-4">
                        <UserDataTable
                            listStaff={listStaff}
                            data={currentRecords}
                            buttonvalue={buttonvalue}
                            setButtonValue={setButtonValue}
                            currentPage={currentPage}
                            recordsPerPage={recordsPerPage}
                            loading={loading}
                        />
                    </Row>
                    <Row className="m-0 p-4">
                        <Col className='m-0 p-0 col-2 d-flex align-items-center flex-fill w-auto'>
                            <Row className='m-0 p-0 d-flex justify-content-between gap-3'>
                                <Col className='m-0 p-0 col-6 d-flex align-items-center w-auto'>
                                    <img className='m-0 p-0 w-auto' src={green} alt='Activated' width={'10px'} height={'10px'} />
                                    <div className='m-0 p-0 ps-2 w-auto'>Activated</div>
                                </Col>
                                <Col className='m-0 p-0 col-6 d-flex align-items-center w-auto'>
                                    <img className='m-0 p-0 w-auto' src={red} alt='Deactivated' width={'10px'} height={'10px'} />
                                    <div className='m-0 p-0 ps-2 w-auto'>Deactivated</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='m-0 p-0'>
                            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default ColumnTemplate;