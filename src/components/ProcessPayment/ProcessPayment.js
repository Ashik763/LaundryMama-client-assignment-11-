import React from 'react';
import {Elements,CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';
import Button from 'react-bootstrap/Button';
const stripePromise = loadStripe('pk_test_51Ipe7dKI5U9baoYDfbJ4pVbIHFY8bNL99wzOAFBwedjboyX7fZEiaHA4C0bvfkA2wSpICi6mNGvxdwIH9YngkBBt00DEzhboPg');

const ProcessPayment = ({userInfo}) => {
    return (
        <Elements stripe={stripePromise}>
      <SimpleCardForm userInfo={userInfo}></SimpleCardForm>
      {/* <Button> Pay here: </Button> */}
      </Elements>
    );
};

export default ProcessPayment;