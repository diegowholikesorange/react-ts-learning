import React, {useState} from 'react';
import './App.css';
import MapComponent from "./MapComponent";
import NavComponent from "./NavComponent";
import {AppContextProvider, SharedState} from "./AppContext";


const App: React.FC = () => {

    const [mapScale, mapScaleSetter] = useState<number>(9);
    let sharedState: SharedState = { // <-- the REAL value for our context
        scale: mapScale,
        scaleSetter: mapScaleSetter
    };

    // Set the REAL value for shared state (via provider) into the context.
    // Then the value can be accessed via the child elements NavComponent and MapComponent
    return (
        <AppContextProvider value={sharedState}>
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
