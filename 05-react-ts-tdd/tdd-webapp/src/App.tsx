import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {

    const [label, setLabel] = useState('Click the button');

    const handleButtonClick = () => {
        setLabel("Thanks")
    };

    return (
        <div>
            <label id={"buttonLabel"}>{label}</label>
            <button
                aria-labelledby={"buttonLabel"}
                onClick={handleButtonClick}>Submit
            </button>
        </div>
    );
};

export default App;
