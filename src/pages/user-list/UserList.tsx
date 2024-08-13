import '../../css/UserList.css';
import { useEffect, useState } from 'react';
import ColumnTemplate from '../../components/main-column/ColumnTemplate';
import { useGetDataQuery } from '../../Redux/apiSlice';
import { getBaseUrl } from '../../utils/functions/apiBase';
import { validUser } from '../../components/sweet-fires/SweetFires';

export type DataItem = {
    first_name: string;
    last_name: string;
    email: string;
    status: boolean;
    is_subscribe: boolean;
    customeid: string;
    team_name: string;
    address: string;
    age_value: string;
    season_name: string;
    team_type: string;
};

const UserList = () => {
    const [listStaff, setListStaff] = useState<string>('Coach');
    const [dataFromStore, setDataFromStore] = useState<DataItem[]>([]);
    const baseUrl = getBaseUrl(listStaff);
    const { data, isLoading, refetch } = useGetDataQuery(baseUrl);
    const [loading, setLoading] = useState<boolean>(isLoading);
    console.log(isLoading);
    useEffect(() => {
        console.log(loading);
        setDataFromStore([]);
        if (data) {
            setDataFromStore(data.data || []);
        }
        setLoading(isLoading);
    }, [data, isLoading]);

    useEffect(() => {
        if (refetch) {
            setLoading(true);
            refetch();
            setTimeout(() => {
                setLoading(isLoading);
            }, 1000);
        }
    }, [refetch, listStaff]);

    return (
        <ColumnTemplate
            listStaff={listStaff}
            dataFromStore={dataFromStore}
            setDataFromStore={setDataFromStore}
            loading={loading}
            setLoading={setLoading}
            setListStaff={setListStaff}
        />
    );
};

export default UserList;
