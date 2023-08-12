import { createContext, useContext, useState } from 'react';
import axios from 'axios';
// const url = 'https://richpanelapi.onrender.com:10000';
const url = 'http://localhost:4000';

const ContextApi = createContext();
export const useContextApi = () => useContext(ContextApi);

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [planSelected, setPlanSelected] = useState(null);

  const LoginUser = async (email, pass) => {
    const userSend = {
      email: email,
      password: pass,
    };
    let res = await axios.post(`${url}/login`, userSend);
    if (res.data.Data === null) {
      setUser(null);
      alert(res.data.message);
    } else {
      await findPlanId(res.data.Data.planId);
      localStorage.setItem('user', JSON.stringify(res.data.Data));
      setUser(res.data.Data);
      if (res.data.Data.planId !== null) {
      }
    }
  };

  const LogoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('planActive');
    setUser(null);
  };

  const RegisterUser = async (Name, Email, Password) => {
    const userSend = {
      name: Name,
      email: Email,
      password: Password,
    };

    await axios.post(`${url}/register`, userSend).then((res) => {
      if (res.data.Data === null) {
        setUser(null);
        alert(res.data.message);
      } else {
        localStorage.setItem('user', JSON.stringify(res.data.Data));
        setUser(res.data.Data);
      }
    });
  };

  const findPlanId = async (id) => {
    try {
      let res = await axios.post(`${url}/findplanid`, { id });
      if (res) {
        localStorage.setItem('planActive', JSON.stringify(res.data.Data));
        setPlanSelected(res.data.Data);
      } else {
        setPlanSelected(null);
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const findPlan = async (name, cycle) => {
    const planSend = {
      name: name,
      cycle: cycle,
    };
    await axios.post(`${url}/findplan`, planSend).then((res) => {
      if (res) {
        localStorage.setItem('planActive', JSON.stringify(res.data.Data));
        setPlanSelected(res.data.Data);
      } else {
        setPlanSelected(null);
      }
    });
  };
  const planPurchase = async () => {
    localStorage.setItem('planActive', JSON.stringify(planSelected));
    try {
      await axios.post(`${url}/purchase`, {
        plan: planSelected,
        userId: user._id,
      });
    } catch (error) {
      console.log('Error Purchase');
    }
  };

  const paymentCheckout = async (name, price) => {
    try {
      let response = await axios.post(`${url}/checkout`, {
        name: name,
        price: price,
      });
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const checkLocalStorage = () => {
    const userStorage = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null;
    setUser(userStorage);
    const planStorage = localStorage.getItem('planActive')
      ? JSON.parse(localStorage.getItem('planActive'))
      : null;
    setPlanSelected(planStorage);
  };

  return (
    <ContextApi.Provider
      value={{
        user,
        LoginUser,
        findPlan,
        planSelected,
        LogoutUser,
        RegisterUser,
        paymentCheckout,
        checkLocalStorage,
        planPurchase,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};
