import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContextApi } from '../Context';
import './HomePage.scss';
import Logout from '../component/Logout';

const HomePage = () => {
  const context = useContextApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (context.user === null) {
      navigate('/login');
    }
    if (context.user.PlanName === null) {
      navigate('/pricing');
    }
  }, [context, navigate]);
  console.log(context.user);
  const [currentStatus, setCurrentStatus] = useState(true);

  const changePlan = () => {
    setCurrentStatus(false);
  };

  return (
    <div className='container-main'>
      {context.user ? (
        <>
          <Logout />
          <div className='plan-detail'>
            {/* row1 */}
            <div className='row row1 mb-3'>
              <div className='col-8 detail-1'>
                <h4>Current Plan Detail</h4>
                <h6
                  className={`${
                    context.user.PlanStatus === 'Active'
                      ? 'active-plan'
                      : 'cancelled-plan'
                  }`}
                >
                  {context.user.PlanStatus}
                </h6>
              </div>
              <div className='col-3 detail-2'>
                {context.user.PlanStatus === 'Active' ? (
                  <button className='cancel-btn' onClick={changePlan}>
                    Cancel
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
            {/* row2 */}
            <div className='row row2'>
              <div className='about-plan'>
                <h6 className='head1'>{context.user.PlanName}</h6>
                <h6 className='head2 mb-3'>Phone + Tablet</h6>
                <h2 className='head3 mb-3'>
                  <span>₹ {context.user.Price}</span>/
                  {context.user.PlanCycle === 'Yearly' ? 'yr' : 'mo'}
                </h2>
                <Link to='/pricing' className='head4 btn btn-outline-blue mb-3'>
                  {context.user.PlanStatus === 'Active'
                    ? 'Change Plan'
                    : 'Choose Plan'}
                </Link>

                <h6 className='head5'>
                  {context.user.PlanStatus === 'Active'
                    ? `Your subscription has started on Jul 11th, 2022 and will auto
              renew on Jul 12th, 2023`
                    : `Your subscription was cancelled and you will loose access to services on Jul 11th, 2023`}
                </h6>
              </div>
            </div>
          </div>{' '}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default HomePage;
