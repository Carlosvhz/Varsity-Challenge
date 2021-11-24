import React, { createContext, useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";

import * as api from "../api/index";


export const UserContext = createContext();

const AuthProvider = ({children})_=> {

  useEffect( () => {

  }, [])

  return 
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
  
}

export default AuthProvider;