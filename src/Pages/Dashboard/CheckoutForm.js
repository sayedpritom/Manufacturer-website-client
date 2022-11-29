import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, name, email, price, quantity, } = order;
    let totalPrice = price * (parseInt(quantity));
    // console.log(totalPrice);

    useEffect(() => {
        fetch('https://try-m1nm.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(response => response.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true)

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.');

            // store payment info in database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            }
            fetch(`https://try-m1nm.onrender.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify( payment )
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setProcessing(false)

                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm mt-4 btn-primary" type="submit" disabled={!stripe || !clientSecret || success}>
                { processing ? <svg className="animate-spin h-4 w-4 rounded-full bg-transparent border-2 border-transparent border-opacity-50 mx-2" style={{"border-right-color": "white", "border-top-color": "white"}} viewBox="0 0 24 24"></svg> : "Pay"}
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {success && <div className="text-green-500">
                <p>{success}</p>
                <small>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span></small>
            </div>}
        </>
    );
};

export default CheckoutForm;