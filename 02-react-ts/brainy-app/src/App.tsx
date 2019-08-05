import React from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


interface Props {
    title: string;
}


function createData(timestamp: number, blurp: string) {
    return {timestamp, blurp};
}


const rows = [
    createData(1, "first digit at B800 is pier"),
    createData(2, "HR is called PAC"),
];


const App: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="App">

            <Paper>
                <h3>
                    {props.title}
                </h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Time Stamp</TableCell>
                            <TableCell align="left">Brain Grain</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow>
                                <TableCell align="left">{row.timestamp}</TableCell>
                                <TableCell align="left">{row.blurp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

        </div>
    );
}

export default App;
