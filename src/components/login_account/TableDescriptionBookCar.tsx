import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import {BookCarType} from "../../app/reducer/bookCar";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {bookCarDelete, bookCarOpenDescription} from "../../app/reducer/bookCar-reducer";
import {QRCodeCanvas} from "qrcode.react";
import {carsApi} from "../../api/cars-api";


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

type TableDescriptionBookCarPropsType = {
    row: BookCarType
    countOrder: number
}

export const TableDescriptionBookCar = (props: TableDescriptionBookCarPropsType) => {
    const classes = useRowStyles();

    const dispatch = useAppDispatch()

    const isDisabled = useAppSelector(state => state.isLoading.disabled)

    const bookCarDeleteId = (id: string) => {
        carsApi.deleteBookCar(id)
            .then(res => {
                dispatch(bookCarDelete(id))
                //disabled fix
            })
    }

    const bookCarOpen = (id: string, open: boolean) => {
        dispatch(bookCarOpenDescription({id, open}))
    }

    const pickTimeDate = new Date(props.row.pickTime);
    const dropTimeDate = new Date(props.row.dropTime);

    const differenceInMilliseconds = Number(dropTimeDate) - Number(pickTimeDate);
    const totalDay = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)) + 1;
    const totalCost = totalDay * Number(props.row.price)

    const QR_CodeValue = props.row.QrCode

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small"
                                onClick={() => bookCarOpen(props.row.id, !props.row.bookCarOpen)}
                    >
                        {
                            props.row.bookCarOpen
                                ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>
                        }
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        onClick={() => bookCarDeleteId(props.row.id)}
                        disabled={isDisabled}
                    >
                        <DeleteIcon aria-label="delete" className="button__delete"/>
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" className="table__head__description table__none">
                    {props.countOrder}
                </TableCell>
                <TableCell className="table__head__description">{props.row.carType}</TableCell>
                <TableCell className="table__head__description">{props.row.pickTime}</TableCell>
                <TableCell className="table__head__description table__none">{props.row.dropTime}</TableCell>
            </TableRow>
            {props.row.bookCarOpen &&
                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                        <Collapse in={props.row.bookCarOpen} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div" className="table__description">
                                    Description
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell/>
                                            <TableCell className="table__title__description table__none">
                                                price
                                            </TableCell>
                                            <TableCell className="table__title__description table__none">
                                                rental days
                                            </TableCell>
                                            <TableCell className="table__title__description">
                                                Total($)
                                            </TableCell>
                                            <TableCell className="table__title__description">
                                                QR code for rent
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell/>
                                            <TableCell className="table__title__depiction table__none">
                                                {props.row.price}
                                            </TableCell>
                                            <TableCell className="table__title__depiction table__none">
                                                {totalDay}
                                            </TableCell>
                                            <TableCell className="table__title__depiction">
                                                {totalCost}
                                            </TableCell>
                                            <TableCell className="table__title__depiction">
                                                <QRCodeCanvas value={QR_CodeValue} size={80}/>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            }
        </>
    );
};

