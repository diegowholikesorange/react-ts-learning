import React from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";

const App: React.FC = () => {
  return (
    <div className="App">
      Server says:
        <HelloWorld/>
    </div>
  );
}

export default App;
