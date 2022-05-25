import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    console.log(items);
    return (
        <div>
            <div className="my-28">
                <div className="text-center">
                    <h2 className="text-primary text-xl font-bold uppercase">Pick your item</h2>
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