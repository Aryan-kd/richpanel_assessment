import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentScreen.scss';

const PaymentScreen = () => {
  return (
    <div className='container-main'>
      <div className='payment-box'>
        <div className='card-info'>
          <h4 className='head1'>Complete Payment</h4>
          <p>Enter your credit or debit card detail below</p>
          <input className='form-control mb-3' type='text' />
          <Link to='/' className='btn btn-blue'>
            Confirm Payment
          </Link>
        </div>
        <div className='order-summery'>
          <h5>Order Summary</h5>
          <div className='order-row'>
            <p>Plan Name</p>
            <p>Basic</p>
          </div>
          <hr />
          <div className='order-row'>
            <p>Billing Cycle</p>
            <p>Monthly</p>
          </div>
          <hr />
          <div className='order-row'>
            <p>Plan Price</p>
            <p>₹ 200/mo</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
