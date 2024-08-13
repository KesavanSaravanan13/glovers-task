import React, { useEffect, useState } from 'react';
import '../../css/Table.css';
import { Table } from "react-bootstrap";
import { useGetDataQuery } from '../../Redux/apiSlice';
import Td from '../../components/table/Td';
import { Link } from 'react-router-dom';
import TdTeam from '../../components/table/TdTeam';

interface UserDataType {
    first_name: string,
    last_name: string,
    email: string,
    status: boolean,
    is_subscribe: boolean,
    customeid: string,
    team_name: string;
    address: string;
    age_value: string;
    season_name: string;
    team_type: string;
}

interface UserType {
    listStaff: string;
    data: UserDataType[];
    currentPage: number;
    recordsPerPage: number;
    loading: boolean;
    buttonvalue: string;
    setButtonValue: (value: string) => void;
}

type TdValueType = {
    colValue: string;
    label: string;
    type: string;
}

const UserDataTable: React.FC<UserType> = ({ listStaff, data, currentPage, recordsPerPage, loading, buttonvalue, setButtonValue }) => {
    const tdValueCoach: TdValueType[] = [
        { colValue: 'col-1', label: 'S.No', type: 'text', },
        { colValue: 'col-1', label: 'Unique Id', type: 'text', },
        { colValue: 'col-1 ', label: 'F Name', type: 'date', },
        { colValue: 'col-1 ', label: 'L Name', type: 'text', },
        { colValue: 'col-3', label: 'Email', type: 'text', },
        { colValue: 'col-2 ', label: 'Subscription Status', type: 'text', },
        { colValue: 'col-2 ', label: 'Team Details', type: 'text', },
    ];
    const tdValueStaff: TdValueType[] = [
        { colValue: 'col-1', label: 'S.No', type: 'text', },
        { colValue: 'col-1', label: 'Unique Id', type: 'text', },
        { colValue: 'col-1 ', label: 'F Name', type: 'date', },
        { colValue: 'col-1 ', label: 'L Name', type: 'text', },
        { colValue: 'col-3', label: 'Email', type: 'text', },
        { colValue: 'col-2 ', label: 'Team Details', type: 'text', },
    ]
    const tdValueTeams: TdValueType[] = [
        { colValue: 'snoTeam', label: 'S.No', type: 'text', },
        { colValue: 'col-1', label: 'Team Name', type: 'text', },
        { colValue: 'col-1 ', label: 'Team Type', type: 'date', },
        { colValue: 'col-1 ', label: 'Age Group', type: 'text', },
        { colValue: 'col-3', label: 'Season', type: 'text', },
        { colValue: 'col-2 ', label: 'Location', type: 'text', },
    ]
    const [tdValue, setTdvalue] = useState<TdValueType[]>([]);
    useEffect(() => {
        if (listStaff === 'Coach') {
            setTdvalue(tdValueCoach);
        } else if (listStaff === 'Teams') {
            setTdvalue(tdValueTeams);
        }else{
            setTdvalue(tdValueStaff);
        }
    }, [listStaff]);

    return (
        <Table className="m-0 p-0 userTable">
            {
                loading ? (
                    <>
                        <thead className="m-0 p-0">
                            <tr>
                                <td colSpan={7} className="text-center ">
                                    <div className="placeholder col-12 py-5 loadColumn" />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3} className="">
                                    <div className="placeholder col-11 ps-0 py-5 mt-5 me-4 loadColumnBelow" />
                                </td>
                                <td colSpan={4} className="text-center ">
                                    <div className="placeholder col-12 py-5 mt-5 loadColumnBelow" />
                                </td>
                            </tr>
                        </tbody>
                    </>
                ) : (
                    <>
                        <thead className="m-0 p-0">
                            <tr className="m-0 p-0">
                                {listStaff === 'Teams' ? (
                                    tdValue.map((value: TdValueType, index: number) => (
                                        value.label === 'Team Name' ? (
                                            <th key={index} className={`m-0 p-1 fw-semibold fs-5 ${value.colValue}`}>
                                                <button className='m-0 p-0 iconBtn' onClick={() => {
                                                    buttonvalue === 'Up' ? setButtonValue('Down') : setButtonValue('Up');
                                                }}>
                                                    <i className={buttonvalue === 'Up' ? `bi bi-arrow-up fs-5` : 'bi bi-arrow-down fs-5 '} ></i>
                                                </button>
                                                {value.label}
                                            </th>
                                        ) : (
                                            <th key={index} className={`m-0 p-1 fw-semibold fs-5 ${value.colValue} ${value.label === 'S.No' ? 'text-center' : ''}`}>{value.label}</th>
                                        )
                                    ))
                                ) : (
                                    tdValue.map((value: TdValueType, index: number) => (
                                        value.label === 'F Name' ? (
                                            <th key={index} className={`m-0 w-auto p-2 px-3 fw-semibold fs-5 ${value.colValue}`}>
                                                <button className='m-0 p-0 iconBtn' onClick={() => {
                                                    buttonvalue === 'Up' ? setButtonValue('Down') : setButtonValue('Up');
                                                }}>
                                                    <i className={buttonvalue === 'Up' ? `bi bi-arrow-up fs-5` : 'bi bi-arrow-down fs-5 '} ></i>
                                                </button>
                                                {value.label}
                                            </th>
                                        ) : (
                                            <th key={index} className={`m-0 w-auto p-2 px-3 fw-semibold fs-5 ${value.colValue} `}>{value.label}</th>
                                        )
                                    ))
                                )}
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.length > 0 ? (
                                    listStaff === 'Teams' ?
                                        data.map((item: UserDataType, index: number) => (
                                            <tr className={`m-0 p-0 snoTeam`} key={index}>
                                                <td className={`m-0 col-1 text-center snoTeam`} >
                                                    {((currentPage * recordsPerPage) - recordsPerPage) + (index + 1)}
                                                </td>
                                                <TdTeam type={'email'}  className='col-2' value={item.team_name} />
                                                <TdTeam type={'text'}  className='col-2' value={item.team_type} />
                                                <TdTeam type={'date'}  className='col-2' value={item.age_value} />
                                                <TdTeam type={'email'}  className='col-1' value={item.season_name} />
                                                <TdTeam type={'text'} className='col-2' value={item.address} />
                                            </tr>
                                        ))
                                        :
                                        data.map((item: UserDataType, index: number) => (
                                            <tr className={`m-0 p-0 w-100`} key={index}>
                                                <td className={`m-0 col-1 px-3 py-2  ${item.status === true ? 'activeRow' : 'nonActiveRow'}`}>
                                                    {((currentPage * recordsPerPage) - recordsPerPage) + (index + 1)}
                                                </td>
                                                <Td type={'email'} status={item.status} className='col-1 px-3 py-2 ' value={item.customeid} />
                                                <Td type={'text'} status={item.status} className='col-1  px-3 py-2 ' value={item.first_name} />
                                                <Td type={'date'} status={item.status} className='col-1  px-3 py-2 ' value={item.last_name} />
                                                <Td type={'email'} status={item.status} className='col-3  px-3 py-2 ' value={item.email} />
                                                {listStaff === 'Coach' && (<Td type={'text'} status={item.status} className='col-2 py-2 px-3' value={item.is_subscribe} />)}
                                                <td className={`m-0 p-3  px-3 py-2 col-2 ${item.status === true ? 'activeRow' : 'nonActiveRow'}`}>
                                                    <button className='m-0 p-0  w-auto tableBtn text-white fs-5'>View</button>
                                                </td>
                                            </tr>
                                        ))
                                ) : (
                                    <tr className='m-0 p-0'>
                                        <td className='m-0 fw-semibold text-center' colSpan={7}>No records for the result, Search Again!!!</td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </>
                )
            }

        </Table>
    );
}


export default UserDataTable;