import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useAppSelector} from "../../hooks/redux";
import {TableDescriptionBookCar} from "./TableDescriptionBookCar";


export function CollapsibleTable() {
    const bookCarList = useAppSelector(state => state.bookCar.bookCar)

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell className={'table__head table__none'}>Order</TableCell>
                        <TableCell className={'table__head'}>Car</TableCell>
                        <TableCell className={'table__head'}>Date-Up</TableCell>
                        <TableCell className={'table__head'}>Date-Off</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookCarList.map(el => {
                        return (
                            <TableDescriptionBookCar key={el.id} row={el}/>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
