import React, {Dispatch, SetStateAction} from 'react';
import './App.css';

export interface SharedState {
    scale: number;
    scaleSetter: Dispatch<SetStateAction<number>>;
}

let defaultState: SharedState = {
    scale: 0,
    scaleSetter: () => {
    }
};

// MAIN CODE: create an (empty) context
// createContext() wants a default context value so that it can infer the type of the context
const AppContext = React.createContext<SharedState>(defaultState);

// The value of the context can be set via this provider, see App.tsx
export const AppContextProvider = AppContext.Provider;

export default  AppContext;
