import React from 'react';
import './App.css';
import MapComponent from "./MapComponent";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <MapComponent/>
            </header>
        </div>
    );
};

export default App;
