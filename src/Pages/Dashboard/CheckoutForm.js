import Alert from "@mui/material/Alert";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import '../Dashboard/Payment.css';


const CheckoutForm = () => {
    const { appointmentId } = useParams();
    const [paymentDetails, setPaymentDetails] = useState({});
    const { token, isLoading } = useAuth();
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transitionID, setTransitionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const {price, name, email, service} = paymentDetails;
    console.log('Payment Details------------', appointmentId)
 

    useEffect(() => {
        let url = `http://localhost:5000/booking/${appointmentId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setPaymentDetails(data);
            })
    }, [appointmentId, token])

    useEffect(()=>{
        if(price){

            fetch(`http://localhost:5000/create-payment-intent`,{
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    'authorization' :  `Bearer ${token}`,
                },
                body: JSON.stringify({price})
            })
            .then((res) => res.json())
            .then((data) => {
   
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
          });
        }
    },[price])



    if (isLoading) {
        return <p>Loading</p>
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error && error.message || "")
        console.log(error)
        setSuccess("")
        setProcessing(true)


        //confirm payment 
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:paymentDetails?.name,
                  email:paymentDetails?.email,
                  

                },
              },
            },
          );
          if(intentError){
            setCardError(intentError?.message)
            setProcessing(false)
          }else{
            setCardError("")
            // console.log("paymentIntent-----------------",paymentIntent)
            setTransitionId(paymentIntent?.id);
            setSuccess("Congrats! You Payment is Successfully Completed."); 

            // Store Payment on Database
            const paymentsDetails = {
                appointmentId: appointmentId,
                transitionId : paymentIntent?.id,
            };
            console.log("Payment Details--------",paymentDetails,appointmentId);
            fetch(`http://localhost:5000/booking/${appointmentId}`,{
                method: 'PATCH',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    'authorization' :  `Bearer ${token}`,
                },
                body: JSON.stringify(paymentsDetails)
            })
            .then((res) => res.json())
            .then((data)=>{
                console.log("Data-----------------", data)
            })
        }
    };
    


    return (
        <>
         <Slide left>
            <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: "600px" }}>
                    <div className="mb-10">
                    
                        <h1 className='text-2xl font-bold'>Hello, <span className='text-blue-600'>{paymentDetails?.name || "Empty Name"}</span> </h1>
                        <h1 className="text-center font-bold text-xl uppercase">Payable Amount {paymentDetails?.price}</h1>
                    </div>
                    <div className="mb-3">
                        <p className="font-bold text-left text-sm mb-2 ml-1">Name on card</p>
                        <div>
                            <input disabled className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" value={paymentDetails?.name || "Empty Name"} />
                        </div>
                    </div>

                    <div>
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
                            <button type="submit" disabled={!stripe || !clientSecret} className="mt-5 block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"> PAY NOW</button>
                        </form>

                        {cardError && (
                            <Alert className="mt-3" severity="error" color="warning">
                                {cardError}
                            </Alert>
                        )}
                        {success && (
                            <Alert className="mt-3" severity="error" color="success">
                                {success}
                                <p>Your Transition Id: {transitionID} </p>
                            </Alert>
                        )}
                    </div>
                </div>
            </div>
            </Slide>
        </>
    );
};

export default CheckoutForm;