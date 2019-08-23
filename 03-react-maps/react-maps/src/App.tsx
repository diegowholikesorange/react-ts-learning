import React from 'react';
import './App.css';
import MapComponent from "./MapComponent";
import NavComponent from "./NavComponent";
import {AppContextProvider} from "./AppContext";


const App: React.FC = () => {

    const applicationContext = {scale:9};

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
