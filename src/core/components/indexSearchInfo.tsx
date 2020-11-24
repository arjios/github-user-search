import React, {  useState } from 'react';


import Search from '../../pages/Search/indexSearch';
import { makeRequest } from '../utils/request';
import { User } from '../types/User';
import Info from '../../pages/Info/indexInfo';

function SearchInfo() {

    const [userInfo, setUserInfo] = useState<User>();

    const handleSearch = (search: string) => {
        console.log("Login: ");
        (search ? console.log(search) : console.log("Não existe search"))
        makeRequest({ url: `url : /${search}`, method: 'GET' })
            .then(response => {
                setUserInfo(response.data)})
            .catch(() => {
                alert("Usuario não encontrado.")
            })
    };

    return (
        <div>
            <Search onSearch={handleSearch} />
            {
                userInfo && (<Info user = {userInfo }/>)
            }
        </div>
    );
}

export default SearchInfo;