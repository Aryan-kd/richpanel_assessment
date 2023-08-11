import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:4000';

const ContextApi = createContext();
export const useContextApi = () => useContext(ContextApi);

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const LoginUser = async (email, pass) => {
    const userSend = {
      email: email,
      password: pass,
    };
    await axios.post(`${url}/login`, userSend).then((res) => {
      if (res.data.Data === null) {
        setUser(null);
        alert(res.data.message);
      } else {
        setUser(res.data.Data);
      }
    });
  };

  const LogoutUser = () => {
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
        setUser(res.data.Data);
      }
    });
  };

  return (
    <ContextApi.Provider
      value={{
        user,
        LoginUser,
        LogoutUser,
        RegisterUser,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};
