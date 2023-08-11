import React, { useEffect } from 'react';
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
    } else {
      if (!context.user.planStatus) {
        navigate('/pricing');
      }
    }
  }, [context, navigate]);

  const changePlan = () => {
    console.log('Cancle');
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
                    context.user.planStatus ? 'active-plan' : 'cancelled-plan'
                  }`}
                >
                  {context.user.planStatus ? 'Active' : 'Cancelled'}
                </h6>
              </div>
              <div className='col-3 detail-2'>
                {context.user.planStatus ? (
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
                <h6 className='head1'>{context.planSelected.Name}</h6>
                <h6 className='head2 mb-3'>Phone + Tablet</h6>
                <h2 className='head3 mb-3'>
                  <span>₹ {context.planSelected.Price}</span>/
                  {context.planSelected.Cycle === 'Yearly' ? 'yr' : 'mo'}
                </h2>
                <Link to='/pricing' className='head4 btn btn-outline-blue mb-3'>
                  {context.user.planStatus ? 'Change Plan' : 'Choose Plan'}
                </Link>

                <h6 className='head5'>
                  {context.user.planStatus
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
