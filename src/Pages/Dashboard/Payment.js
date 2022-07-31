import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LHYudDkWragjx8KesnC1upjgYx11cHs11snac8UNXx2Umj3Pb9kQIMdrMQWkBttbouueS1AiFqAZ2gyeyngW8Vx00yI1LIfVq');


const Payment = () => {
    const { id } = useParams();
    const url = `https://vast-citadel-09653.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery('order', () => fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

console.log(order)

    return (
        <div>
            <h2 className="text-1xl">Please pay for: <span className="text-primary">{id}</span></h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title text-primary">{order?.item}</h2>
                    <p className="font-medium">Total ordered quantity: {order?.quantity} units, total cost: ${parseInt(order?.quantity) * order?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;