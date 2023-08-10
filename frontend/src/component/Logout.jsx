import React from 'react';
import { useContextApi } from '../Context';

const Logout = () => {
  const context = useContextApi();
  const handleLogout = () => {
    context.LogoutUser();
  };

  return context.user === null ? (
    ''
  ) : (
    <button
      onClick={handleLogout}
      className='btn btn-outline-white button-fixed-top'
    >
      Logout
    </button>
  );
};

export default Logout;
