import { createContext, useContext, useState } from 'react';
import { data, userInfo } from '../assests/plan.js';

const ContextApi = createContext();
export const useContextApi = () => useContext(ContextApi);

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [planSelected, setPlanSelected] = useState(null);

  const LoginUser = async (email, pass) => {
    let userData = await userInfo.find((us) => {
      if (us.Email === email && us.Password === pass) {
        return true;
      }
    });

    if (userData) {
      // console.log(userData);
      setUser(userData);
    }
  };

  const LogoutUser = () => {
    setUser(null);
  };

  const PlanSelector = async () => {
    console.log(planSelected);
  };

  const RegisterUser = (Name, Email, Password) => {
    let userdata = {
      Name: Name,
      Email: Email,
      Password: Password,
      PlanStatus: null,
      PlanCycle: null,
      PlanName: null,
      Date: null,
    };
    setUser(userdata);
  };

  return (
    <ContextApi.Provider
      value={{
        user,
        planSelected,
        LoginUser,
        LogoutUser,
        RegisterUser,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};
