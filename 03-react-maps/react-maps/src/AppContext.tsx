import React, {Dispatch, SetStateAction} from 'react';
import './App.css';


export interface SharedState {
    scale: number;
    scaleSetter: Dispatch<SetStateAction<number>>;
}

// The API to create a context wants a default context value (ugly)
let defaultState: SharedState = {
    scale: 0,
    scaleSetter: () => {
    }
};

const AppContext = React.createContext<SharedState>(defaultState); // <---- create a context

export const AppContextProvider = AppContext.Provider; // <--- the real value can be set via this provider

export default AppContext;
