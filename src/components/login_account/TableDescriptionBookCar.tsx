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
import {BookCarType} from "../../app/reducer/bookCar";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

type TableDescriptionBookCarPropsType = {
    row: BookCarType
}

export const TableDescriptionBookCar = (props: TableDescriptionBookCarPropsType) => {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" className="table__head__description table__none">1</TableCell>
                {/*<TableCell component="th" scope="row" className="table__head__description">{props.row.id}</TableCell>*/}
                <TableCell className="table__head__description">{props.row.carType}</TableCell>
                <TableCell className="table__head__description">{props.row.pickTime}</TableCell>
                <TableCell className="table__head__description">{props.row.dropTime}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
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
                                            QR code
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
                                            {props.row.price}
                                        </TableCell>
                                        <TableCell className="table__title__depiction">
                                            {props.row.price}
                                        </TableCell>
                                        <TableCell className="table__title__depiction">
                                            <a href="http://qrcoder.ru"><img
                                                src="http://qrcoder.ru/code/?%E7%E0%EA%E0%E7+123&4&0" width="120"
                                                height="120" title="QR код"/></a>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

