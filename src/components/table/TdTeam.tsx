import '../../css/Table.css';

type TDataType = {
    value: string | boolean | undefined;
    className: string;
    type: string;
}


const TdTeam = (props: TDataType) => {

    if (props.value === undefined) {
        return <td className={`m-0 ${props.className}`}>{props.value}</td>;
    }
    return <td className={`m-0 ${props.className}`} >{props.value}</td>
    
}
export default TdTeam;