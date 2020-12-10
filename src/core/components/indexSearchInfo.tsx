import React, {  useState } from 'react';


import Search from '../../pages/Search/indexSearch';
import { makeRequest } from '../utils/request';
import { User } from '../types/User';
import Info from '../../pages/Info/indexInfo';
import Loaders from '../components/Loaders/ImageLoader';



const SearchInfo = () => {

    const [userInfo, setUserInfo] = useState<User>();
    const [isLoading, setLoading] = useState(false);

    const handleSearch = (search: string) => {
        setLoading(true);
        makeRequest({ url: `/${search}`, method: 'GET' })
            .then(response => {
                setUserInfo(response.data)})
            .catch(() => {
                setLoading(false)
                alert("Usuario não encontrado.")})
            .finally(() => {
                setLoading(false)
            })
    };

    return (
        <div>
            <Search onSearch={handleSearch} />
            {
                isLoading ? <Loaders /> :
                userInfo && (<Info user = {userInfo}/>)
            }
        </div>
    );
}

export default SearchInfo;