import React, { useState,useEffect } from 'react';

export default function SearchParam(){
    const [searchParam, setSearchParam] = useState('');

    useEffect(()=>{

    },[searchParam])


    return (

        <form>
            <label>
                Search for ToDo
                <input type="text"
                    value={searchParam}
                    onChange={(event) => setSearchParam(event.target.value)}/>
            </label>
        </form>





    )

}