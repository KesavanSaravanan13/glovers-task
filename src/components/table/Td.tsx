import '../../css/Table.css';

type TDataType = {
    value: string | boolean;
    className: string;
    type: string;
    status:boolean;
}


const Td = (props: TDataType) => {
    if (props.value.toString() === 'false') {
        return <td className={`m-0 text-danger fw-semibold fs-5 p-3 ${props.className} ${props.status===true?'activeRow':'nonActiveRow'}`}>InActive</td>
    }
    else if (props.value.toString() === 'true') {
        return <td className={`m-0 text-success fw-semibold fs-5 p-3 ${props.className} ${props.status===true?'activeRow':'nonActiveRow'}`}>Active</td>
    } 
    return <td className={`m-0 fs-5 p-3 ${props.className} ${props.status===true ? 'activeRow':'nonActiveRow'}`} >{props.value}</td>
    
}
export default Td;