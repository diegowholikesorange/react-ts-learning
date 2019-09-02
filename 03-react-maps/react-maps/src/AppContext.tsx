import React, {Dispatch, SetStateAction} from 'react';
import './App.css';


export interface MapsContext {
    scale: number;
    scaleSetter: Dispatch<SetStateAction<number>>;
}

// The API to create a context wants a default context value (ugly)
let defaultContext: MapsContext = {
    scale: 0,
    scaleSetter: () => {
    }
};

const AppContext = React.createContext<MapsContext>(defaultContext); // <---- create a context with the ugly default

export const AppContextProvider = AppContext.Provider; // <--- the real value can be set via this provider

export default AppContext;
