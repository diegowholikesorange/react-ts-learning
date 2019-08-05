import React from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type LinkedList<T> = T & { next: LinkedList<T> };


interface Props {
    title: string;
    brainiesList?: LinkedList<string>;
    brainiesArray: Array<string>;
}




function createData(timestamp: number, blurp: string) {
    return {timestamp, blurp};
}

const rows = [
    createData(1, "first digit is pier at B800"),
    createData(2, "HR is called PAC"),
];

const App: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="App">

            <Paper>
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
