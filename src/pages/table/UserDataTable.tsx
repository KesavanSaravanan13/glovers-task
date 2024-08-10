import { useEffect, useState } from 'react';
import '../../css/Table.css';
import { Table } from "react-bootstrap";
import { useGetDataQuery } from '../../Redux/apiSlice';
import Td from '../../components/table/Td';


const UserDataTable = () => {
    const { data: data, isLoading } = useGetDataQuery([]);
    const [buttonvalue, setButtonValue] = useState('Up');
    const tdValue = [
        { colValue: 'm-0 p-0 w-auto', label: 'S.No', type: 'text', },
        { colValue: ' m-0 p-0 w-auto', label: 'Unique Id', type: 'text', },
        { colValue: 'm-0 p-0 w-auto', label: 'F Name', type: 'date', },
        { colValue: 'm-0 p-0 w-auto', label: 'L Name', type: 'text', },
        { colValue: 'm-0 p-0 w-auto', label: 'Email', type: 'text', },
        { colValue: 'm-0 p-0 w-auto', label: 'Subscription Status', type: 'text', },
        { colValue: 'm-0 p-0 w-auto', label: 'Team Details', type: 'text', },
    ];

    return (
        <Table className="m-0 p-0 userTable">
            <thead className="m-0 p-0">
                <tr className="m-0 p-0">
                    {tdValue.map((value, index) => (
                        value.label === 'F Name' ? (
                            <th key={index} className='m-0 w-auto p-2 px-3 fw-semibold fs-5'>
                                <button className='m-0 p-0 iconBtn' onClick={() => {
                                    buttonvalue === 'Up' ? setButtonValue('Down') : setButtonValue('Up')
                                }}>
                                    <i className={buttonvalue === 'Up' ? `bi bi-arrow-up fs-5` : 'bi bi-arrow-down fs-5 '} ></i>
                                </button>
                                {value.label}
                            </th>
                        ) : (
                            <th key={index} className='m-0 w-auto p-2 px-3 fw-semibold fs-5'>{value.label}</th>
                        )
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    isLoading ? (
                        <tr>
                            <td colSpan={5} className="text-center">
                                <div className="spinner-border themeColor" />
                            </td>
                        </tr>
                    ) : (
                        // data.length > 0 ? (
                        data?.map((item: {}, index: number) => (
                            <tr className='m-0 p-0 w-100' key={index}>
                                <td className='m-0 col-1'>1</td>
                                {/* <Td type={'text'} className='col-4' id={item.id} value={item.title} />
                                    <Td type={'date'} className='col-3' id={item.id} value={item.creationAt} />
                                    <Td type={'text'} className='col-2' id={item.id} value={item.price} /> */}
                                {/* <td className='m-0 text-center col-1'><Link to={`/patientlist/${item.id}`}><img src={view} alt='view' /></Link></td> */}
                            </tr>
                        ))
                        // ) : (
                        //     <tr className='m-0 p-0'>
                        //         <td className='m-0 fw-semibold text-center' colSpan={5}>No records for the result, Search Again!!!</td>
                        //     </tr>
                        // )
                    )
                }
            </tbody>
        </Table>
    );
}


export default UserDataTable;