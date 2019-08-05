import React, {MouseEvent} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import BrainiesList from "./BrainiesList";


interface AppProps {
    title: string;
}

interface Brainie {
    timestamp: number;
    blurp: string;
}


function createData(timestamp: number, blurp: string): Brainie {
    return {timestamp: timestamp, blurp: blurp};
}


let rows: Array<Brainie> = [
    createData(1, "first digit at B800 is pier"),
    createData(2, "HR is called PAC"),
];


const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <div className="App">
            <Paper>
                <h3>{props.title}</h3>
                <BrainiesList brainies={rows}/>
                <button onClick={handleClick}>Add</button>
            </Paper>
        </div>
    );
};


function handleClick(event: MouseEvent) {
    event.preventDefault();
    rows.push(createData(Date.now(), "you added this"))
    console.log("Added item" + rows.length)
}


export default App;
