import '../../css/Table.css';

type TDataType = {
    value: string | boolean | undefined;
    className: string;
    type: string;
    status:boolean;
}


const Td = (props: TDataType) => {

    if (props.value === undefined) {
        return <td className={`m-0 p-2 ${props.className} ${props.status ? 'activeRow' : 'nonActiveRow'}`}>{props.value}</td>;
    }
    if (props.value.toString() === 'false') {
        return <td className={`m-0 text-danger fw-bold p-2 ${props.className} ${props.status===true?'activeRow':'nonActiveRow'}`}>InActive</td>
    }
    else if (props.value.toString() === 'true') {
        return <td className={`m-0 text-success fw-bold p-2 ${props.className} ${props.status===true?'activeRow':'nonActiveRow'}`}>Active</td>
    } 
    return <td className={`m-0 p-2 ${props.className} ${props.status===true ? 'activeRow':'nonActiveRow'}`} >{props.value}</td>
    
}
export default Td;