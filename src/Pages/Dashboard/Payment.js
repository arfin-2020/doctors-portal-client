import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Slide from 'react-reveal/Slide';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MAR0BES1nmyy8WGazwAjCTX15GJ0zL4wPCvsLXIvuC6Jdo6T9cahVfF2PdFqPfT2w6ClfqU2LmMGzrHLKx4dAiM00foZoLlgd');

const Payment = () => {
   
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };
    return (
        <>
            
            <Slide left>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </Slide>
        </>
    )


};

export default Payment;