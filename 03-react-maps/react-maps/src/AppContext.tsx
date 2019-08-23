import React, {Dispatch, SetStateAction, useState} from 'react';
import './App.css';

export interface SharedState {
    scale: number;
    setter: Dispatch<SetStateAction<number>>;
}

// let defaultState: SharedState = {
//     scale:0,
//     setter:null
// };



const AppContext = React.createContext<SharedState|null>(null);

export const AppContextProvider = AppContext.Provider;

export default AppContext;


