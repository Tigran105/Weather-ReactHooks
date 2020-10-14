import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Panel from '../Panel/panel';
import Cards from '../Cards/cards'
import { fetchData } from '../../fetching'

const List = () => {

    const [countryName, setcountryName] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData(countryName, setData)
    }, [countryName])

    return (
        <div>
            <Header
                countryName={setcountryName} />
            <Panel
                data={data}
            />
            <Cards 
            data = {data}
            />
        </div>
    )
}

export default List