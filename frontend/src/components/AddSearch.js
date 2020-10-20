import React, { } from 'react';

export default function AddSearch({searchParam, setSearchParam}){

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