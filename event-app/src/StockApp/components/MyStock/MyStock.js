import React from 'react';
import { useSelector } from 'react-redux';
const MyStock = () => {

    const states = useSelector((state)=>state);
    return (
        <section>
            <h1>You currently own {states.myStocks} stocks</h1>
        </section>
    )
}

export default MyStock;