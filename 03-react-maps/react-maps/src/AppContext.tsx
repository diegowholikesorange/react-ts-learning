import React from 'react';
import './App.css';


const AppContext = React.createContext({scale:0});

export const AppContextProvider = AppContext.Provider;

export default AppContext;


