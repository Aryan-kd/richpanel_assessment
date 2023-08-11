import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PaymentScreen.scss';
import Logout from '../component/Logout';
import { useContextApi } from '../Context';

const PaymentScreen = () => {
  const context = useContextApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (context.user === null) {
      navigate('/login');
    }
    if (context.planSelected === null) {
      navigate('/pricing');
    }
  }, [context, navigate]);

  const handlePayment = async () => {
    context.planPurchase();
    await context.paymentCheckout(
      context.planSelected.Name,
      context.planSelected.Price
    );
  };

  return (
    <div className='container-main'>
      {context.user ? (
        <>
          <Logout />
          <div className='payment-box'>
            <div className='card-info'>
              <h4 className='head1'>Complete Payment</h4>
              <p>Enter your credit or debit card detail to checkout page</p>
              <Link onClick={handlePayment} className='btn btn-blue'>
                Confirm Payment
              </Link>
            </div>
            <div className='order-summery'>
              <h5>Order Summary</h5>
              <div className='order-row'>
                <p>Plan Name</p>
                <p>
                  {context.planSelected.Name ? context.planSelected.Name : ''}
                </p>
              </div>
              <hr />
              <div className='order-row'>
                <p>Billing Cycle</p>
                <p>{context.planSelected.Cycle}</p>
              </div>
              <hr />
              <div className='order-row'>
                <p>Plan Price</p>
                <p>
                  ₹ {`${context.planSelected.Price}`}/
                  {context.planSelected.Cycle === 'Monthly' ? 'mo' : 'yr'}
                </p>
              </div>
              <hr />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default PaymentScreen;
