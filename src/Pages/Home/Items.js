import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Item from './Item';

const Items = () => {

    const { data: items, isLoading, } = useQuery('parts', () => fetch('https://vast-citadel-09653.herokuapp.com/parts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
        .then(response => response.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="my-28">
                <div className="text-center my-5">
                    <h2 className="text-primary text-xl font-bold uppercase">Pick your items</h2>
                    <h2 className="text-4xl">We have all types of BLDC motors</h2>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                    {items?.map(item => <Item key={item._id} item={item}></Item>)}
                </div>
            </div>
        </div>
    );
};

export default Items;