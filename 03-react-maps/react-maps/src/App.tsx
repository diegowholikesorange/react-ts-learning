import React, {useState} from 'react';
import './App.css';
import MapComponent from "./MapComponent";
import NavComponent from "./NavComponent";
import {AppContextProvider, SharedState} from "./AppContext";


const App: React.FC = () => {

    const [s,ss]= useState<number>(9);

    let applicationContext: SharedState = {
        scale:s,
        setter:ss
    };

    return (
        <AppContextProvider value={applicationContext}>
            <div className="App">
                <header className="App-header">
                    <NavComponent/>
                    <MapComponent/>
                </header>
            </div>
        </AppContextProvider>
    );
};

export default App;
