import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TableDescriptionBookCar} from "./TableDescriptionBookCar";
import {BookCarType} from "../../app/reducer/bookCar/bookCar";

type CollapsibleTablePropsType = {
    checkBookUser: BookCarType[]
}


export const TableBookCar = (props: CollapsibleTablePropsType) => {
    return (
        <div className="garage__table-section">
            <h1 className='table__title'>Your car orders.</h1>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell className={'table__head table__none'}>Order</TableCell>
                            <TableCell className={'table__head'}>Car</TableCell>
                            <TableCell className={'table__head'}>Date-Up</TableCell>
                            <TableCell className={'table__head table__none'}>Date-Off</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.checkBookUser.map((el, index) => {
                            return (
                                <TableDescriptionBookCar
                                    key={el.id}
                                    row={el}
                                    countOrder={index + 1}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
