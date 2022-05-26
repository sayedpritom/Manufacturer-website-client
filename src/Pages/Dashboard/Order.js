import React from 'react';

const Order = ({order, index}) => {
    const {quantity} = order;
    return (
            <tr>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>
    );
};

export default Order;