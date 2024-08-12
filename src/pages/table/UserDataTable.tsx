import React, { useEffect, useState } from 'react';
import '../../css/Table.css';
import { Table } from "react-bootstrap";
import { useGetDataQuery } from '../../Redux/apiSlice';
import Td from '../../components/table/Td';
import { Link } from 'react-router-dom';

interface UserDataType {
    first_name: string,
    last_name: string,
    email: string,
    status: boolean,
    is_subscribe: boolean,
    customeid: string,
}

interface UserType {
    data: UserDataType[];
    currentPage: number;
    recordsPerPage: number;
    loading: boolean;
    buttonvalue: string;
    setButtonValue: (value: string) => void;
}

const UserDataTable: React.FC<UserType> = ({ data, currentPage, recordsPerPage, loading, buttonvalue, setButtonValue }) => {
    const tdValue = [
        { colValue: 'col-1', label: 'S.No', type: 'text', },
        { colValue: 'col-1', label: 'Unique Id', type: 'text', },
        { colValue: 'col-1 ', label: 'F Name', type: 'date', },
        { colValue: 'col-1 ', label: 'L Name', type: 'text', },
        { colValue: 'col-3', label: 'Email', type: 'text', },
        { colValue: 'col-2 ', label: 'Subscription Status', type: 'text', },
        { colValue: 'col-2 ', label: 'Team Details', type: 'text', },
    ];

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
                                {tdValue.map((value, index) => (
                                    value.label === 'F Name' ? (
                                        <th key={index} className={`m-0 w-auto p-2 px-3 fw-semibold fs-5 ${value.colValue}`}>
                                            <button className='m-0 p-0 iconBtn' onClick={() => {
                                                buttonvalue === 'Up' ? setButtonValue('Down') : setButtonValue('Up')
                                            }}>
                                                <i className={buttonvalue === 'Up' ? `bi bi-arrow-up fs-5` : 'bi bi-arrow-down fs-5 '} ></i>
                                            </button>
                                            {value.label}
                                        </th>
                                    ) : (
                                        <th key={index} className={`m-0 w-auto p-2 px-3 fw-semibold fs-5 ${value.colValue} ${value.label === 'S.No' ? 'text-center' : ''}`}>{value.label}</th>
                                    )
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length > 0 ? (
                                    data.map((item: UserDataType, index: number) => (
                                        <tr className={`m-0 p-0 w-100`} key={index}>
                                            <td className={`m-0 col-1 text-center ${item.status === true ? 'activeRow' : 'nonActiveRow'}`}>
                                                {((currentPage * recordsPerPage) - recordsPerPage) + (index + 1)}
                                            </td>
                                            <Td type={'email'} status={item.status} className='col-1' value={item.customeid} />
                                            <Td type={'text'} status={item.status} className='col-1' value={item.first_name} />
                                            <Td type={'date'} status={item.status} className='col-1' value={item.last_name} />
                                            <Td type={'email'} status={item.status} className='col-2' value={item.email} />
                                            <Td type={'text'} status={item.status} className='col-2' value={item.is_subscribe} />
                                            <td className={`m-0 text-center col-2  ${item.status === true ? 'activeRow' : 'nonActiveRow'}`}></td>
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