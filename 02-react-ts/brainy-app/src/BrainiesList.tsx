import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';


interface Props {
    brainies: Array<Brainie>
}


interface Brainie {
    timestamp: number;
    blurp: string;
}


const BrainiesList: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="BrainiesList">

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Time Stamp</TableCell>
                            <TableCell>Brain Grain</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.brainies.map(row => (
                            <TableRow key={row.timestamp}>
                                <TableCell>{row.timestamp}</TableCell>
                                <TableCell>{row.blurp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Paper>

        </div>
    );
}

export default BrainiesList;



