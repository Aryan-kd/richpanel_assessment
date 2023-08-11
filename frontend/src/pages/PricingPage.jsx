import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PricingPage.scss';
import Logout from '../component/Logout';
import { useContextApi } from '../Context';

const PricingPage = () => {
  const context = useContextApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (context.user === null) {
      navigate('/login');
    }
  }, [context, navigate]);

  const [toggle, setToggle] = useState(true);
  const [plan, setPlan] = useState(1);

  const monthly = () => {
    setToggle(true);
  };
  const yearly = () => {
    setToggle(false);
  };

  const planSelect1 = () => {
    setPlan(1);
  };
  const planSelect2 = () => {
    setPlan(2);
  };
  const planSelect3 = () => {
    setPlan(3);
  };
  const planSelect4 = () => {
    setPlan(4);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name;
    let cycle;
    if (toggle) {
      cycle = 'Monthly';
    } else {
      cycle = 'Yearly';
    }

    if (plan === 1) {
      name = 'Mobile';
    } else if (plan === 2) {
      name = 'Basic';
    } else if (plan === 3) {
      name = 'Standard';
    } else if (plan === 4) {
      name = 'Premium';
    }

    await context.findPlan(name, cycle);
    navigate('/payment');
  };
  return (
    <>
      <Logout />
      <div className='container my-5'>
        <h3 className='text-center mb-3'>Choose the right plan for you</h3>
        <br />
        <div className='plan-box'>
          {/* row1 */}
          <div className='row'>
            <div className='col-md-12 col-lg-4 al-center'>
              <div className='switch-box'>
                <button
                  className={`toggle-${toggle ? 'active' : 'deactive'}`}
                  onClick={monthly}
                >
                  Monthly
                </button>
                <button
                  className={`toggle-${toggle ? 'deactive' : 'active'}`}
                  onClick={yearly}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className='col-md-12 col-lg-8'>
              <div className='price-box'>
                <div className='grouped-box'>
                  <button
                    onClick={planSelect1}
                    className={`pricing-box ${
                      plan === 1 ? 'pricing-box-active' : ''
                    }`}
                  >
                    Mobile
                  </button>
                  {plan === 1 ? (
                    <span className='arrow-down mx-auto'></span>
                  ) : (
                    ''
                  )}
                </div>
                <div className='grouped-box'>
                  <button
                    onClick={planSelect2}
                    className={`pricing-box ${
                      plan === 2 ? 'pricing-box-active' : ''
                    }`}
                  >
                    Basic
                  </button>
                  {plan === 2 ? (
                    <span className='arrow-down mx-auto'></span>
                  ) : (
                    ''
                  )}
                </div>
                <div className='grouped-box'>
                  <button
                    onClick={planSelect3}
                    className={`pricing-box ${
                      plan === 3 ? 'pricing-box-active' : ''
                    }`}
                  >
                    Standard
                  </button>
                  {plan === 3 ? (
                    <span className='arrow-down mx-auto'></span>
                  ) : (
                    ''
                  )}
                </div>
                <div className='grouped-box'>
                  <button
                    onClick={planSelect4}
                    className={`pricing-box ${
                      plan === 4 ? 'pricing-box-active' : ''
                    }`}
                  >
                    Premium
                  </button>
                  {plan === 4 ? (
                    <span className='arrow-down mx-auto'></span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
          <br />

          {/* row2 */}
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <h5>Monthly price</h5>
            </div>
            <div className='col-md-12 col-lg-8'>
              <div className='price-box'>
                <h5 className={plan === 1 ? 'checked' : ''}>
                  ₹ {toggle ? '100' : '1000'}
                </h5>
                <h5 className={plan === 2 ? 'checked' : ''}>
                  ₹ {toggle ? '200' : '2000'}
                </h5>
                <h5 className={plan === 3 ? 'checked' : ''}>
                  ₹ {toggle ? '500' : '5000'}
                </h5>
                <h5 className={plan === 4 ? 'checked' : ''}>
                  ₹ {toggle ? '700' : '7000'}
                </h5>
              </div>
            </div>
          </div>
          <hr />

          {/* row3 */}
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <h5>Video quality</h5>
            </div>
            <div className='col-md-12 col-lg-8'>
              <div className='price-box'>
                <h5 className={plan === 1 ? 'checked' : ''}>Good</h5>
                <h5 className={plan === 2 ? 'checked' : ''}>Good</h5>
                <h5 className={plan === 3 ? 'checked' : ''}>Better</h5>
                <h5 className={plan === 4 ? 'checked' : ''}>Best</h5>
              </div>
            </div>
          </div>
          <hr />

          {/* row4 */}
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <h5>Resolution</h5>
            </div>
            <div className='col-md-12 col-lg-8'>
              <div className='price-box'>
                <h5 className={plan === 1 ? 'checked' : ''}>480p</h5>
                <h5 className={plan === 2 ? 'checked' : ''}>480p</h5>
                <h5 className={plan === 3 ? 'checked' : ''}>1080p</h5>
                <h5 className={plan === 4 ? 'checked' : ''}>4K+HDR</h5>
              </div>
            </div>
          </div>
          <hr />

          {/* row5 */}
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <h5>Number of active screen at one time</h5>
            </div>
            <div className='col-md-12 col-lg-8'>
              <div className='price-box'>
                <h5 className={plan === 1 ? 'checked' : ''}>1</h5>
                <h5 className={plan === 2 ? 'checked' : ''}>3</h5>
                <h5 className={plan === 3 ? 'checked' : ''}>5</h5>
                <h5 className={plan === 4 ? 'checked' : ''}>10</h5>
              </div>
            </div>
          </div>

          <hr />
          {/* row6 */}
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <h5>Devices you can use to watch</h5>
            </div>
            <div className='col-md-12 col-lg-8'>
              <div className='price-box'>
                <ul>
                  <li>
                    <h6 className={plan === 1 ? 'checked' : ''}>Phone</h6>
                  </li>
                  <li>
                    <h6 className={plan === 1 ? 'checked' : ''}> </h6>
                  </li>
                  <li>
                    <h6 className={plan === 1 ? 'checked' : ''}> </h6>
                  </li>
                  <li>
                    <h6 className={plan === 1 ? 'checked' : ''}> </h6>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6 className={plan === 2 ? 'checked' : ''}>Phone</h6>
                  </li>
                  <li>
                    <h6 className={plan === 2 ? 'checked' : ''}>Tablet</h6>
                  </li>
                  <li>
                    <h6 className={plan === 2 ? 'checked' : ''}> </h6>
                  </li>
                  <li>
                    <h6 className={plan === 2 ? 'checked' : ''}> </h6>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6 className={plan === 3 ? 'checked' : ''}>Phone</h6>
                  </li>
                  <li>
                    <h6 className={plan === 3 ? 'checked' : ''}>Tablet</h6>
                  </li>
                  <li>
                    <h6 className={plan === 3 ? 'checked' : ''}>Computer</h6>
                  </li>
                  <li>
                    <h6 className={plan === 3 ? 'checked' : ''}> </h6>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6 className={plan === 4 ? 'checked' : ''}>Phone</h6>
                  </li>
                  <li>
                    <h6 className={plan === 4 ? 'checked' : ''}>Tablet</h6>
                  </li>
                  <li>
                    <h6 className={plan === 4 ? 'checked' : ''}>Computer</h6>
                  </li>
                  <li>
                    <h6 className={plan === 4 ? 'checked' : ''}>TV</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='al-center'>
          {/* <Link to='/payment' className='btn btn-blue btn-next'> */}
          <Link onClick={handleSubmit} className='btn btn-blue btn-next'>
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
