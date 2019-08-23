import React from 'react';
import './App.css';
import MapComponent from "./MapComponent";
import NavComponent from "./NavComponent";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <NavComponent initialScale={9}/>
                <MapComponent/>
            </header>
        </div>
    );
};

export default App;
