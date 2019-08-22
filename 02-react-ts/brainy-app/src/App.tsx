import React, {useState} from 'react';
import './App.css';
import BrainiesList from "./BrainiesList";


interface AppProps {
    title: string;
}

interface TableRow {
    timestamp: number;
    blurp: string;
}

let initialRows: Array<TableRow> = [
    createRowFromData(1, "first digit at B800 is pier"),
    createRowFromData(2, "HR is called PAC"),
];

function createRowFromData(timestamp: number, blurp: string): TableRow {
    return {timestamp: timestamp, blurp: blurp};
}

const App: React.FunctionComponent<AppProps> = (props) => {

    let [rowsInState, updateRowsInState] = useState(initialRows);

    const handleClick = () => {
        rowsInState = rowsInState.concat(createRowFromData(Date.now(), "you added this"))
        updateRowsInState(rowsInState);
    }

    return (
        <div className="App">
            <h3>{props.title}</h3>
            <BrainiesList brainies={rowsInState}/>
            <button onClick={handleClick}>Add</button>
        </div>
    );

};


export default App;
